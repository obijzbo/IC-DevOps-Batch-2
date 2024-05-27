# Essential Git Commands

## setup your Git username:
`git config --global user.name "Md. Ariful Islam"`
## setup your Git user email:
`git config --global user.email "signups@fabiopacifici.com"`
## initialize a Git repo:
`git init`
## add a file to the staging area in Git:
`git add filename_here`
## add all files in the staging area in Git
`git add .`
## add only certain files to the staging area in Git
`git add fil*`
## check a repository's status in Git:
`git status`
## commit changes in the editor in Git:
`git commit -m "your commit message here"`
## commit changes (and skip the staging area) in Git:
`git commit -a -m"your commit message here"`
## see your commit history in Git:
`git log`
## see your commit history including changes in Git:
`git log -p`
## see a specific commit in Git:
`git show commit-id`
## see log stats in Git:
`git log --stat`
## remove tracked files from the current working tree in Git:
`git rm filename`
## rename files in Git:
`git mv oldfile newfile`
## How to ignore files in Git:
`Create a .gitignore file and commit it.`
## Soft reset
`git reset --soft HEAD~1`
## Hard reset
`git reset --hard HEAD~1`
## create a branch in Git and switch to it immediately:
`git checkout -b branch_name`
## delete a branch in Git:
`git branch -d branch_name`
## Add remote to a repository
`git remote add origin https://repo_here`
## see remote URLs in Git:
`git remote -v`
## push changes to a remote repo in Git:
`git push`
## pull changes from a remote repo in Git:
`git pull`
## check remote branches that Git is tracking:
`git branch -r`
## fetch remote repo changes in Git:
- This command will download the changes from a remote repo but will not perform a merge on your local branch (as git pull does that instead).
`git fetch`
## check the current commits log of a remote repo in Git
`git log origin/main`
## merge a remote repo with your local repo in Git:
`git merge origin/main`
## push a new branch to a remote repo in Git:
`git push -u origin branch_name`
## remove a remote branch in Git:
`git push --delete origin branch_name_here`
## How to use Git rebase:
- You can transfer completed work from one branch to another using git rebase.
`git rebase branch_name_here`