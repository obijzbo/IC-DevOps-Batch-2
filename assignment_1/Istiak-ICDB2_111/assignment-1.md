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


## Branching and Merging

### Create a New Branch:
```git branch <branch_name>``` **_: Creates a new branch._**

### Switch Branches:
```git checkout <branch_name>``` **_: Switches to the specified branch._**

### Merge Branches:
```git merge <branch_name>```**_: Merges the specified branch into the current branch._**

### Rebase Branch:
```git rebase <branch_name>``` **_: Reapplies commits on top of another base branch._**

### Delete a Branch:

```git branch -d <branch_name>``` **_: Deletes a local branch._**
```git branch -D <branch_name>``` **_: Forces deletion of a local branch._**


## Remote Repositories

### Add Remote Repository:
```git remote add <name> <url>``` **_: Adds a remote repository._**

### List Remote Repositories:
```git remote -v``` **_: Lists the URLs of remote repositories._**

### Push Changes:
```git push <remote> <branch>``` **_: Pushes commits to a remote repository branch._**
```git push -u <remote> <branch>``` **_: Sets the upstream branch for tracking and pushes commits._**

### Pull Changes:
```git pull <remote> <branch>``` **_: Fetches and merges changes from a remote repository branch._**

### Fetch Changes:
```git fetch <remote>``` **_: Fetches changes from a remote repository but does not merge them._**

### Remove Remote Repository:
```git remote remove <name>``` **_: Removes a remote repository._**


## Undoing Changes

### Reset Changes:
```git reset <file>``` **_: Removes a file from the staging area. _** <br>
```git reset --hard <commit>``` **_: Resets the repository to a specific commit, discarding all changes._**

### Revert Changes:
```git revert <commit>``` **_: Creates a new commit that undoes the changes from a previous commit._**

### Checkout File:
```git checkout <file>``` **_: Discards changes in the working directory for a specific file._**

## Working with Tags

### Create a Tag:
```git tag <tag_name>``` **_: Creates a new tag._** <br>
```git tag -a <tag_name> -m "Tag message"``` **_: Creates an annotated tag with a message._**

### List Tags:
```git tag``` **_: Lists all tags._**

### Push Tags:
```git push <remote> <tag_name>``` **_: Pushes a specific tag to the remote repository._**<br>
```git push <remote> --tags``` **_: Pushes all tags to the remote repository._**

### Delete a Tag:
```git tag -d <tag_name>``` **_: Deletes a local tag._**<br>
```git push <remote>``` **_ :refs/tags/<tag_name>: Deletes a remote tag_**


## Git Aliases

### Create Aliases for Commands:
```git config --global alias.<alias_name> '<command>'``` **_: Creates an alias for a command._** <br>
Example: git config --global alias.co 'checkout': Creates an alias git co for git checkout.


## Additional Commands

### Show Commit Details:
```git show <commit>``` **_: Shows details about a specific commit._**