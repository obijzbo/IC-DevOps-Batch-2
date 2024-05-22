<h1 align="center"> Git Commands Scribe Sheet </h1>
<p align="center"><i>by @GausAlMunirTushar - ICDB2_085</i></p>


![GIT Agssignment](./screenshots/git-assignment.jpg)
<p align="center">Below is a comprehensive scribe sheet for Git commands. This includes descriptions, examples and screenshots. </p>

### Table of Contents : 

1. [Git Basic Commands](#git-basic-commands)
   - [Git Version](#git-version)
   - [Git Config](#git-config)
   - [Git Init](#git-init)
   - [Git Status](#git-status)
   - [Git Add](#git-add)
   - [Git Commit](#git-commit)
   - [Git Branch](#git-branch)
   - [Git Remote](#git-remote)
   - [Git Push](#git-push)
   - [Git Pull](#git-pull)
2. [Git Advanced Commands](#git-advanced-commands)
   - [Git Commit](#gitcommit)
---

## Git Basic Commands
### Git Version
Displays the currently installed version of Git.
**Example**
```bash
   git --version
```
![Git Version](./screenshots/git-version.png)
**Description :** 
Displays the current version of Git installed on your system. This command is useful for verifying that Git is installed and for checking the installed version to ensure compatibility with other tools or repositories.


### Git Config
Git config command is a convenience function that is used to set Git configuration values on a global or local project level
**Description :** 
The git config command allows you to get and set configuration options that control the appearance and behavior of Git. Configurations can be set at three levels:

- System: Applies to every user on the system and all their repositories.
- Global: Applies to all repositories for the current user.
- Local: Applies to the specific repository you are currently working in

![Git Config](./screenshots/git-config.png)

1. **Set User Name**
   Sets the name that will be attached to your commits and tags. 
   **Example**
```bash
   // global config name
   git config --global user.name "Gaus Al Munir Tushar"
```
2. **Set User Email**
Sets the email address that will be attached to your commits and tags.
```bash
   // global config email
   git config --global user.name "Gaus Al Munir Tushar"
```
3. **Set Default Text Editor**
Sets the default text editor that will be used by commands like git commit for editing commit messages
```bash
   git config --global core.editor "editor"
   git config --global core.editor "code"
```

### Git Init
Initializes a new Git repository.
**Example**
```bash
   git init
```
![Git Init](./screenshots/git-init.png)
**Description :** 
Initializes a new Git repository. This command creates a new subdirectory named .git that contains all the necessary repository files.
### Git Status
To view the current status of the repository:
**Example**
```bash
   git status
```
![Git Init](./screenshots/git-status.png)
- Untracked files:

![Git Init](./screenshots/git-status-1.png)
**Description :** 
When run git status, Git provides information about:
- Modified files: Files that have been changed but not yet staged for commit.
- Staged files: Changes that have been added to the staging area and are ready to be committed.
- Untracked files: Files that are not tracked by Git.

### Git Add
Adds file contents to the staging area.
**Example**

1. `git add file1.txt`: Adds changes in `file1.txt` to the staging area.
```bash
   git add file1.txt
```
![Git Add](./screenshots/git-add.png)
2. `git add . `: Adds all changes in the current directory and its subdirectories to the staging area.
```bash
   git add .
```
3. `git add --all` : Adds all changes in the entire working tree to the staging area, including untracked files and removing files that have been deleted.
```bash
   git add --all
```

**Description :**
When you make changes to files in your working directory, Git doesn't automatically track those changes. You need to explicitly tell Git which changes you want to include in the next commit using git add.


### Git Commit
The `git commit` command is used to record changes to the repository.
**Example**
```bash
   git commit -m "commit message"
```
![Git Commit](./screenshots/git-commit.png)
**Description :**
- The -m flag allows you to provide a commit message inline with the command.
- The commit message should be a brief description of the changes you are committing.
- After running git commit, Git creates a new commit with the changes staged in the index and records it permanently in the repository's history.

### Git Branch 
The  `git branch` command is used to list, create, or delete branches in a Git repository

**Example**

- To list all the local branches in the repository:
```bash 
   git branch
```
![Git Add](./screenshots/git-branch.png)
- Creating a Branch
To create a new branch in Git, you use the git branch command followed by the name of the new branch you want to create.
```bash
   git branch branch-1
```
- Deleting a Branch
To delete a branch in Git, you use the `git branch -d` command followed by the name of the branch you want to delete.
```bash
   git branch -d branch-1
```

- Checking Out a Branch
To switch to a different branch in Git, you use the `git checkout command` followed by the name of the branch you want to switch to.
```bash
   git checkout branch-1
```

**Description :**
- When used without options, git branch lists all the local branches in the repository.
The current branch is indicated with an asterisk (*).
- Can create a new branch by providing a name after the git branch command.
- To delete a branch, use the -d option followed by the name of the branch you want to delete.

### Git Remote
The `git remote` command allows you to manage the remote repositories associated with your local repository. You can add, rename, remove, and view information about remotes.
**Example**
1. `git remote -v`: Lists all remote repositories along with their URLs.
```bash
   git remote -v
``` 
![Git Remote](./screenshots/git-remote.png)
2. `git remote add <name of origin> <url> `: Adds a new remote repository.
```bash
   git remote add origin https://github.com/gausalmunirtushar/devops-career-path.git
``` 
![Git Remote](./screenshots/git-remote-1.png)
3. `git remote remove origin `: Removes the specified remote repository.
```bash
   git remote remove origin
``` 
**Description :**
- The -v option stands for "verbose," and it displays both the URL of the remote repository and its nickname.
- When clone a repository, Git automatically creates a remote called origin that points to the original repository.
- add multiple remotes to your repository to collaborate with others or to manage different hosting services.


### Git Push
The `git push` command is used to upload local repository content to a remote repository.

**Example**
To push the commits from the local main branch to the main branch on the remote repository named origin:
```bash
   git push origin main
``` 
![Git Remote](./screenshots/git-push.png)
**Description :**
- `git push`: This is the command to push your local commits to a remote repository.
- `origin`: This is the default name Git gives to the server from which you cloned your repository. It represents the remote repository.
- `main`: This is the name of the branch you want to push your commits to on the remote repository.

### Git Pull
The `git pull` command is used to fetch and integrate changes from a remote repository into the current branch of your local repository.
**Example**
```bash
   git pull origin main
```
![Git Pull](./screenshots/git-pull.png)
**Description :**
- git pull is a combination of two other Git commands: git fetch and git merge.
- It fetches changes from the specified remote repository and integrates them into the current branch.
- The <remote> argument specifies the remote repository from which - want to pull changes, and <branch> specifies the branch from which you want to pull changes.
- After fetching the changes, git pull automatically merges them into your current branch.

[Back to Top](#git-basic-commands)