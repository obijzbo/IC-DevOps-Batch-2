<h1 align="center"> Git Commands Cheat Sheet </h1>

![git-cover](https://github.com/GausAlMunirTushar/git-commands/assets/32175937/9c25e3c2-3dc5-4ac0-992b-cf57b10d194a)

<p align="center"><i>by <a href="https://github.com/Jahid1499">Jahid Hassan </a></i></p>

<p align="center">Below is a comprehensive scribe sheet for Git commands. This includes descriptions, examples and screenshots. </p>

# Table of Contents

1. [Git Setup and Configuration](#git-setup-and-configuration)

   - [Git Initialize](#git-initialize)
   - [Clone a Repository](#clone-a-repository)
   - [Set Up User Info](#set-up-user-info)
   - [Folder and File operation](#folder-and-file-operation)
   - [Remove Files](#remove-files)

2. [Git Basic command](#git-basic-command)

   - [Check Status](#check-status)
   - [Stage Changes](#stage-changes)
   - [Create Commit](#create-commit)

3. [Branch](#branch)
   - [Create a Branch](#create-a-branch)
   - [List Branches](#list-branches)
   - [Switch to a Branch](#switch-to-a-branch)
   - [Create and Switch to a New Branch](#create-and-switch-to-a-new-branch)
   - [Merge a Branch](#merge-a-branch)
   - [Rename a Branch](#rename-a-branch)
   - [Delete a Branch](#delete-a-branch)

4. [Aliases](#aliases)
5. [Remote branch](#remote-branch)
   - [Add a Remote Repository](#add-a-remote-repository)
   - [View Remote Repositories](#view-remote-repositories)
   - [Fetch Changes](#fetch-changes)
   - [Pull Changes](#pull-changes)
   - [Push Changes](#push-changes)
   - [Rewriting history](#rewriting-history)
   - [Interactive Rebase](#interactive-rebase)

6. [Git reset](#git-reset)
   - [To See Commit History](#to-see-commit-history)
   - [Reset to a Previous Commit](#reset-to-a-previous-commit)

7. [Git rebase](#git-rebase)

# Git Setup and Configuration

#### Git Initialize

```bash
  git init
```

#### Clone a Repository

```bash
  git clone git@github.com:Jahid1499/IC-DevOps-Batch-2.git
```

![Screenshot_1](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/01e108d0-e98a-4a0d-afa7-60f0b3e421d3)

#### Set Up User Info

![Screenshot_5](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/1c3c07b8-c494-4f2a-9a12-e222241478e8)

![Screenshot_6](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/56d03dd6-64f3-4c90-9dd5-dc86b198ad30)

![Screenshot_7](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/4283b6a5-512d-4698-abf0-130a74df0124)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global --list      // show global information list
```

### Folder and File operation

![Screenshot_3](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/5d367145-6cbe-4dbb-ae76-afa4a511bb84)

```bash
mkdir <folder name>             // cerate a new folder
ls                              // show all file and directory List
touch <fileName.fileExtension>  // create a new file
```

#### Remove Files

```bash
git rm <file>
```

# Git Basic command

![Screenshot_4](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/3cc74074-87ca-4eee-8116-f8aa436d8a42)

![Screenshot_10](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/9d220248-fe5e-4c74-8cd7-c0201c5d94c2)

![Screenshot_9](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/da6adf40-af5e-48aa-af92-12a85cfb30b7)

### Check Status

_Show the current status_

```bass
git status
```

### Stage Changes

_Track the change for git_

```bash
git add <file name>
git add .  // add all file
git add -A
```

### Create Commit

_captures a snapshot of the project's currently staged changes._

```bash
git commit -m "Commit message"
```

# Branch

_Branches allow you to work on different parts of a project without impacting the main branch_

![Screenshot_13](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/297383d5-6daa-46fb-bccb-f5cfa4e557ae)

### Create a Branch
```bash
git branch <branch-name>
```

### List Branches
_Show all branch list_
```bash
git branch
```

### Switch to a Branch

```bash
git checkout <branch-name>
```

### Create and Switch to a New Branch
_Using -b flag to create and checkout_
```bash
git checkout -b <new-branch-name>
```

### Merge a Branch
_Git merge will combine multiple sequences of commits into one unified history. In the most frequent use cases, git merge is used to combine two branches_

```bash
git checkout <target-branch>
git merge <source-branch>
```

### Rename a Branch
_If you want to change rename a branch_
```bash
git branch -m old-name new-name
```

### Delete a Branch
_If you want to remove a branch_
```bash
git branch -d <branch-name>
git branch -D <branch-name>  # Force delete
```

# Aliases

Aliases enable more efficient workflows by requiring fewer keystrokes to execute a command. For a brief example, consider the **git checkout** command. The checkout command is a frequently used git command, which adds up in cumulative keystrokes over time. An alias can be created that maps **git co** to **git checkout** which saves precious human fingertip power by allowing the shorter keystroke form: git co to be typed instead.

![Screenshot_14](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/f1147f82-2c09-433a-89b1-8f8c98cb32ec)

```bash
git config --global alias.co checkout   // Create a Aliases
git co master                           // use Aliases
git config --global --list              // show aliases list
```

![Screenshot_15](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/1aa0a35c-e541-41b4-81a9-12860bf72c1d)

# Remote branch
_Remote branches are how developers collaborate on the same project simultaneously. A remote branch exists in a remote repository (most commonly referred to as origin by convention) and is hosted on a platform such as GitHub._

![Screenshot_16](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/e29b6a9d-b389-4ee1-bd72-e8056ec9b105)

![Screenshot_17](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/be142c40-1f75-4f56-9ce5-1ccc9a200cc4)

### Add a Remote Repository

```bash
git remote add <remote-name> <remote-url>
```

### View Remote Repositories

```bash
git remote -v
```

### Fetch Changes

```bash
git fetch <remote-name>
```

### Pull Changes

```bash
git pull <remote-name> <branch-name>
```

### Push Changes

```bash
git push <remote-name> <branch-name>
```

### Rewriting history

```bash
git rebase <base-branch>
```

### Interactive Rebase

```bash
git rebase -i <base-branch>
```

# Git reset

_The git reset command is used to undo the changes in your working directory and get back to a specific commit while discarding all the commits made after that one._

### To See Commit History

```bash
git log
git log --oneline // Show commit history in shortly
```

### Reset to a Previous Commit

![Screenshot_20](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/2d1b3850-10c4-40a4-922b-9aadd0a0e877)

```bash
git reset --hard HEAD~[commitNumber] // Remove form log history
git reset --soft HEAD~[commitNumber] // Stage commit
git reset HEAD~[commitNumber]  // Unstage commit
```

# Git rebase
_rebasing is changing the base of your branch from one commit to another making it appear as if you'd created your branch from a different commit. Internally, Git accomplishes this by creating new commits and applying them to the specified base._

![Screenshot_18](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/fe636272-2433-4cd0-a58c-f4ad83b0c9ba)

![Screenshot_19](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/595c9872-01eb-4a44-98d0-6442ba0a4f89)

```bash
git rebase -i HEAD~3
git rebase --continue
```

[Markdown Learning Resource](https://gist.github.com/nikhilnayyar002/7a35e653d3d590e317c829243e73b110)

# Thank you
