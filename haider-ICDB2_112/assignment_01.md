Assalamu alaikum,

In this article, I am going to introduce you to the most important git commands by doing a simple project.

Step 1: Cloning Your Repository
First, I will clone my own repository from GitHub. To do that, I will copy the SSH key of the repository:
![Copy ssh](screenshots/1.%20repo%20ssh%20github.PNG)

Step 2: Initializing a Git Repository
Create a directory called 'Projects' and navigate to it. Now, we need to initialize Git in this directory. 
● `git init`  
  "Initializes a new Git repository in the current directory."

![Creating Projects directory](screenshots/2.%20git%20init.PNG)
'Git init' essentially tells Git to track everything (add, delete, and any changes) in this directory. 

![Outcome git init](screenshots/3.%20outcome%20of%20'git%20init'.PNG)
If we run ls -la, we see that a .git directory has been created. Inside .git, there are several files and folders. Git stores all the data for tracking the folder in these locations.

Step 3: Cloning the Repository
Next, I will clone my repository.
● `git clone [ssh link]`
"Clones remote repository from Github"
![Clone repository](screenshots/4.%20git%20clone.PNG)
In the repository, there is only one file named README.md.

Step 4: Creating a New File
Now, I will create a file named file1.txt.
![Create file1.txt](screenshots/5.%20create%20file1.PNG)

Step 5: Checking the Status
I will check the current status of this project using this command:
● `git status`  
  "Displays the status of the working directory and staging area, showing any changes."
![Check Status](screenshots/6.%20git%20status.PNG)
This command shows 'Untracked files: file1.txt'. This means Git found a file that it is not tracking. Git suggests a command to add it to the tracking list.

Step 6: Adding Changes
To add all the changes to the Git tracking mechanism, we run this command:
● `git add .`
  "Stages all changes (new files, modifications, deletions) for the next commit."
![Git add](screenshots/7.%20git%20add.PNG)
After adding, if I check the Git status again, Git now indicates it has tracked all the changes in this project. It prompts me to commit the changes with a message to easily identify what was changed at each step.

Step 7: Committing Changes
Following Git's instructions, I will commit the changes like this:
● `git commit -m "[Message]"`
  "Commits the staged changes with a descriptive message."
  ![git commit](screenshots/8.%20git%20commit.PNG)
Now, Git indicates everything is clean and up-to-date.

Step 8: Viewing the Commit History
You can list all the commits using this command:

● `git log`  
  "Displays a log of all commits made in the repository."
![git log](screenshots/9.%20git%20log.PNG)



Step 9: Creating and Switching to a New Branch
Let's create another branch called 'feature-branch' and switch to it.
● `git checkout -b "[Branch Name]"`  
  "Creates a new branch with the specified name and switches to it."
![Create new branch](screenshots/10.%20git%20checkout%20+%20branch.PNG)
Here, I am using the checkout command with the -b flag. The checkout command is primarily used for switching branches. You can clearly see that the 'feature-branch' inherited everything from the 'main' branch.

● `git branch` 
  "Lists all branches in the repository. The current branch is indicated with an asterisk (*)."
In the above image, you can also see that I ran git branch to list all the branches. Look carefully, there's an asterisk (*) which indicates your current branch.

Step 10: Understanding Branching
To better understand branching, we create another file called `file2.txt` in the 'feature-branch'. Then we run `git add .` and `git commit -m "Add file2 with feature content"`.
![file2 creation](screenshots/11.%20create%20file2%20in%20feature-branch.PNG)

Recheck our current branch. We see that in the 'feature-branch' we have two files (`file1.txt` and `file2.txt`), where `file1.txt` is inherited from the 'main' branch.
![Check current branch](screenshots/12.%20files%20in%20feature-branch.PNG)

Step 11: Switching Branches
Now, we switch to the 'main' branch. We can see it has only one file (`file1.txt`). This illustrates that the parent branch does not inherit anything from the child branch; instead, the child branch inherits everything from the parent branch.
● `git checkout "main"`
   "Switch branch"
![Switch to main](screenshots/13.%20files%20in%20main%20branch.PNG)

Step 12: Using Git Stash
Now, we are going to see what the `git stash` command does.
● `git stash`  
  "Temporarily saves changes that are not yet ready to be committed, leaving the working directory clean."
