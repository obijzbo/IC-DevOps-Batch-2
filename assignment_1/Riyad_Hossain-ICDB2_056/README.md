##Basic Git Command :

1.mkdir Name [Create a Folder]
  Ex : mkdir riyadnotes

2.cd Folder Name [Enter the folder]
  Ex : cd riyadnites

3.ls [check elements of the folder]
  Ex : ls { Nothing Show } 

4.ls -a [check all elements with hidden file of the folder]
  Ex : ls -a { ./ ../ }

5.git init [intializing git repository]
  Ex : git init 

6.touch newfilename [Add New File]
  Ex : add day1.txt

7.git status [check git status]
  Ex : git status {...Untracked files: day1.txt}

8.git add filename [staging the file]
  Ex : git add day1.txt

9.git add . [all file staging in my folder]
  Ex : git add .

10.git add *.txt [all .txt file staging]
   Ex : git add *.txt

11.git rm --cached file name [unstaging file]
   Ex : git rm --cached day1.txt

12.git commit -m "msg here" [commited to local repository]
  Ex : git commit -m "my name added"

13.git log [check commit history]
   Ex : git log { commit unique num (HEAD--Master)
                  Author Name:...
                  Date:...
                  my name added}

14.git reset --soft HEAD^ [Undo Commit]
   Ex : git reset --soft HEAD^

15.git reset HEAD^ [undo commit and also remove staging area]
   Ex : git reset HEAD^

16.git log --oneline [show history in oneline]
   Ex : git log --oneline { commit unique 7 id num (HEAD -- Master) my name added }

17.git show commit_id [show specific commit in details]
   Ex : git show 998fef9

18.git branch -c name [create a branch]
   git branch -c branch1

19.git checkout branchname [switch branch]
   git checkout branch1

20.git remote add origin <URL> [remote add in local repository]
  Ex : git remote add origin https://github.com/riyad20038/my-assignment.git

21.git remote -v[Details in remote]
   Ex : git remote -v

22.git push -u origin master/main/branchname [Local to remote repo]
   Ex : git push -u origin branch1

23.git pull [remote to local repo]
   Ex : git pull

