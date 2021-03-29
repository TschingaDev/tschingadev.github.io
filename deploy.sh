#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.tschinga.ch' > CNAME

# Disable jekyll
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:TschingaDev/tschingadev.github.io.git master:gh-pages

cd -
