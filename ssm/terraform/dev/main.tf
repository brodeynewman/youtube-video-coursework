provider "aws" {
  region = "us-east-1"
}

# Backend s3 bucket for state files
resource "aws_s3_bucket" "terraform_state" {
  bucket = "everlook-playground-terraform-state"

  versioning {
    enabled = true
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

# Backend dynamo table for locks
resource "aws_dynamodb_table" "terraform_locks" {
  name         = "everlook-terraform-state-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}

# terraform {
#   backend "s3" {
#     bucket         = "everlook-playground-terraform-state"
#     key            = "ec2/terraform.tfstate"
#     region         = "us-east-1"
#     dynamodb_table = "everlook-terraform-state-locks"
#     encrypt        = true
#   }
# }

# locals  {
#   vpc_id = "vpc-7ea6c903"
#   public_subnet_id = "subnet-bb1240dd"
# }