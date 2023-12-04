#!/bin/bash

update_main() {
  git switch main
  git fetch && git pull origin main 
}

actions=(
  "Update main branch"
  "Setup post branch and draft post(s)"
  "Publish a new post"
  "Create a new Pull Request"
  "Check github action progress"
  "Merge a Pull Request"
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
    ${actions[3]})
      # -f --fill
      gh pr create -f
      break
      ;;
    ${actions[4]})
      # -i --interval
      gh pr checks -i --watch
      break
      ;;
    ${actions[5]})
      read -p "Enter the PR number: " pr_number
      # -s --squash -d --delete-branch
      if [[ -z $pr_number ]]; then
        gh pr merge -s -d
      else
        gh pr merge -s -d $pr_number
      fi
      break
      ;;
    *)
      echo "Invalid option $REPLY"
      ;;
  esac
done