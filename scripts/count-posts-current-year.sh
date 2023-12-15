#!/usr/bin/bash

folder="src/content/post"
current_year=$(date +%Y)

dates=()

# Loop through the files in the folder
for file in "$folder"/*; do
  while read -r line; do
    if [[ $line =~ ^publishDate: ]]; then

      if [[ $line =~ [0-9]{4}-[0-9]{2}-[0-9]{2} ]]; then
        date="${BASH_REMATCH[0]}"

        if [[ $date =~ $current_year ]]; then dates+=("$date"); fi

      fi
    fi
  done <"$file"
done

echo "The total post for $current_year is ${#dates[@]}!"
