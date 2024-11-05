
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


resource "github_actions_secret" "rocket_api_key" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_ROCKET_API_KEY"
  plaintext_value = var.rocket_api_key
}
resource "github_actions_secret" "rocket_auth_domain" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_ROCKET_AUTH_DOMAIN"
  plaintext_value = var.rocket_auth_domain
}
resource "github_actions_secret" "rocket_project_id" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_ROCKET_PROJECT_ID"
  plaintext_value = var.rocket_project_id
}
resource "github_actions_secret" "rocket_storage_bucket" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_ROCKET_STORAGE_BUCKET"
  plaintext_value = var.rocket_storage_bucket
}


resource "github_actions_secret" "rocket_messaging_sender_id" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_ROCKET_MESSAGING_SENDER_ID"
  plaintext_value = var.rocket_messaging_sender_id
}

resource "github_actions_secret" "rocket_app_id" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_ROCKET_APP_ID"
  plaintext_value = var.rocket_app_id
}

resource "github_actions_secret" "access_email" {
  repository = "change-my-story"
  secret_name     = "${var.env_prefix}_ACCESS_EMAIL"
  plaintext_value = var.access_email
}
