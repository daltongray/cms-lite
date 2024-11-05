terraform {
  required_providers {
    github = {
      source  = "integrations/github"
    }
    google = {
      source  = "hashicorp/google"
    }
  }
}


provider "google" {
  project     = var.gcp_project_id
  region      = var.gcp_region
}

provider "github" {
  token = var.github_token
}


# Create the identity pool and provider
#
#
#

resource "google_iam_workload_identity_pool" "default-pool" {
  workload_identity_pool_id = "default-pool"
  display_name              = "Default pool"
  description               = "Identity pool for automated deploy via CI/CD"
}


resource "google_iam_workload_identity_pool_provider" "github-provider" {
  workload_identity_pool_id          = google_iam_workload_identity_pool.default-pool.workload_identity_pool_id
  workload_identity_pool_provider_id = "github-provider"
  display_name                       = "Github"
  description                        = "OIDC identity pool provider for automated deploy via CI/CD"
  attribute_mapping                  = {
    "google.subject"                  = "assertion.sub"
    "attribute.actor"                   = "assertion.actor"
    "attribute.aud" = "assertion.aud"
  }
  attribute_condition = "assertion.repository_owner=='daltongray'"
  oidc {
    issuer_uri        = "https://token.actions.githubusercontent.com"
  }
}

# Build the required service account
#
#
#

resource "google_service_account" "github" {
  account_id   = "deploy-service-account"
  display_name = "Service Account for Deploying Containers"
  }

resource "google_project_iam_member" "artifact_registry_writer" {
  project = var.gcp_project_id
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.github.email}"
}

resource "google_project_iam_member" "cloud_run_admin" {
  project = var.gcp_project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${google_service_account.github.email}"
}

resource "google_project_iam_binding" "run_deploy_sa_actas" {
  project = var.gcp_project_id
  role    = "roles/iam.serviceAccountUser"
  members = [
    "serviceAccount:deploy-service-account@${var.gcp_project_id}.iam.gserviceaccount.com"
  ]
}

resource "google_project_iam_member" "service_account_token_creator" {
  project = var.gcp_project_id
  role    = "roles/iam.serviceAccountTokenCreator"
  member  = "serviceAccount:${google_service_account.github.email}"
}

resource "google_service_account_iam_member" "workload_identity_user_binding" {
  service_account_id = google_service_account.github.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "principalSet://iam.googleapis.com/projects/${data.google_project.project.number}/locations/global/workloadIdentityPools/default-pool/attribute.repository/daltongray/change-my-story"
}

resource "google_service_account_iam_member" "workload_identity_user_binding_principle" {
  service_account_id = google_service_account.github.name
  role               = "roles/iam.serviceAccountTokenCreator"
  member             = "principalSet://iam.googleapis.com/projects/${data.google_project.project.number}/locations/global/workloadIdentityPools/default-pool/attribute.repository/daltongray/change-my-story"
}


/*
there's some block witht his provider stuff... trying to add the resource via gsutil

gcloud iam service-accounts add-iam-policy-binding deploy-service-account@fir-prototyping-31fc3.iam.gserviceaccount.com	  --project=change-my-story-dev --role="roles/iam.workloadIdentityUser" --member="principalSet://iam.googleapis.com/projects/313814482323/locations/global/workloadIdentityPools/default-pool/attribute.repository/daltongray/change-my-story"
source: https://blog.thecloudside.com/automating-terraform-templates-using-gitops-13fd62d02391
*/


# using a credentials key - not open id connect for now
resource "google_service_account_key" "my_service_account_key" {
  service_account_id = google_service_account.github.name
  key_algorithm      = "KEY_ALG_RSA_2048"
  private_key_type   = "TYPE_GOOGLE_CREDENTIALS_FILE"  # Outputs in JSON format
}

# Push required secrets to github
#
# PREFIX_GCP_PROJECT_ID
# PREFIX_GCP_POOL_ID
# PREFIX_GCP_PROVIDER_ID
# PREFIX_GCP_SERVICE_ACCOUNT_EMAIL
#
#
#

data "google_project" "project" {
}




data "github_actions_public_key" "default_public_key" {
  repository = "change-my-story"
}

resource "github_actions_secret" "project_number" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_PROJECT_NUMBER"
  plaintext_value = data.google_project.project.number
}

resource "github_actions_secret" "project_id" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_PROJECT_ID"
  plaintext_value = var.gcp_project_id
}

resource "github_actions_secret" "pool_id" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_POOL_NAME"
  plaintext_value = "default-pool"
}

resource "github_actions_secret" "provider_id" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_PROVIDER_NAME"
  plaintext_value = "github-provider"
}

resource "github_actions_secret" "service_account_email" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_SERVICE_ACCOUNT_EMAIL"
  plaintext_value = google_service_account.github.email
}

resource "github_actions_secret" "region" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_REGION"
  plaintext_value = var.gcp_region
}

// TODO item 2 - update the github actions to pull from this secret
resource "github_actions_secret" "sa_credentials" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_SA_CRDENTIALS_KEY"
  plaintext_value = google_service_account_key.my_service_account_key.private_key
}

