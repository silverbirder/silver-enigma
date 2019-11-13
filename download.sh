#!/bin/bash -e

dir=$(pwd)
mkdir -p $1
cd $1
curl https://circleci.com/api/v1.1/project/$VCS_TYPE/$USERNAME/$CIRCLE_PROJECT_REPONAME/$((CIRCLE_BUILD_NUM-1))/artifacts?circle-token=$CIRCLE_TOKEN \
      | grep -o 'https://[^"]*' \
      | grep 'bitmaps_test' \
      | grep -e '.png$' \
      | grep -v 'failed_diff' \
      | tr -d \" \
      | wget -v -i -
cd $dir