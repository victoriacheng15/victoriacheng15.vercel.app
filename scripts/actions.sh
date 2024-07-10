#!/bin/bash

update_main() {
  git switch main
  git fetch && git pull origin main
}

continue_checks() {
  while true; do
    gh pr checks
    sleep 5
  done
}

actions=(
  "Update main branch"
  "Setup post branch and draft post(s)"
  "Publish a new post"
  "GH worflow check"
)

PS3="Select the action: "

select action in "${actions[@]}"; do
  case "$action" in
  "${actions[0]}")
    update_main
    break
    ;;
  "${actions[1]}")
    scripts/setup-post.sh
    break
    ;;
  "${actions[2]}")
    scripts/publish-post.sh
    break
    ;;
  "${actions[3]}")
    continue_checks
    break
    ;;
  *)
    echo "Invalid option $REPLY"
    ;;
  esac

done
