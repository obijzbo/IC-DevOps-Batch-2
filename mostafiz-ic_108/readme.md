# GIT Repository

-   Git v1.0.1

## Table of Contents

-   [Initialization](#initialization)
-   [Basic Operations](#basic-operations)
-   [Branching and Merging](#branching-and-merging)
-   [Rebasing](#rebasing)
-   [Resetting](#resetting)
-   [Stashing](#stashing)
-   [Pulling and Fetching](#pulling-and-fetching)
-   [Reflog](#reflog)

## Initialization

### git init

Start a new repository.

```sh
git init
```

## Basic Operations

-   git add : Add changes in <File_Name> to the staging area.

```sh
git add <File_Name>
add all changes in the current directory and its subdirectories to the staging area.
```

```sh
git add .
git commit
```

```sh
git commit -m "Your commit message"
git status
```

```sh
    git status
    git log
```

-   Display the commit history of the repository.

## Branching and Merging

```sh

git log
Branching and Merging
git branch

```

-   List branches.

```sh
git branch

```

-   Create a new branch.

```sh

git branch <branch_name>
```

-- Delete a branch.

```sh

git branch -d <branch_name>

```

-   git checkout
-   Switch to a branch.

```sh
git checkout <branch_name>
Create and switch to a new branch.
```

```sh
git checkout -b <branch_name>
```

```sh
git merge
Merge branches.
git merge <branch_name>
```

## Rebasing

```sh
Rebasing
git rebase
Reapply commits on top of another base tip.

git rebase <base_branch>
```

## Resetting

```sh

git reset
Reset current HEAD to the specified state.
git reset --soft <commit>
git reset --mixed <commit>
git reset --hard <commit>
```

## Stashing

### git stash

Temporarily store changes in a dirty working directory.

```sh
git stash
```

## Pulling and Fetching

### git pull

-   Pull changes from a remote repository and integrate them into the current branch.

```sh
git pull
```

### git fetch

-   references from a remote repository.

```sh
git fetch oriign branch
```

## Reflog

The reflog is a log of all reference updates in the repository, including when branches were created, moved, or deleted, and when commits were checked out.

To view the reflog, use the following command:

```sh
git reflog
```
