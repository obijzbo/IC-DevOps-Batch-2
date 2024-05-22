# IC-DevOps-Batch-2

## Name:Md Fahad Hasan

## Student_id: ICDB2_0037 - Md Fahad

List all the git commands learned in the course

This command is used to login to our pc with git bash

| Git Description                     | Git Commands                                     |
| ----------------------------------- | ------------------------------------------------ |
| Configure the author name.          | `git config --global user.name "<username>"`     |
| Configure the author email address. | `git config --global user.email <email address>` |

### Getting & Creating Projects

| Description                                | Command                                                           |
| ------------------------------------------ | ----------------------------------------------------------------- |
| Initialize a local Git repository          | `git init`                                                        |
| Create a local copy of a remote repository | `git clone ssh://git@github.com/<username>/<repository-name>.git` |

### Basic git commands
`mkdir <>folder-name>` (For create new folder) 

 `cd <Folder name>`  (For Open new folder) 

 `touch office-candy.txt` (For create text file ) 

`git add office-candy.txt` (For uploead Only text file) 

`git add .` (For upload all files) 

`git reset` (For remove all uploaded files) 

`git status` (For check all committed)

`git commit -m" add office <file-name>"`(For commit pattern) 
`git rm -r <file-name.txt>`(For remove a file or folder) 

### Inspection & Comparison

| Description | Command |
| ------- | ----------- |
 | `git log` |View changes |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` or  `git log --pretty=oneline` or `git log --pretty=short` | View changes in one line (briefly) |

![This is a alt text.](/assignment_1/ICDB2_037-fahad/Store%20Images/git%20log.png)
### Undo to previous file

| Description | Command |
| ------- | ----------- |
| `git log --oneline` | List of all commit with commit id and commit message |
| `git checkout<commit id>` | Return to previous commit <commit id> |
| `git revert <commit id>` | Revert commit <commit id> (undo one particular commit) |
| `git reset --hard <commit id>` | Reset to previous commit <commit id> (remove history of all commit after <commit id> ) |
| `git rm --cached <file/folder>` |Stop a file being tracked |
| `git checkout <file/to/restore>` | Restore a file to a previous commit |

![This is a alt text.](/assignment_1/ICDB2_037-fahad/Store%20Images/git%20log%20--oneline.png)
![This is a alt text.](/assignment_1/ICDB2_037-fahad/Store%20Images/git%20log%20--oneline.png)
### Branching & Merging

| Description | Command |
| ------- | ----------- |
| `git branch` | List branches (the asterisk denotes the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch <branch name>` | Create a new branch |
| `git checkout -b <branch name>` | Create a new branch and switch to it |
| `git checkout -b <branch name> origin/<branch name>` | Clone a remote branch and switch to it |
|`git branch -m <old branch name> <new branch name>` | Rename a local branch | 
|`git checkout master`| for Switches to master branch|
|`git checkout <branch name>` | Switch to a branch | 
|`git checkout -` | Switch to the branch last checked out | 
|`git checkout -- <file-name.txt>` | Discard changes to a file | 
|`git branch -d <branch name>` | Delete a branch | 
|`git push origin --delete <branch name>` | Delete a remote branch | 
|`git diff <source branch>  <target branch>` | Preview changes before merging | 
| `git merge <branch name>` | Merge a branch into the active branch |
|`git merge <source branch> <target branch>` | Merge a branch into a target branch | 
|`git stash` | Stash changes in a dirty working directory | 
|`git stash clear` | Remove all stashed entries | 

![This is a alt text.](/assignment_1/ICDB2_037-fahad/Store%20Images/Branching%20&%20Merging.png)
### Sharing & Updating Projects

| Description | Command |
| ------- | ----------- |
|`git push origin <branch name>` | Push a branch to your remote repository | 
|`git push -u origin <branch name>` | Push changes to remote repository (and remember the branch) | 
|`git push` | Push changes to remote repository (remembered branch) | 
|`git push --all` | Push changes to remote repository all branch | 
|`git push -f` | Push changes to remote repository (Force) | 
|`git push origin --delete <branch name>` | Delete a remote branch | 
|`git pull` | Update local repository to the newest commit | 
|`git pull origin <branch name>` | Pull changes from remote repository | 
|`git remote add origin ssh://git@github.com/<username>/<repository-name>.git` | Add a remote repository | 
|`git remote set-url origin ssh://git@github.com/<username>/<repository-name>.git` | Set a repository's origin branch to SSH | 

