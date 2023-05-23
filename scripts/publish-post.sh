#!/bin/bash

markdown_directory="src/content/post"
draft="true" 

# Extract publish dates and filenames, filter by draft value, sort by publish date
files_sorted_by_publish_date=()
while IFS= read -r -d $'\0' file; do
  publish_date=$(awk -F ': ' '/^publishDate:/ {print $2}' "$file")
  is_draft=$(awk -F ': ' '/^draft:/ {print $2}' "$file")
  if [[ $is_draft == "$draft" ]]; then
    files_sorted_by_publish_date+=("$publish_date|$file")
  fi
done < <(find "$markdown_directory" -name '*.md' -print0 | sort -z)

echo "------ list of files ------"
for file in "${files_sorted_by_publish_date[@]}"; do
  echo "$file"
done
echo "------ list of files ------"

# Change draft value in the first matching file
if [[ ${#files_sorted_by_publish_date[@]} -gt 0 ]]; then
  file=${files_sorted_by_publish_date[0]}
  file_path=${file#*|}
  echo "draft changed to false: $file_path"

  # Perform operations on the file, such as changing the draft value
  sed -i '0,/draft: true/s//draft: false/' "$file_path"
fi