In the 'feature-branch', we create another `file3.txt`.

![create file3](screenshots/14.%20create%20file3.PNG)
Then we add this change but do not commit it. Instead, we run the `git stash` command, which removes the changes and stores them in Git's internal mechanism, then shows the clean status.
![stash file3](screenshots/15.%20stash%20file3.PNG)

Now, I switch to the 'main' branch. If I want to get the `file3.txt` back (unstash it), I run this command:
● `git stash pop`
  "Brings back the stashed changes and integrates where it was initially created."

![unstash the changes](screenshots/16.%20stash%20pop%20to%20main.PNG)

And then just simply commit it.
![commiting](screenshots/17.%20commit%20stashed%20file3.PNG)


Step 13: Resetting the Last Commit
I found that I can write a simpler commit message, so I reset the last commit by running this command:
● `git reset HEAD~1`
  "Moves the current branch back by one commit, but leaves the working directory and staging area as they were."
  ![resetting last commit](screenshots/18.%20reset%20last%201%20commit.PNG)

Then I re-commit with the new message.

![chnage commit message](screenshots/19.%20changing%20the%20commit%20meassage.PNG)
Then I change the commit message.

Step 14: Removing the Last Commit
Now, I decided that I want to remove the last commit completely with all the changes. So I run this command:
● `git reset --hard HEAD~1`  
  "Moves the current branch back by one commit and resets the working directory and staging area to match the commit."
![remove commit](screenshots/20.%20reset%20--hard.PNG)

Step 15: Cherry-Picking a Commit
In the latest progress of my project, here are the branches and files:

 *main branch has 1 commit, 1 file(file1.txt)
 *feature-branch has 2 commit, 2 file(file1.txt, file2.txt)

After removing the last commit from my `main` branch which included `file3.txt`, I want to copy the second commit from `feature-branch` that includes `file2.txt` and apply it to the main branch. To do that, I use this command:

● `git cherry-pick [Commit Hash]`  
  "Copies and pastes any commit from any branch to the current branch using commit hash."

First, I copy the commit hash:
![copy commit hash](screenshots/21.%20copy%20commit%20hash.PNG)
Then I use `git cherry-pick`:
![cherry-pick](screenshots/22.%20git%20cherry-pick.PNG)


Step 16: Undoing to a Specific Commit
After all of these, I realized that I want to do something completely different after my first commit. So, I need to undo everything and go back to the first commit. The question is how?

I know that I need to use `git reset --hard`, but to do that I need to know the commit hash or the HEAD.

Solution: I will use this `git reflog` command which shows me all the activity logs and references.

● `git reflog`  
  "Shows a log of all the changes made to the tip of branches and other references."
![reflog](screenshots/23.%20git%20reflog.PNG)

Now, I will use `git reflog` with the HEAD where I want to go.
● `git reset --hard [reflog HEAD]`  
  "Resets the current branch and working directory to the state of the specified reflog entry."
![before reset](screenshots/24.%20before%20git%20reset%20HEAD.PNG)
![after reset](screenshots/25.%20after%20git%20reset%20HEAD.PNG)

I can see that it took the `main` branch to the specified HEAD state. Also, I see it keeps the `feature-branch` untouched.



Some important comands to work with remote changes.
● `git remote add [repo name] [repo ssh link]`  
  "Adds a new remote repository with the specified name and SSH URL."
  Example: git remote add origin git@github.com:haiderkn/myProject.git
![git remote add](screenshots/26.%20git%20remote%20add.PNG)

● `git fetch [repo name]/[branch name]`  
  "Downloads objects and refs from remote repository and git keeps everthing to itself."
  Example: git fetch origin/main
  ![git fetch](screenshots/27.%20git%20fetch.PNG)

● `git rebase`  
  "Applies commits of the current branch on top of another branch in order to integrate changes."
  Example: git rebase
  ![git rebase](screenshots/28.%20git%20rebase.PNG)

● `git pull [remote repo name] [branch name]`  
  "Fetches and rebases changes of repository to a local branch."
  Example: git pull origin main
  ![git pull](screenshots/29.%20git%20pull.PNG)
