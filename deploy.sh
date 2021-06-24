#!/bin/sh
if [ -z "$1" ]; then
  echo -e "\033[1;31mPlease specify a website root folder!\033[0m"
  exit 1
fi
git subtree push --prefix $1 origin gh-pages
