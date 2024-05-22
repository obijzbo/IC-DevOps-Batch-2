# IC-DevOps-Batch-2

## Name:Md Fahad Hasan

## Student_id: ICDB2_008 - syed kamruzzaman

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
|`git checkout -b "<branch-name>"`|For create a new branch`|
|`git branch `|For check all branch|
|`git checkout master`| for Switches to master branch|

### Undo to previous file

| Description | Command |
| ------- | ----------- |

|`git log --oneline`|List of all commit with commit id and commit message|
|`git checkout<commit id>`|Return to previous commit <commit id>|
|`git revert <commit id>`|Revert commit <commit id> (undo one particular commit)|
|`git reset --hard <commit id>`|Reset to previous commit <commit id> (remove history of all commit after <commit id> )|
|`git rm --cached <file/folder>`|Stop a file being tracked|
|`git checkout <file/to/restore>`|Restore a file to a previous commit|
