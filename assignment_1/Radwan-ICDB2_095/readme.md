# Git Commands Cheat Sheet

This cheat sheet provides an overview of common Git commands used in the course, as well as some additional useful commands. Git is a distributed version control system that helps manage and track changes to your codebase.

## Basic Git Commands

### Configuration

- **`git config --global user.name "Your Name"`**  
  Set the name that will be attached to your commits.
- **`git config --global user.email "your.email@example.com"`**  
  Set the email that will be attached to your commits.
- **`git config --global core.editor "editor"`**  
  Set your default text editor for Git.

### Repository Setup

- **`git init`**  
  Initialize a new Git repository.

- **`git clone <repository-url>`**  
  Clone an existing repository from a URL.

### Basic Snapshotting

- **`git add <file>`**  
  Stage a specific file for the next commit.
- **`git add .`**  
  Stage all changes (new, modified, deleted) for the next commit.
- **`git commit -m "Commit message"`**  
  Commit staged changes with a descriptive message.
- **`git commit -a -m "Commit message"`**  
  Stage all tracked files and commit with a message in one step.

### Branching and Merging

- **`git branch`**  
  List all branches in the repository.
- **`git branch <branch-name>`**  
  Create a new branch.
- **`git checkout <branch-name>`**  
  Switch to a different branch.
- **`git checkout -b <branch-name>`**  
  Create and switch to a new branch.
- **`git merge <branch-name>`**  
  Merge changes from the specified branch into the current branch.
- **`git branch -d <branch-name>`**  
  Delete a branch that has been merged.
- **`git branch -D <branch-name>`**  
  Force delete a branch, even if it hasn't been merged.

### Remote Repositories

- **`git remote`**  
  List remote connections.
- **`git remote add <name> <url>`**  
  Add a new remote repository.
- **`git fetch <remote>`**  
  Fetch updates from the remote repository.
- **`git pull <remote>`**  
  Fetch and integrate updates from the remote repository into the current branch.
- **`git push <remote> <branch>`**  
  Push local branch commits to the remote repository.

### Inspection and Comparison

- **`git status`**  
  Show the working directory status.
- **`git log`**  
  Show commit logs.
- **`git diff`**  
  Show changes between commits, commit and working tree, etc.
- **`git diff --staged`**  
  Show changes between staged changes and the last commit.

### Undoing Changes

- **`git reset <file>`**  
  Unstage a file while retaining the changes in the working directory.
- **`git checkout -- <file>`**  
  Discard changes in the working directory.
- **`git revert <commit>`**  
  Create a new commit that undoes the changes from a specified commit.
- **`git reset --hard <commit>`**  
  Reset the working directory and index to a specified commit (destructive).

### Stashing

- **`git stash`**  
  Save changes in the working directory and index to a stash.
- **`git stash list`**  
  List all stashes.
- **`git stash apply <stash>`**  
  Apply a specific stash to the working directory.
- **`git stash pop`**  
  Apply the most recent stash and remove it from the stash list.

### Tagging

- **`git tag`**  
  List all tags.
- **`git tag <tag-name>`**  
  Create a new tag.
- **`git tag -a <tag-name> -m "Tag message"`**  
  Create an annotated tag with a message.

### Collaboration

- **`git pull --rebase <remote>`**  
  Rebase the local commits on top of the fetched branch.

- **`git rebase <branch>`**  
  Reapply commits on top of another base tip.

### Useful Aliases

- **`git config --global alias.st status`**  
  Create a shortcut for `git status`.

- **`git config --global alias.co checkout`**  
  Create a shortcut for `git checkout`.

- **`git config --global alias.br branch`**  
  Create a shortcut for `git branch`.

- **`git config --global alias.ci commit`**  
  Create a shortcut for `git commit`.

- **`git config --global alias.lg "log --oneline --graph --decorate"`**  
  Create a detailed graphical log alias.

This cheat sheet covers the most commonly used Git commands in the course and beyond. For more detailed information and advanced usage, refer to the [official Git documentation](https://git-scm.com/doc).
