#Initial empty git repo to run git commands
git init
#Cloning the git repo to connect and get all the works from the repo 
git clone repo_name

#create new repo and checkout to that repo
git checkout -b branchName
#create new repo
git checkout branchName
#Push changes to the branch and creating an upstream so that you don't need to mention the branchName everytime you push something to the repo
git push -u origin branchName

#add your task to your local machine
git add .
#add comments with your staged task
git commit -m "add git txt"

git commit #add commit description
git log #check history

#To check if your branch is upto date or not
git status

#git checkout alias.user can use short commands. Such as, git co which means git checkout
git config --global alias.co "checkout" 
