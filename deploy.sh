#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.demoyoursite.net' > demoyoursite.net

git init
git add -A
git commit -m 'last'
git remote add origin https://github.com/fsd72021/right-treatment-vue.git

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fsd72021/right-treatment-vue.git master

cd -