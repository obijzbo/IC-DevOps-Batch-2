Initialize a Git Repository:

git init

Clone a Repository:

git clone <repository-url>

Set Up User Info:

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

Check Status:

git status

Stage Changes:

git add <file>          # Stage a specific file
git add .               # Stage all changes in the current directory
git add -A              # Stage all changes in the repository

Commit Changes:

git commit -m "Commit message"

Create and Switch to a New Branch:

git checkout -b <new-branch-name>

Merge a Branch:

git checkout <target-branch>
git merge <source-branch>

Delete a Branch:

git branch -d <branch-name>  # Delete a branch
git branch -D <branch-name>  # Force delete a branch

Add a Remote Repository:

git remote add <remote-name> <remote-url>

View Remote Repositories:

git remote -v

Fetch Changes:

git fetch <remote-name>

Pull Changes:

git pull <remote-name> <branch-name>

Push Changes:

git push <remote-name> <branch-name>

Rewriting History:

git rebase <base-branch>

Interactive Rebase:

git rebase -i <base-branch>

See Commit History:

git log

Reset to a Previous Commit:

git reset --hard <commit-hash>