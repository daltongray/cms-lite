locals {
  env = { for tuple in regexall("(.*?)=(.*)", file(".env")) : tuple[0] => tuple[1] }
}

provider "google" {
  project     = local.env["GCP_PROJECT_ID"]
  region      = var.gcp_region
}

module "open_id_connect_for_deploy" {
  source = "../../modules/github-openid-connect-resources"
  gcp_project_id = local.env["GCP_PROJECT_ID"]
  gcp_region = var.gcp_region
  github_token = local.env["GITHUB_TOKEN"]
  env_prefix = var.env_prefix
}

module "gcp_github_secrets" {
  source = "../../modules/gcp-github-secrets"
  gcp_project_id = local.env["GCP_PROJECT_ID"]
  gcp_region = var.gcp_region
  github_token = local.env["GITHUB_TOKEN"]
  env_prefix = var.env_prefix
}

module "frontend-secrets" {
  source = "../../modules/frontend-github-secrets"
  rocket_api_key=local.env["ROCKET_API_KEY"]
  rocket_auth_domain=local.env["ROCKET_AUTH_DOMAIN"]
  rocket_project_id=local.env["ROCKET_PROJECT_ID"]
  rocket_storage_bucket=local.env["ROCKET_STORAGE_BUCKET"]
  rocket_messaging_sender_id=local.env["ROCKET_MESSAGING_SENDER_ID"]
  rocket_app_id=local.env["ROCKET_APP_ID"]
  access_email=local.env["ACCESS_EMAIL"]

  github_token = local.env["GITHUB_TOKEN"]
  env_prefix=var.env_prefix
}


module "artifact-registry" {
  source = "../../modules/artifact-registry-resources"
  gcp_project_id = local.env["GCP_PROJECT_ID"]
  gcp_region = var.gcp_region
  github_token = local.env["GITHUB_TOKEN"]
  env_prefix = var.env_prefix
}

# Need to populate artifact registry first
module "cloud-run-services" {
  source = "../../modules/cloud-run-services"
  gcp_project_id = local.env["GCP_PROJECT_ID"]
  gcp_region = var.gcp_region
  github_token = local.env["GITHUB_TOKEN"]
  env_prefix = var.env_prefix
  repository_name = module.artifact-registry.repository_name
}
