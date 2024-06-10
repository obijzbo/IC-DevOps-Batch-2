<p align="center">
  
  <h1 align="center">
        GIT BASIC Commands
  </h1>
</p>


## Table of contents

- [Configuration](#configuration)
  - [Configuring Git](#configuring-git)
- [Repository Operations](#repository-operations)
  - [Creating a Repository](#creating-a-repository)
  - [Cloning a Repository](#cloning-a-repository)
- [Basic Commands](#basic-commands)
  - [Checking the Status](#checking-the-status)
  - [Adding Changes](#adding-changes)
  - [Committing Changes](#committing-changes)
  - [Viewing the Commit History](#viewing-the-commit-history)
  - [Pushing Changes](#pushing-changes)
  - [Pulling Changes](#pulling-changes)
- [Branching](#branching)
  - [Creating a Branch](#creating-a-branch)
  - [Switching Branches](#switching-branches)
  - [Merging Branches](#merging-branches)

- [ScreenShots](#screenshots)



## Configuring Git

```text
After installing Git, set your username and email address:
```
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Repository Operations

### Creating a Repository 

```text
To create a new Git repository:
```
```sh
git init
```

### Cloning a Repository 

```text
To clone an existing repository:
```
```sh
git clone https://github.com/user/repository.git
```


## Basic Commands

### Checking The Status

```text
To check the status of your files in the working directory and staging area:
```
```sh
git status
```

### Adding Changes

```text
To add changes to the staging area:
```
```sh
git add filename
# or to add all changes:
git add .
```

### Committing Changes

```text
To commit changes in the staging area with a message:
```
```sh
git commit -m "Your commit message"
```

### Viewing the Commit History

```text
To view the commit history:
```
```sh
git log
```

### Pushing Changes

```text
To push your changes to the remote repository:
```
```sh
git push origin branch-name
```

### Pulling Changes

```text
To pull changes from the remote repository:
```
```sh
git pull
```

## Branching

### Creating a Branch

```text
To create a new branch:
```
```sh
git branch new-branch
```

### Switching Branches

```text
To switch to the newly created branch:
```
```sh
git checkout new-branch
```

### Merging Branches

```text
To merge a branch into your current branch:
```
```sh
git merge branch-name
```


## Screenshots


```text
Some of the GIT basic commands that I used to complete the assignment 1. 
```
![GIT Commands](screenshots/Screenshot_1.png)




## Thanks



