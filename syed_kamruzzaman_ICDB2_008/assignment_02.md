# IC-DevOps-Batch-2

## Name: Syed Kamruzzaman
## Student_id: ICDB2_008 - syed kamruzzaman



Git Commands
============

_A list of Git commands_
--
feel free to star [this](https://gist.github.com/vimalverma558/6fe59f3b7f886d2210bca28634b3a7fe)

___
___

### Tell Git who you are

| Description | Command |
| ------- | ----------- |
| Configure the author name.|`git config --global user.name "<username>"`|
| Configure the author email address.|`git config --global user.email <email address>`|



### Getting & Creating Projects

| Description | Command  |
| ------- | ----------- |
| Initialize a local Git repository | `git init` |
| Create a local copy of a remote repository | `git clone ssh://git@github.com/<username>/<repository-name>.git` |

### Basic Snapshotting

| Description | Command |
| ------- | ----------- |
| Check status | `git status` |
| Add a file to the staging area | `git add <file-name.txt>` |
| Add all new and changed files to the staging area | `git add -A` or <br> `git add .` |
| Commit changes | `git commit -m "<commit message>"` |
| Remove a file (or folder) | `git rm -r <file-name.txt>` |



### Inspection & Comparison

| Description | Command |
| ------- | ----------- |
| View changes | `git log` |
| View changes (detailed) | `git log --summary` |
| View changes in one line (briefly) | `git log --oneline` or <br> `git log --pretty=oneline` or<br> `git log --pretty=short` |




### Undo to previous file

| Description | Command |
| ------- | ----------- |
| List of all commit with commit id and commit message) | `git log --oneline` |
| Return to previous commit <commit id> | `git checkout<commit id>` |
| Revert commit <commit id> (undo one particular commit) | `git revert <commit id>` |
| Reset to previous commit <commit id> (remove history of all commit after <commit id> ) | `git reset --hard <commit id>`|
| Stop a file being tracked | `git rm --cached <file/folder>` |
| Restore a file to a previous commit| `git checkout <file/to/restore>` |



### Branching & Merging

| Description | Command |
| ------- | ----------- |
| List branches (the asterisk denotes the current branch) | `git branch` |
| List all branches (local and remote) | `git branch -a` |
| Create a new branch | `git branch <branch name>` |
| Create a new branch and switch to it | `git checkout -b <branch name>` |
| Clone a remote branch and switch to it | `git checkout -b <branch name> origin/<branch name>` |
| Rename a local branch | `git branch -m <old branch name> <new branch name>` |
| Switch to a branch | `git checkout <branch name>` |
| Switch to the branch last checked out | `git checkout -` |
| Discard changes to a file | `git checkout -- <file-name.txt>` |
| Delete a branch | `git branch -d <branch name>` |
| Delete a remote branch | `git push origin --delete <branch name>` |
| Preview changes before merging | `git diff <source branch>  <target branch>` |
| Merge a branch into the active branch | `git merge <branch name>` |
| Merge a branch into a target branch | `git merge <source branch> <target branch>` |
| Stash changes in a dirty working directory | `git stash` |
| Remove all stashed entries | `git stash clear` |

### Sharing & Updating Projects

| Description | Command |
| ------- | ----------- |
| Push a branch to your remote repository | `git push origin <branch name>` |
| Push changes to remote repository (and remember the branch) | `git push -u origin <branch name>` |
| Push changes to remote repository (remembered branch) | `git push` |
| Push changes to remote repository all branch | `git push --all` |
| Push changes to remote repository (Force) | `git push -f` |
| Delete a remote branch | `git push origin --delete <branch name>` |
| Update local repository to the newest commit | `git pull` |
| Pull changes from remote repository | `git pull origin <branch name>` |
| Add a remote repository | `git remote add origin ssh://git@github.com/<username>/<repository-name>.git` |
| Set a repository's origin branch to SSH | `git remote set-url origin ssh://git@github.com/<username>/<repository-name>.git` |


### Git Cheat Sheet
![This is a alt text.](/assignment_1/images/git_cheat_sheet.png)