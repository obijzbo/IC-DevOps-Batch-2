
## Basic Git Commands

### `git init`
Initializes git in directory

**Example:**
git init

### `git clone`
Clones the repository in local machine

**Example:**
git@github.com:Tajulislamcse/IC-DevOps-Batch-2.git

### `git status`
Displays the state of the working directory and the staging area.

**Example:**
git status

### `git add`
Adds changes in the working directory to the staging area.

**Example:**
git add filename ( Adds single file )
git add . (adds all changes)

### `git commit`
Records changes to the repository with a message.

**Example:**
git commit -m "Commit message".

### `git push`
Uploads local repository content to a remote repository.

**Example:**
git push origin main.

### `git pull`
Fetches and integrates changes from a remote repository into the current branch.

**Example:**
git pull origin main

### `git branch`
Lists, creates, or deletes branches

**Example:**
git branch

### `git branch new-branch`
To create a new branch

### `git branch -d old-branch`
To delete a branch

### `git checkout`
Switches branches or restores working directory files.

**Example:**
git checkout new-branch

### `git merge`
Merges one or more branches into the current branch and automatically creates a new commit if necessary.

**Example:**
git merge feature-branch

### `git log`
Shows the commit history for the repository.

### `git diff`
Shows the differences between commits, commit and working tree, etc.

### `git fetch`
Downloads objects and refs from another repository.

**Example:**
git fetch origin

### `git stash`
Stashes the changes in a dirty working directory away.

### `git reset`
Resets current HEAD to the specified state.

**Example:**
git reset --hard HEAD~1


### `git config`
sets git configuration

**Example:**
git config --global user.name "name" (set user name)

git config --global user.email "test@gmail.com" (set email)







