# Some Basic Git Commands


### Configuring User Information:

```
Set your username: git config --global user.name "Your Name".
Set your email: git config --global user.email "your.email@example.com".
```

### Initialize a Repository:

```git init``` **_: Creates a new Git repository in the current directory._**

### Clone a Repository:

```git clone <repository_url>``` **_: Creates a copy of an existing repository in a new directory._**

### Add Files to Staging Area:

```git add <file>``` **_: Adds a specific file to the staging area._** <br>
```git add .```  **_: Adds all changes in the current directory to the staging area._**

### Commit Changes:

```git commit -m "Commit message"```  **_: Commits staged changes to the repository with a message._**

### Check Status:

```git status``` **_: Shows the status of changes as untracked, modified, or staged._**

### View Commit History:

```git log``` **_: Displays the commit history for the repository._**
