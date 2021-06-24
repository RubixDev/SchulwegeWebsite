#!/bin/sh

# rubixdev.github.io/SchulwegeWebsite
echo -e "\033[1;36mPushing main branch src folder to gh-pages branch\033[0m"
git subtree push --prefix src origin gh-pages
echo -e "\033[33m..done\033[0m"

# schulwege.rubixdev.de
if [ "$USER" = "silas" ]; then
    echo -e "\033[1;36mPulling gh-pages branch to schulwege.rubixdev.de\033[0m"
    ssh contabo "cd /var/www/schulwege.rubixdev.de && git pull"
    echo -e "\033[33m..done\033[0m"
fi
