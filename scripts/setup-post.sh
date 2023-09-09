#!/bin/bash

read -p "Enter the name of the post branch: " post_branch
git switch -c post/$post_branch

cd src/drafts

read -p "Enter the title of the post: " title
read -p "Enter the description of the post: " description
read -p "Enter tags: " tags
read -p "Enter month: " mm
read -p "Enter day: " dd

slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-zA-Z]+/-/g; s/^-//; s/-$//')

year=$(date +%Y)
month=${mm:-$(date +%m)}
day=${dd:-$(date +%d)}

pubDate=$year-$month-$day
echo $slug

touch $slug.md
echo "https://victoriacheng15.vercel.app/posts/$slug"

echo --- >> $slug.md
echo title: \"$title\" >> $slug.md
echo description: \"$description\" >> $slug.md
echo publishDate: \"$pubDate\" >> $slug.md
echo tags: [$tags] >> $slug.md
echo --- >> $slug.md