# git assignment 1

# list of all basic command:
description with attached screenshots are given below.

1. Config git:
    - git config --global user.name "github-user-name"
    - git config --global user.email "github-email"
    - git config -l
    - git config --global alias.co 'checkout'
2. Initialize Repository:
    - git init
3. Initialize Remote Repositories:
    - git remote add < remote-name > < clone-url > / < ssh-url >
    - git remote -v
    - git remote remove < remote-name >
4. Stage Changes:
    - git add . 
    - git add -A 
    - git add < file1 > < file2 > 
5. Create a Commit: 
    - git commit -m "commit message" 
    - git commit
6. Unstage Changes:
    - git restore --staged < file-name >
    - git restore < file-name >
7. Stash check:
    - git stash
    - git stash list
    - git stash pop stash@{int}
    - git stash drop stash@{int}
    - git stash apply stash@{int}
    - git stash clear
8. Push Updates:
    - git push
    - git push < remote-name > < branch-name >
    - git push < remote-name > --all
9. Check the Status: 
    - git status
10. Manage branch:
    - git branch < branch-name >
    - git branch -d
    - git branch -D
    - git branch -f
    - git branch -m < old-branch-name > < new-branch-name >
11. Checkout to branch:
    - git checkout 
    - git checkout < branch-name >
    - git checkout -b < branch-name >
12. View Commit History:
    - git log
    - git log --oneline
    - git log < branch-name >
13. Pull Updates:
    - git pull < remote-name > < branch-name >
14. fatch updates:
    - git fatch < remote-name > < branch-name >
15. Chanage Base:
    - git rebase < branch-name >
    - git rebase --continue
    - git rebase --abort
16. Remove Untracked Files:
    - git clean
    - git clean -n
    - git clean -f
    - git clean -f -e < pattern >
    - git clean -f -d
    - git clean -i
17. Manage the reference logs:
    - git reflog
18. Reset commits:
    - git reset --hard <  commit  >
    - git reset --soft <  commit  >
    - git reset --mixed <  commit  >
    - git reset < file >
    - git reset HEAD~[int]
    - git reset HEAD@{int}
19. Cherry pick commits:
    - git cherry-picking < commit-hash >
    - git cherry-pick --continue
    - git cherry-pick --abort
20. Clone repository:
    - git clone < repository-url > < directory >
    - git clone -b < branch-name > < repository-url >
    - git clone --depth 1 < repository-url >

