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


resource "google_artifact_registry_repository" "change-my-story" {
  location      = var.gcp_region
  repository_id = "${lower(var.env_prefix)}-change-my-story"
  description   = "Build images for dashboard, reader, and launch api images"
  format        = "DOCKER"
}


resource "github_actions_secret" "service_account_email" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_REPOSITORY_NAME"
  plaintext_value = google_artifact_registry_repository.change-my-story.name
}

output "repository_name" {
  value = google_artifact_registry_repository.change-my-story.name
}
