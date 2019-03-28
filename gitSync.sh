#!/bin/sh
commit_text="'$*'"
git add .
git commit \-m "commit_text"
git push
