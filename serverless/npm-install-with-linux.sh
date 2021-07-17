#!/bin/zsh
rm -rf node_modules
docker run \
  -w /builder \
  -v `pwd`/package.json:/builder/package.json \
  -v `pwd`/package-lock.json:/builder/package-lock.json \
  -v `pwd`/node_modules:/builder/node_modules \
  -v `pwd`/.npmrc:/builder/.npmrc \
  -e NPM_TOKEN=${NPM_TOKEN} \
  node:12 /bin/bash -c "npm ci"
