#!/bin/bash

update_main() {
  git switch main
  git fetch && git pull origin main 
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
      scripts/setup-blog.sh
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