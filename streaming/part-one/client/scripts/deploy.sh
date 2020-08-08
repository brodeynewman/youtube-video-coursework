#!/bin/bash

PROD_BUCKET="enter-prod-bucket"
DEV_BUCKET="enter-dev-bucket"

if [ "${CIRCLE_BRANCH}" = "master" ]; then
  aws s3 sync ./dist s3://${PROD_BUCKET} --delete
elif [ "${CIRCLE_BRANCH}" = "develop" ]; then
  aws s3 sync ./dist s3://${DEV_BUCKET} --delete
else
  echo "Branch was not found in allowed branches: [master, develop]. Exiting."
fi