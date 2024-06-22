<div style="text-align: center;">

<img src="screenshots/git.jpg" height="60">
<!-- br -->

# Necessary Git Commands

> Here listed some necessary Git commands. It's help a developer to find git commands easily.

<!-- br -->

#### By

## <a href="https://github.com/msicse" > Md Sumon Islam</a>

</div>

## Table of contents

- [Quick start](#quick-start)
- [Installation](#installation)

  - [Windows](#windows)
  - [Mac](#mac)
  - [Linux](#linux)

  
## Quick start

- [Installation](#installation)
- [Configuration](#configuration)
- [Intialization and Commit](#intialization-and-commit)
- [Basic Git Commands](#basic-git-commands)
- [Branching and Merging](#branching-and-merging)
- [Remote Repositories](#remote-repositories)
- [Git Managing History](#git-managing-history)

## Installation

### Windows

- Download the latest version of Git from https://git-scm.com/downloads
- Install it in the system
- After installing, launch the Git Bash

### Mac

#### Using Installer

- Download the latest Git for Mac installer from https://sourceforge.net/projects/git-osx-installer/files

- Follow the prompts to install Git.

#### Using Homebrew

```
$ brew install git
```

### Linux

#### Debian/Ubuntu

```
apt-get install git
```

#### Fedora

> up to Fedora 21

```
yum install git
```

> Fedora 22 and later

```
dnf install git
```


## Configuration

> To configur Git to your local machine, follow the instruction

### Check Git Version

```
$ git --version
```

### Setup Git user name

```
$ git config --global user.name "sumon"
```

### Setup Git user email

```
$ git config --global user.email "eubsumon@gmail.com"
```

### Git Configuration

> The command returns a list of information about your git configuration including user name and emai.

```
$ git config -l
```
  <img src="screenshots/config.png" alt="initial configuration">

### Generate SSH Key

```
$ ssh-keygen -t rsa -C 'eubsumon@gmail.com'
```

![alt text](screenshots/ssh_web3.png)

### Add SSH key to Github

- Copy the SSH key from id_rsa.pub file
- Login to your github account
- Go to Setting > SSH and GPG keys > New SSH key
- Give a title and Paste the key in key section
- Click on **Add SSH Key**

<img src="screenshots/ssh_web.png" alt="initial configuration">
<br>
<br>
<img src="screenshots/ssh_web2.png" alt="Add SSH key to github.com">

### Check SSH Connection

```
ssh -T git@github.com
```

<img src="screenshots/sshweb4.png" alt="initial configuration">

## Intialization

### Initialize a repo:

> Everything starts from here. The first step is to initialize a new Git repo locally in your project root.

```
git init
```

> Creates a new Git repository in the specified directory.

```
git init <directory>
```

<img src="screenshots/init.png" alt="initialize git repo">

### Git clone

> To clone a repository from a remote server to your local machine.

```
git clone <repository_url>
```

> Clones a specific branch from a repository.

```
git clone –branch <branch_name> <repository_url>
```

![alt text](screenshots/clone-2.png)