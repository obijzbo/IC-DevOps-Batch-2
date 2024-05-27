
<p align="center">
    <img src="ss/vcs.png" alt="Logo" width=172 height=72>
  <h3 align="center">Version Control CheetSheet</h3>
  <p align="center">
  Some Commands in Git 
    <br>
   
  </p>
</p>


## Table of contents
- [Git Init](#git-init)
- [Git Add](#git-add)
- [Git Commit](#git-commit)
- [Git Push](#git-push)
- [Git Status](#git-status)
- [Git Rm](#git-rm)
- [Git Stash](#git-stash)






- [Creators](#creators)


# Git Commands

## Initialazation, Staging and Commiting

### Git Init
Initializes a new Git repository.
**Example**
``` 
git init
```
![Git Init](./ss/gitInit.png)

**Description :** 
Initializes a new Git repository. This command creates a new subdirectory named .git that contains all the necessary repository files.

### Git Add
Adds file contents to the staging area.
**Example**
```
git add <file1> (add one file)

git add . (all all file changes from current directory and subDirectories)
```
**Description :** 
```
This git command is used to add a specific file, or multiple files to local git repository
```
![Git Add](ss/gitAdd1.png)

### Git Commit
The `git commit` command is used to record changes to the repository.
**Example**
```
git commit -m "commit message header" -m "Small description"
```
**Description :** 
```
Captures a snapshot of the project’s currently staged changes. Commits are snapshots that save the state of the project at that point in time.

```
![Git Commit](ss/gitCommit.png)


### Git Push
The `git push` command is used to upload local repository content to a remote repository.
**Example**
```
git push <remote> <branch-name>
Ex: git push origin main
```
**Description :** 
```
- `git push`: This is the command to push your local commits to a remote repository.
- `origin`: This is the default name Git gives to the server from which you cloned your repository. It represents the remote repository.
- `main`: This is the name of the branch you want to push your commits to on the remote repository.
```
![Git Push](ss/gitPush.png)

### Git Status
The `git status` command displays the state of the working directory and the staging area.
**Example**

```
git status
```
**Description :** 
```
It lets you see which changes have been staged, which haven't staged yet , and which files aren't being tracked by Git.
```

![Git Status](ss/gitStatus.png)

### Git Rm
The `git rm` command is used to remove files from the staging area and the working directory.
**Example**
```
git rm --cached<file>
Ex: git rm --cached file1.txt
```
**Description :** 

```
--cached: Removes the file only from the index (staging area) while keeping it in your working directory.

-f: Forces the removal of the file even if it has changes that are staged or it is currently being tracked.
```

![Git Rm](ss/gitRm.png)

### Git Stash
The `git stash` command is used to temporarily store all the modified tracked files and staged changes.
**Example**
```
git stash -m "name"
Ex: git stash -m "Work in progress"
```
**Description :** 

```
- git stash temporarily shelves (or stashes) changes you've made to your working directory so you can work on something else, and then come back and re-apply them later on.
- The stashed changes are saved onto a stack, from which they can be re-applied (or dropped) later.
Commonly used options include:
- git stash pop: Re-applies the stashed changes and removes them from the stash stack.
- git stash apply: Re-applies the stashed changes without removing them from the stash stack.
- git stash list: Lists all stashed changesets.
- git stash drop: Removes a single stashed state from the stash list.
- git stash clear: Removes all the stashed states.
```

![Git Stash](ss/gitStash.png)




### Git reset








## Creators

**Creator 1**

- <https://github.com/usernamecreator1>

## Thanks

