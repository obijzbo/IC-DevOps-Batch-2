## Configure user information for all local repositories
-git config --global user.name "Your Name"
-git config --global user.email "your.email@example.com"

## Initialize a new Git repository
-git init

## git clone <repository-url>
-git clone <repository-url>

## Check the status of your files in the working directory and staging area
-git status

## Add a file to the staging area
-git add <file-name>

## Add all files to the staging area
-git add .

## Commit changes with a message
-git commit -m "Commit message"

## Add and commit changes with a message (single step)
-git commit -am "Commit message"

## List all branches
-git branch

## Create a new branch
-git branch <branch-name>

## Switch to a branch
-git checkout <branch-name>

## Create and switch to a new branch
-git checkout -b <branch-name>

## Merge a branch into the current branch
-git merge <branch-name>

## Delete a branch
-git branch -d <branch-name>

## Add a remote repository
-git remote add origin <repository-url>

## List remote repositories
-git remote -v

## Fetch changes from the remote repository
-git fetch

## Pull changes from the remote repository and merge
-git pull

## Push changes to the remote repository
-git push origin <branch-name>

## Show commit history
-git log

## Show commit history with diff of each commit
-git log -p

## Show a summary of commit history
-git log --oneline --graph --all --decorate

## Unstage a file
-git reset <file>

## Undo the last commit (keep changes)
-git reset --soft HEAD~1

## Undo the last commit (discard changes)
-git reset --hard HEAD~1

## Revert a specific commit
-git revert <commit-hash>

## git diff <commit1> <commit2>
-git diff <commit1> <commit2>

## Create a tag
-git tag <tag-name>

## Push tags to the remote repository
-git push origin --tags

