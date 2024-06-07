#intialize git repository
git init

#Clone a Repository
git clone <repository-url>

#Set Up User Info
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

#Check Status
git status

#Stage Changes
git add <file>          
git add .               
git add -A              

#Commit Changes
git commit -m "Commit message"

#Remove Files
git rm <file>

#Create a Branch
git branch <branch-name>

#List Branches
git branch

#Switch to a Branch
git checkout <branch-name>

#Create and Switch to a New Branch
git checkout -b <new-branch-name>

#Merge a Branch
git checkout <target-branch>
git merge <source-branch>

#Delete a Branch
git branch -d <branch-name>
git branch -D <branch-name>  

#Add a Remote Repository
git remote add <remote-name> <remote-url>

#View Remote Repositories
git remote -v

#Fetch Changes
git fetch <remote-name>

#Pull Changes
git pull <remote-name> <branch-name>

#Push Changes
git push <remote-name> <branch-name>

#Rewriting history
git rebase <base-branch>

#Interactive Rebase
git rebase -i <base-branch>

#To See Commit History
git log

#Reset to a Previous Commit
git reset --hard <commit-hash>
