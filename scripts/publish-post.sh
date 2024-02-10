#!/bin/bash

drafts="src/drafts"
markdown_directory="/content/post"

cd "$drafts" || exit 1
files=($(ls -t))

# Create an associative array to store the publishDate of each file
declare -A publish_dates

for file in "${files[@]}"; do
  if [[ "$file" =~ \.md$ ]]; then
    publish_date=$(awk -F': ' '/publishDate:/ {print $2}' "$file")
    publish_dates["$file"]=$publish_date
  fi
done

# Sort the publish dates in ascending order using sort
sorted_files=($(for file in "${!publish_dates[@]}"; do
  echo "${publish_dates["$file"]} $file"
done | sort -k1,1 -t- | awk '{print $2}'))

if [[ -n "$sorted_files" ]]; then
  first_file=${sorted_files[0]}

  link="${first_file%.*}"
  echo -e "\n== 🎦️ The file is moving to the post folder 🎦️ ==\n"
  echo "Moving $first_file to $markdown_directory..."
  mv "$first_file" "../$markdown_directory"
  echo -e "\n== 🥳️ The file moving is done 🥳️ ==\n"
  echo "https://victoriacheng15.vercel.app/posts/$link"
else
  echo "no files"
fi
