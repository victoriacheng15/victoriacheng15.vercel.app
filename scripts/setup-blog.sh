#!/bin/bash

read -p "Enter the name of the blog branch: " blog_branch
git switch -c blog/$blog_branch

cd src/drafts

read -p "Enter the title of the blog post: " title
read -p "Enter tags: " tags
read -p "Enter month: " mm
read -p "Enter day: " dd

slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[-:,:]//g; s/ /-/g')

year=$(date +%Y)
month=${mm:-$(date +%m)}
day=${dd:-$(date +%d)}

pubDate=$year-$month-$day
echo $slug

touch $slug.md

echo --- >> $slug.md
echo title: \"$title\" >> $slug.md
echo description: \"Remember to change me Lorem ipsum dolor sit amet, consectetuer adipiscing eli\" >> $slug.md
echo publishDate: \"$pubDate\" >> $slug.md
echo tags: [$tags] >> $slug.md
echo --- >> $slug.md