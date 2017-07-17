#!/usr/bin/env bash
set -e
set -x

git pull
git add -A
git commit -m "Update from submit.sh"
git push
