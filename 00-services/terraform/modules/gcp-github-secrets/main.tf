terraform {
  required_providers {
    github = {
      source  = "integrations/github"
    }
  }
}

provider "github" {
  token = var.github_token
}

# GCP_PROJECT_ID
# GCP_REGION

resource "github_actions_secret" "project_id" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_PROJECT_ID"
  plaintext_value = var.gcp_project_id
}

resource "github_actions_secret" "project_region" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_GCP_REGION"
  plaintext_value = var.gcp_region
}
