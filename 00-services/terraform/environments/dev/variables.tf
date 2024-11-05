variable "gcp_region" {
  type=string
  default="us-east1"
  description="GCP Region for services"
}
variable "creds_location" {
  type = string
  default = "./gcpCredentials.json"
}

variable "env_prefix" {
  type = string
  default = "DEV"
}
