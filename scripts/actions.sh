#!/bin/bash

update_main() {
  git switch main
  git fetch && git pull origin main 
}

create_blog_branch() {
  read -p "Enter the name of the blog branch: " blog_branch
  git switch -c blog/$blog_branch
}

setup_blog() {
  cd src/content/post

  read -p "Enter the title of the blog post: " title
  read -p "Enter tags: " tags
  read -p "Enter image alt: " alt
  read -p "Enter month: " mm
  read -p "Enter day: " dd

  slug=$(echo $title | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  formated_alt=$(echo $title | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

  year=$(date +%Y)
  month=$(date +%m)
  day=$(date +%d)

  pubDate=$year-$month-$day

  touch $slug.md

  echo --- >> $slug.md
  echo title: $title >> $slug.md
  echo description: TBA >> $slug.md
  echo publishDate: \"$pubDate\" >> $slug.md
  echo tags: [$tags] >> $slug.md
  echo ogImage: \"/blog/$slug.jpg\" >> $slug.md
  echo --- >> $slug.md
  echo ![$alt](/blog/$slug.jpg) >> $slug.md
}

actions=(
  "update_main"
  "create_blog_branch"
  "setup_blog"
)

PS3="Select the action: " 

select action in "${actions[@]}"
do
  case $action in
    ${actions[0]})
      update_main
      break
      ;;
    ${actions[1]})
      create_blog_branch
      break
      ;;
    ${actions[2]})
      setup_blog
      break
      ;;
    *)
      echo "Invalid option $REPLY"
      ;;
  esac
done