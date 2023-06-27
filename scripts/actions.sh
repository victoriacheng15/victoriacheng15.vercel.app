#!/bin/bash

update_main() {
  git switch main
  git fetch && git pull origin main 
}

setup_blog() {
  read -p "Enter the name of the blog branch: " blog_branch
  git switch -c blog/$blog_branch

  cd src/drafts

  read -p "Enter the title of the blog post: " title
  read -p "Enter tags: " tags
  read -p "Enter month: " mm
  read -p "Enter day: " dd

  slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr -dc '[:alpha:] ' | tr ' ' '-')

  year=$(date +%Y)
  month=${mm:-$(date +%m)}
  day=${dd:-$(date +%d)}

  pubDate=$year-$month-$day
  echo $slug

  touch $slug.md

  echo --- >> $slug.md
  echo draft: true >> $slug.md
  echo title: $title >> $slug.md
  echo description: \"Remember to change me Lorem ipsum dolor sit amet, consectetuer adipiscing eli\" >> $slug.md
  echo publishDate: \"$pubDate\" >> $slug.md
  echo tags: [$tags] >> $slug.md
  echo --- >> $slug.md
}

actions=(
  "update_main"
  "setup_blog"
  "Publish Post"
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
      setup_blog
      break
      ;;
    ${actions[2]})
      scripts/publish-post.sh
      break
      ;;
    *)
      echo "Invalid option $REPLY"
      ;;
  esac
done