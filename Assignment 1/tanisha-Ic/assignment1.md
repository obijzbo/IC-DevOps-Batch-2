# Git Commands Scribe Sheet
1. git clone
 Clones a repository into a newly created directory. 
2. git checkout -b
Creates a new branch and switches to it.3. git add
3. git add
 Adds file contents to the index (staging area).
4. git commit
 Records changes to the repository.
5. git push
Pushes the branch and its commits to the remote repository.
6. git pull
 Fetches from and integrates with another repository or a local branch.7. git merge
 Combines changes from different branches
8. git status
 Shows the current state of the repository.
9. git log
Shows the commit logs.
Interesting Git Concept
How Git Calculates the SHA-1 Hash
Git uses the SHA-1 hash function to uniquely identify objects (commits, trees, blobs) in its history. The SHA-1 hash is computed based on the content of the object. This ensures data integrity and uniqueness, allowing Git to efficiently track changes and manage version history.
10. ls
 Lists files and directories in the current directory.
11.git reset
Resets the current HEAD to the specified state (e.g., commit, branch).12. git help
Displays helpful information about Git commands.
13. cat
 Displays the contents of a file
14. alias
Creates a shortcut (alias) for Git commands.
15. git rebase
Reapplies commits on top of another base tip.



*Pull Request Description*

Concept: Git Branching and Workflow Strategies
Git branching and workflow strategies play a crucial role in managing and organizing collaborative development efforts. Here’s an overview of why understanding branching strategies is important:

Branching: Git allows developers to create lightweight branches that diverge from the main codebase (typically master or main branch). Each branch can represent a feature, bug fix, or experiment without affecting the main codebase until changes are ready to be integrated.

Workflow Strategies: Different workflow strategies, such as GitFlow, Feature Branching, and Trunk-Based Development, offer structured approaches to managing branches and releases. These strategies define when and how branches are created, how they are merged, and how releases are managed.

GitFlow: GitFlow, for example, defines specific branches like develop (for ongoing development), feature (for feature development), release (for release preparation), and hotfix (for quick fixes to production issues). It promotes parallel development and clear versioning.

Feature Branching: This strategy involves creating branches for each new feature or change. It allows teams to work on features independently, test them, and merge them back into the main branch once ready.

Trunk-Based Development: In contrast to GitFlow, this strategy encourages frequent commits directly to the main branch (master or main). It promotes continuous integration and requires robust testing and feature toggles to manage ongoing development.

Understanding these strategies helps teams collaborate effectively, manage concurrent development efforts, maintain code quality, and streamline release cycles. Each strategy has its benefits and trade-offs, making it crucial to choose or adapt one that best fits the project's needs and team dynamics.
