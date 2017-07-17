#!/usr/bin/env bash
set -e

git pull
git add -A
git commit -m "Update from submit.sh"
git push
