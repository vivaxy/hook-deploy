#!/usr/bin/env bash
cd ..
cd project
git pull origin master
npm install
npm run build
