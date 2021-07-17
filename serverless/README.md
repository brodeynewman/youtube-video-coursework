# Serverless Boilerplate

Boilerplate package for spinning up new serverless projects.

## Getting started

Before deploying your new serverless app, a few changes need to be made.

1. Change your service name within [serverless.yml](https://github.com/swytch-x/serverless-boilerplate/blob/master/serverless.yml#L2).
    - This dictates the name of your service stack, IAM roles etc.
2. Add the following secrets to the github repo under `Settings`.
    - `NPM_AUTH_TOKEN`: Allow CI/CD to install private packages from our registry.
    - `AWS_ACCESS_KEY`: AWS credentials for our CI/CD user to deploy changes to our account.
    - `AWS_SECRET_ACCESS_KEY`: AWS secret access key for our CI/CD user to deploy changes to our account.
