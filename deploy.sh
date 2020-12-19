#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Use custom domain
echo 'www.tschinga.ch' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:MaxHuerlimann/tschinga.git master:gh-pages

cd -
