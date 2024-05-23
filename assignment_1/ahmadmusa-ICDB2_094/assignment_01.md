# Git Command Scribe Sheet

## Setup and Configuration
- **git config**
  - Description: Set configuration values for your user name, email, and other preferences.
  - Example:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```
  - Screenshot: ![git config](screenshots/git_config.png)

- **git config -l**
  - Description: List all the current configuration settings.
  - Example:
    ```bash
    git config -l
    ```
  - Screenshot: ![git config -l](screenshots/git_config_l.png)

- **git config --global user.name/user.email**
  - Description: Set the global username and email for all repositories.
  - Example:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```
  - Screenshot: ![git config --global user](screenshots/git_config_global_user.png)

## Basic Commands
- **ls**
  - Description: List directory contents.
  - Example:
    ```bash
    ls
    ```
  - Screenshot: ![ls](screenshots/ls.png)

- **ls -a**
  - Description: List all files, including hidden files.
  - Example:
    ```bash
    ls -a
    ```
  - Screenshot: ![ls -a](screenshots/ls_a.png)

- **git init**
  - Description: Initialize a new Git repository.
  - Example:
    ```bash
    git init
    ```
  - Screenshot: ![git init](screenshots/git_init.png)

- **git clone**
  - Description: Clone a repository into a new directory.
  - Example:
    ```bash
    git clone https://github.com/user/repo.git
    ```
  - Screenshot: ![git clone](screenshots/git_clone.png)

- **git add filename**
  - Description: Add a specific file to the staging area.
  - Example:
    ```bash
    git add filename
    ```
  - Screenshot: ![git add filename](screenshots/git_add_filename.png)

- **git add .**
  - Description: Add all changes in the current directory to the staging area.
  - Example:
    ```bash
    git add .
    ```
  - Screenshot: ![git add .](screenshots/git_add_dot.png)

- **git reset**
  - Description: Unstage a file or set of files.
  - Example:
    ```bash
    git reset filename
    ```
  - Screenshot: ![git reset](screenshots/git_reset.png)

- **git status**
  - Description: Show the working tree status.
  - Example:
    ```bash
    git status
    ```
  - Screenshot: ![git status](screenshots/git_status.png)

- **git commit -m "message"**
  - Description: Commit the staged snapshot with a message.
  - Example:
    ```bash
    git commit -m "Initial commit"
    ```
  - Screenshot: ![git commit](screenshots/git_commit.png)

- **git log**
  - Description: Show commit logs.
  - Example:
    ```bash
    git log
    ```
  - Screenshot: ![git log](screenshots/git_log.png)

- **git diff**
  - Description: Show changes between commits, commit and working tree, etc.
  - Example:
    ```bash
    git diff
    ```
  - Screenshot: ![git diff](screenshots/git_diff.png)

- **git show**
  - Description: Show various types of objects (commits, tags, etc).
  - Example:
    ```bash
    git show commitId
    ```
  - Screenshot: ![git show](screenshots/git_show.png)

## Branching and Merging
- **git checkout -b "branchName"**
  - Description: Create a new branch and switch to it.
  - Example:
    ```bash
    git checkout -b feature-branch
    ```
  - Screenshot: ![git checkout -b](screenshots/git_checkout_b.png)

- **git branch**
  - Description: List all branches.
  - Example:
    ```bash
    git branch
    ```
  - Screenshot: ![git branch](screenshots/git_branch.png)

- **git checkout "branchName"**
  - Description: Switch to the specified branch.
  - Example:
    ```bash
    git checkout main
    ```
  - Screenshot: ![git checkout](screenshots/git_checkout.png)

- **git merge "branchName"**
  - Description: Merge the specified branch into the current branch.
  - Example:
    ```bash
    git merge feature-branch
    ```
  - Screenshot: ![git merge](screenshots/git_merge.png)

- **git branch -d "branchName"**
  - Description: Delete the specified branch.
  - Example:
    ```bash
    git branch -d feature-branch
    ```
  - Screenshot: ![git branch -d](screenshots/git_branch_d.png)

## Advanced Commands
- **vim filename**
  - Description: Open a file in Vim editor.
  - Example:
    ```bash
    vim filename
    ```
  - Screenshot: ![vim](screenshots/vim.png)

- **cat filename**
  - Description: Concatenate and display file contents.
  - Example:
    ```bash
    cat filename
    ```
  - Screenshot: ![cat](screenshots/cat.png)

- **git config --global alias.variable "command"**
  - Description: Create a global alias for a Git command.
  - Example:
    ```bash
    git config --global alias.co checkout
    ```
  - Screenshot: ![git alias](screenshots/git_alias.png)

- **git remote**
  - Description: Manage set of tracked repositories.
  - Example:
    ```bash
    git remote
    ```
  - Screenshot: ![git remote](screenshots/git_remote.png)

- **git remote -v**
  - Description: Show URLs of remote repositories.
  - Example:
    ```bash
    git remote -v
    ```
  - Screenshot: ![git remote -v](screenshots/git_remote_v.png)

- **git remote add origin link**
  - Description: Add a new remote repository.
  - Example:
    ```bash
    git remote add origin https://github.com/user/repo.git
    ```
  - Screenshot: ![git remote add](screenshots/git_remote_add.png)

- **git remote remove origin**
  - Description: Remove a remote repository.
  - Example:
    ```bash
    git remote remove origin
    ```
  - Screenshot: ![git remote remove](screenshots/git_remote_remove.png)

- **git fetch origin main**
  - Description: Fetch changes from the remote main branch.
  - Example:
    ```bash
    git fetch origin main
    ```
  - Screenshot: ![git fetch](screenshots/git_fetch.png)

