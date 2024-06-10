
git: an open source, distributed version-control system
GitHub: a platform for hosting and collaborating on Git repositories
commit: a Git object, a snapshot of your entire repository compressed into a SHA
branch: a lightweight movable pointer to a commit
clone: a local version of a repository, including all commits and branches
remote: a common repository on GitHub that all team member use to exchange their changes
fork: a copy of a repository on GitHub owned by a different user
pull request: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated
tests, and more
HEAD: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits
when using git checkout
Glossary
‘master’ branch
Commit changes Submit Pull Request Discuss proposed changes
 and make more commits

 
Install
Configure tooling


Configure user information for all local repositories
$ git config --global color.ui auto

Enables helpful colorization of command line output
$ git config --global user.email "[email address]"

Sets the email you want attached to your commit transactions
$ git config --global user.name "[name]"

Sets the name you want attached to your commit transactions
$ git clone [url]



$ git init
Turn an existing directory into a git repository

$ git pull
Updates your current local working branch with all new
commits from the corresponding remote branch on GitHub.
 git pull is a combination of git fetch and git merge
Synchronize changes
Synchronize your local repository with the remote repository
on GitHub.com


$ git push
Uploads all local branch commits to GitHub

$ git merge
Combines remote tracking branch into current local branch

$ git fetch
Downloads all history from the remote tracking branches

$ git branch -d [branch-name]
Deletes the specified branch

$ git merge [branch]
Combines the specified branch’s history into the
current branch. This is usually done in pull requests,
but is an important Git operation.

$ git checkout [branch-name]
Switches to the specified branch and updates the
working directory



Branches
Branches are an important part of working with Git. Any
commits you make will be made on the branch you're currently
“checked out” to. Use git status to see which branch that is.


$ git branch [branch-name]
Creates a new branch

Create ‘feature’ branch from ‘master’ Merge ‘feature’ branch into ‘master’
GitHub Flow

$ git commit -m "[descriptive message]"
Records file snapshots permanently in version history

$ git add [file]
Snapshots the file in preparation for versioning

$ git show [commit]
Outputs metadata and content changes of the specified commit


$ git diff [first-branch]...[second-branch]
Shows content differences between two branches

$ git log --follow [file]
Lists version history for a file, including renames


$ git log
Lists version history for the current branch


$ git reset --hard [commit]
Discards all history and changes back to the specified commit



$ git reset [commit]
Undoes all commits after [commit], preserving changes locally

