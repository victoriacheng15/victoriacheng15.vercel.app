#!/bin/bash

drafts="src/drafts"
markdown_directory="/content/post"

cd "$drafts" || exit 1
files=($(ls -t))

# Create an associative array to store the publishDate of each file
declare -A publish_dates

for file in "${files[@]}"; do
  publish_date=$(awk -F'"' '/publishDate:/ {print $2}' "$1" "$file")
  publish_dates["$file"]=$publish_date
done

# Sort the publish dates in ascending order using sort
sorted_files=($(printf "%s\n" "${!publish_dates[@]}" | sort -k2 -t- -r))

echo "List of files sorted by publish date:"
for file in "${sorted_files[@]}"; do
  publish_date=${publish_dates["$file"]}
  echo "$publish_date - $file"
done
echo "List of files sorted by publish date:"


if [[ ${#sorted_files[@]} -gt 0 ]]; then
  first_file=${sorted_files[0]}

  echo "Moving $first_file to $markdown_directory"
  mv "$first_file" "../$markdown_directory"
  echo "Moved $first_file to $markdown_directory"
else
  echo "No file found with a publish date."
fi