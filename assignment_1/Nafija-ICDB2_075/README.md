#Name : Nafija 
# Student_ID : ICDB2_075 - 'nafija'

# Set global user email
git config --global user.email "nafijaakhter001@gmail.com"

# Set credential helper to cache
git config --global credential.helper cache

# Verify global Git configuration
git config --global --list

 #Initialized git repository
1)  git init 

 ++ Initialized existing Git repository in /home/nafija/.git/

 
 #Set up a remote repository : git remote add <repository_URL>
  2) git remote add origin git@github.com:Nafija-pinky/IC-DevOps-Batch-2.git 
    
 # Check the status
 
 3) git status
 
 +++ On branch branch-1
nothing to commit, working tree clean

# check commit history 
 4) git log
 
 ++++ commit f0fc593508ecc0bd5adb2f249ec2f9fd26afdd13 (HEAD -> branch-1, origin/branch-1)
Author: nafija <you@example.com>
Date:   Wed May 22 00:15:23 2024 +0600

    Editing Readme file

commit 13c5a4c4adf2efe973d4ccef90fa1d627484cc8f
Author: nafija <you@example.com>
Date:   Wed May 22 00:02:27 2024 +0600

    Add Assignment 1 with Git commands and descriptions


# Adding a file 
5) git add . 


# check the difference commit 
6) git diff

# Commit the Changes
git commit -m "Adding some git command that was discuused on classes"
++++
[branch-1 6a99b23] Adding some git command that was discuused on classes
 1 file changed, 77 insertions(+), 24 deletions(-)
 rewrite assignment_1/Nafija-ICDB2_075/README.md (97%)

# Creating new branch 

git checkout -b "branch-1"

# Switiching a new branch 
   git checkout branch 
  
  
 #Push Changes to Remote Repository :
  git push origin branch-1

+++=+++Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.29 KiB | 439.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:Nafija-pinky/IC-DevOps-Batch-2.git
   f0fc593..6a99b23  branch-1 -> branch-1

#Pull Changes from Remote Repository 
  git pull origin master

# The git fetch command downloads commits, files, and refs from a remote repository into your local repo. 

 git fetch --all
 
 
 #  Gitrebase changes the base of the developer's branch from one commit to another
  git rebase
   

