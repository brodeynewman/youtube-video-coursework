#!/bin/bash

if [ "${CIRCLE_BRANCH}" = "master" ]; then
cat > .env << EOF1

# Any environment variables you want inside of your application
APP_URL = $APP_URL_PROD

EOF1
elif [ "${CIRCLE_BRANCH}" = "develop" ]; then
cat > .env << EOF1

# Any environment variables you want inside of your application
APP_URL = $APP_URL_DEV

EOF1
else
  echo "Branch was not found in allowed branches: [master, develop]. Exiting."
fi