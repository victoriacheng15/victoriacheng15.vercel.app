#!/bin/bash

echo "Enter the name of the post branch: "
read -r post_branch

if [[ -n "$post_branch" ]]; then
  git switch -c post/"$post_branch"
else
  echo "no input provided, skipping the git command."
fi

cd src/drafts || exit

echo "Enter the title of the post: " title
read -r title
echo "Enter the description of the post: " description
read -r description
echo "Enter tags: " tags
read -r tags
echo "Enter month: " mm
read -r mm
echo "Enter day: " dd
read -r dd

slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-zA-Z]+/-/g; s/^-//; s/-$//')

year=$(date +%Y)
month=${mm:-$(date +%m)}
day=${dd:-$(date +%d)}

pubDate=$year-$month-$day

touch $slug.md
echo "https://victoriacheng15.vercel.app/posts/$slug"

echo --- >> $slug.md
echo title: \"$title\" >> $slug.md
echo description: \"$description\" >> $slug.md
echo publishDate: \"$pubDate\" >> $slug.md
echo tags: [$tags] >> $slug.md
echo --- >> $slug.md