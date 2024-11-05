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

resource "google_cloud_run_v2_service" "launch_api" {
  client                  = "gcloud"
  client_version          = "496.0.0"
  name     = "${lower(var.env_prefix)}-launch-api"
  location = var.gcp_region
  ingress  = "INGRESS_TRAFFIC_ALL"
  template {
    containers {
      image = "${var.gcp_region}-docker.pkg.dev/${var.gcp_project_id}/${var.repository_name }/launch:latest"
    }
    scaling {
      min_instance_count = 0
      max_instance_count = 1
    }
  }
}

resource "google_cloud_run_v2_service" "dashboard" {
  client                  = "gcloud"
  client_version          = "496.0.0"
  name     = "${lower(var.env_prefix)}-dashboard"
  location = var.gcp_region
  ingress  = "INGRESS_TRAFFIC_ALL"
  template {
    containers {
      image = "${var.gcp_region}-docker.pkg.dev/${var.gcp_project_id}/${var.repository_name }/dashboard:latest"
    }
    scaling {
      min_instance_count = 0
      max_instance_count = 1
    }
  }
}

resource "google_cloud_run_v2_service" "reader" {
  client                  = "gcloud"
 client_version          = "496.0.0"
  name     = "${lower(var.env_prefix)}-reader"
  location = var.gcp_region
  ingress  = "INGRESS_TRAFFIC_ALL"
  template {
    containers {
      image = "${var.gcp_region}-docker.pkg.dev/${var.gcp_project_id}/${var.repository_name }/reader:latest"
    }
    scaling {
      min_instance_count = 0
      max_instance_count = 1
    }
  }
}


# Setup github secrets with the service names
#
#
#
resource "github_actions_secret" "launch_service_name" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_CLOUD_RUN_SERVICE_NAME_LAUNCH"
  plaintext_value = google_cloud_run_v2_service.launch_api.name
}
resource "github_actions_secret" "dashboard_service_name" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_CLOUD_RUN_SERVICE_NAME_DASHBOARD"
  plaintext_value = google_cloud_run_v2_service.dashboard.name
}
resource "github_actions_secret" "reader_service_name" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_CLOUD_RUN_SERVICE_NAME_READER"
  plaintext_value = google_cloud_run_v2_service.reader.name
}

# NOTE - this won't write the full uri on the first deploy. We must run this after the cloud run service is created
# Build a data source to get the URL of the Cloud Run service.
# This seems like a bug on the cloud run v2 provider to not provide the URL of the service
# source: https://github.com/hashicorp/terraform-provider-google/issues/15119
data "google_cloud_run_service" "launch-post-build" {
  location = var.gcp_region
  project = var.gcp_project_id
  name = google_cloud_run_v2_service.launch_api.name
}

// TODO item 2 - we need to add the firebase hosting sites we setup to stabilize the reader / launch url
// this needs to pull from that

resource "github_actions_secret" "launch_service_url" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_CLOUD_RUN_SERVICE_URL_LAUNCH"
  plaintext_value = "https://dev-change-my-story-api.web.app" // data.google_cloud_run_service.launch-post-build.status[0].url
}


