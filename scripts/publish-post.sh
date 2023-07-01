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
sorted_files=($(printf "%s\n" "${!publish_dates[@]}" | sort -k1 -t-))

echo -e "=== List of files sorted by publish date: ===\n"
for file in "${sorted_files[@]}"; do
  publish_date=${publish_dates["$file"]}
  echo "$publish_date - $file"
done
echo -e "\n=== List of files sorted by publish date: ===\n"

if [[ ${#sorted_files[@]} -gt 0 ]]; then
  first_file=${sorted_files[0]}

  echo "Moving $first_file to $markdown_directory"
  # mv "$first_file" "../$markdown_directory"
  echo "Moved $first_file to $markdown_directory"
else
  echo "No file found with a publish date."
fi