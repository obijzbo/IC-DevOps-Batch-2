Here are the most commonly used Git commands:

● `git init`  
  "Initializes a new Git repository in the current directory."

● `git add .`  
  "Stages all changes (new files, modifications, deletions) for the next commit."

● `git commit -m "[Message]"`  
  "Commits the staged changes with a descriptive message."

● `git status`  
  "Displays the status of the working directory and staging area, showing any changes."

● `git log`  
  "Displays a log of all commits made in the repository."

● `git branch`  
  "Lists all branches in the repository. The current branch is indicated with an asterisk (*)."

● `git checkout -b "[Branch Name]"`  
  "Creates a new branch with the specified name and switches to it."

● `git clone "[ssh of repo]"`  
  "Clones a remote repository to your local machine using the provided SSH URL."

● `git reset HEAD~1`  
  "Moves the current branch back by one commit, but leaves the working directory and staging area as they were."

● `git reset --hard HEAD~1`  
  "Moves the current branch back by one commit and resets the working directory and staging area to match the commit."

● `git reflog`  
  "Shows a log of all the changes made to the tip of branches and other references."

● `git reset --hard [reflog HEAD]`  
  "Resets the current branch and working directory to the state of the specified reflog entry."

● `git cherry-pick [Commit Hash]`  
  "Copies and pastes any commit from any branch to the current branch."

● `git stash`  
  "Temporarily saves changes that are not yet ready to be committed, leaving the working directory clean."

● `git stash pop`
  "Brings back the stashed changes and integrates where it was initially created."

● `git remote add [repo name] [repo ssh link]`  
  "Adds a new remote repository with the specified name and SSH URL."

● `git fetch`  
  "Downloads objects and refs from remote repository."

● `git rebase`  
  "Applies commits of the current branch on top of another branch in order to integrate changes."

● `git pull [remote repo name]`  
  "Fetches and rebases changes of repository to a local branch."
