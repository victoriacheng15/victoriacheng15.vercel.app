#!/bin/bash

update_main() {
  git switch main
  git fetch && git pull origin main 
}

actions=(
  "update main"
  "setup post"
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
      scripts/setup-post.sh
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