- **git pull origin main**
  - Description: Fetch and merge changes from the remote main branch.
  - Example:
    ```bash
    git pull origin main
    ```
  - Screenshot: ![git pull](screenshots/git_pull.png)

- **git rebase origin/main**
  - Description: Rebase your current branch onto the remote main branch.
  - Example:
    ```bash
    git rebase origin/main
    ```
  - Screenshot: ![git rebase](screenshots/git_rebase.png)

- **git reset HEAD~1/2/3...**
  - Description: Reset the current branch to a previous commit.
  - Example:
    ```bash
    git reset HEAD~1
    ```
  - Screenshot: ![git reset HEAD](screenshots/git_reset_HEAD.png)

- **mv oldFilename newFilename**
  - Description: Rename or move a file.
  - Example:
    ```bash
    mv oldFilename newFilename
    ```
  - Screenshot: ![mv](screenshots/mv.png)

- **git reset --hard origin/featureName**
  - Description: Reset the current branch to the state of a remote branch.
  - Example:
    ```bash
    git reset --hard origin/featureName
    ```
  - Screenshot: ![git reset --hard](screenshots/git_reset_hard.png)

- **git reflog**
  - Description: Show a log of changes to the local repository.
  - Example:
    ```bash
    git reflog
    ```
  - Screenshot: ![git reflog](screenshots/git_reflog.png)

- **git reflog HEAD@{int}**
  - Description: Show the reflog for a specific HEAD reference.
  - Example:
    ```bash
    git reflog HEAD@{1}
    ```
  - Screenshot: ![git reflog HEAD](screenshots/git_reflog_HEAD.png)

- **git cherry-pick commitId**
  - Description: Apply changes from a specific commit.
  - Example:
    ```bash
    git cherry-pick commitId
    ```
  - Screenshot: ![git cherry-pick](screenshots/git_cherry_pick.png)

- **git stash**
  - Description: Stash the changes in a dirty working directory.
  - Example:
    ```bash
    git stash
    ```
  - Screenshot: ![git stash](screenshots/git_stash.png)

- **git stash pop**
  - Description: Apply the most recent stash and remove it from the stash list.
  - Example:
    ```bash
    git stash pop
    ```
  - Screenshot: ![git stash pop](screenshots/git_stash_pop.png)

- **git stash list**
  - Description: List all stashed changes.
  - Example:
    ```bash
    git stash list
    ```
  - Screenshot: ![git stash list](screenshots/git_stash_list.png)

- **git stash apply stash@{int}**
  - Description: Apply a specific stash without removing it from the stash list.
  - Example:
    ```bash
    git stash apply stash@{1}
    ```
  - Screenshot: ![git stash apply](screenshots/git_stash_apply.png)

- **git rebase --continue**
  - Description: Continue the rebase process after resolving conflicts.
  - Example:
    ```bash
    git rebase --continue
    ```
  - Screenshot: ![git rebase --continue](screenshots/git_rebase_continue.png)

- **git reset HEAD~[int-any without bracket]**
  - Description: Reset the current branch to a specified number of commits back.
  - Example:
    ```bash
    git reset HEAD~3
    ```
  - Screenshot: ![git reset HEAD~](screenshots/git_reset_HEAD_int.png)

- **git reset --soft HEAD~[int]**
  - Description: Soft reset the current branch to a specified number of commits back.
  - Example:
    ```bash
    git reset --soft HEAD~3
    ```
  - Screenshot: ![git reset --soft](screenshots/git_reset_soft.png)

- **git reset --hard HEAD~[int]**
  - Description: Hard reset the current branch to a specified number of commits back.
  - Example:
    ```bash
    git reset --hard HEAD~3
    ```
  - Screenshot: ![git reset --hard](screenshots/git_reset_hard_int.png)

- **git reset --hard origin/main**
  - Description: Hard reset the current branch to match the remote main branch.
  - Example:
    ```bash
    git reset --hard origin/main
    ```
  - Screenshot: ![git reset --hard origin/main](screenshots/git_reset_hard_origin_main.png)

- **git rebase -i HEAD~[int]**
  - Description: Interactive rebase for a specified number of commits back.
  - Example:
    ```bash
    git rebase -i HEAD~3
    ```
  - Screenshot: ![git rebase -i](screenshots/git_rebase_i.png)

- **git rebase main master**
  - Description: Rebase the current branch onto another branch.
  - Example:
    ```bash
    git rebase main master
    ```
  - Screenshot: ![git rebase main master](screenshots/git_rebase_main_master.png)


## Additional Commands

- **git remote set-url origin [new_url]**
  - Description: Change the URL of the remote repository.
  - Example:
    ```bash
    git remote set-url origin https://github.com/user/new-repo.git
    ```
  - Screenshot: ![git remote set-url origin](screenshots/git_remote_set_url_origin.png)


- **git log --oneline**
  - Description: Display the commit logs in a compact form with each commit on one line.
  - Example:
    ```bash
    git log --oneline
    ```
  - Screenshot: ![git log --oneline](screenshots/git_log_oneline.png)


- **git clean**
  - Description: Remove untracked files from the working directory.
  - Example:
    ```bash
    git clean -f
    ```
  - Screenshot: ![git clean](screenshots/git_clean.png)

- **git shortlog**
  - Description: Summarize git log output.
  - Example:
    ```bash
    git shortlog
    ```
  - Screenshot: ![git shortlog](screenshots/git_shortlog.png)

- **git mv**
  - Description: Move or rename a file, a directory, or a symlink.
  - Example:
    ```bash
    git mv oldFilename newFilename
    ```
  - Screenshot: ![git mv](screenshots/git_mv.png)

