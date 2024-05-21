# Git and github assignment - 1

#### Intialize git repository

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

#### Folder and File operation

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

#### Check Status

```bass
git status
```

#### Stage Changes

```bash
git add <file name>
git add .  // add all file
git add -A
```

#### Create Commit

```bash
git commit -m "Commit message"
```

# Branch

![Screenshot_13](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/297383d5-6daa-46fb-bccb-f5cfa4e557ae)

#### Create a Branch

```bash
git branch <branch-name>
```

#### List Branches

```bash
git branch
```

#### Switch to a Branch

```bash
git checkout <branch-name>
```

#### Create and Switch to a New Branch

```bash
git checkout -b <new-branch-name>
```

#### Merge a Branch

```bash
git checkout <target-branch>
git merge <source-branch>
```

#### Rename a Branch

```bash
git branch -m old-name new-name
```

#### Delete a Branch

```bash
git branch -d <branch-name>
git branch -D <branch-name>  # Force delete
```

# Aliases

Shorter version for big word

![Screenshot_14](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/f1147f82-2c09-433a-89b1-8f8c98cb32ec)

```bash
git config --global alias.co checkout   // Create a Aliases
git co master                           // use Aliases
git config --global --list              // show aliases list
```

![Screenshot_15](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/1aa0a35c-e541-41b4-81a9-12860bf72c1d)

# Remote branch

![Screenshot_16](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/e29b6a9d-b389-4ee1-bd72-e8056ec9b105)

![Screenshot_17](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/be142c40-1f75-4f56-9ce5-1ccc9a200cc4)

#### Add a Remote Repository

```bash
git remote add <remote-name> <remote-url>
```

#### View Remote Repositories

```bash
git remote -v
```

#### Fetch Changes

```bash
git fetch <remote-name>
```

#### Pull Changes

```bash
git pull <remote-name> <branch-name>
```

#### Push Changes

```bash
git push <remote-name> <branch-name>
```

#### Rewriting history

```bash
git rebase <base-branch>
```

#### Interactive Rebase

```bash
git rebase -i <base-branch>
```

# Git reset

#### To See Commit History

```bash
git log
git log --oneline // Show commit history in shortly
```

#### Reset to a Previous Commit

![Screenshot_20](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/2d1b3850-10c4-40a4-922b-9aadd0a0e877)

```bash
git reset --hard HEAD~[commitNumber] // Remove form log history
git reset --soft HEAD~[commitNumber] // Stage commit
git reset HEAD~[commitNumber]  // Unstage commit
```

# Git rebase

![Screenshot_18](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/fe636272-2433-4cd0-a58c-f4ad83b0c9ba)

![Screenshot_19](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/595c9872-01eb-4a44-98d0-6442ba0a4f89)

```bash
git rebase -i HEAD~3
git rebase --continue
```

[Markdown Learning Resource](https://gist.github.com/nikhilnayyar002/7a35e653d3d590e317c829243e73b110)

# Thank you
