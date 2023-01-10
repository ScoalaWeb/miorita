#!/usr/bin/env bash

npx cypress install
cp .env.test .env

yarn build
# start the server in the background
yarn dev &
#sleep 15
# run Cypress tests
yarn test:e2e
TEST_EXIT_CODE=$?

# Kill any nuxt process
pkill -f nuxt

if [ $TEST_EXIT_CODE -ne 0 ]
then
    exit $TEST_EXIT_CODE
fi
