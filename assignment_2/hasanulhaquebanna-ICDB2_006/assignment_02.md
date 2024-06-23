# File System Navigation

This guide provides instructions for basic file system navigation and shell commands in a Unix operating system (Ubuntu).

#### 1. List the contents of the home directory

**Result 1:**

![Alt text](./screenshots/home_contents.png)

Using this `ls ~` command we will get the following results:

- The `~` symbol is a shorthand for the current user's home directory
- Lists the files and directories in the user's home directory.
  <br/>

**Result 2:**

![Alt text](./screenshots/home_contents1.png)

Using this `ls` command we will get the following results:

- Lists the files and directories in the current directory.
- By default, it does not show hidden files (those starting with a dot)
  <br/>

**Result 3:**

![Alt text](./screenshots/home_contents2.png)

Using this `ls -a` command we will get the following results:

- Lists all files and directories, including hidden ones (those starting with a dot).
  <br/>

**Result 4:**

![Alt text](./screenshots/home_contents3.png)

Using this `ls -la` command we will get the following results:

- Combining the options `-l` meaning long listing format and `-a` meaning show all files including hidden ones (Long listing format provides detailed information about each file as well directories, such as permissions, number of links, owner, group, size and modification time and more).
  <br/> <br/>

#### 2. Change the current directory to /var/log and list its contents

**Result 1:**

![Alt text](./screenshots/var_log_contents1.png)

Using this `cd /var/log` command we will get the following results:

- The command changes the directory to /var/log.
  <br/>

**Result 2:**

![Alt text](./screenshots/var_log_contents2.png)

Using this `ls` command we will get the following results:

- Lists the files and directories in the current directory.
- By default, it does not show hidden files (those starting with a dot)
  <br/>

**Result 3:**

![Alt text](./screenshots/var_log_contents3.png)

Using this `ls -a` command we will get the following results:

- Lists all files and directories, including hidden ones (those starting with a dot).
  <br/>

**Result 4:**

![Alt text](./screenshots/var_log_contents4.png)

Using this `ls -la` command we will get the following results of the `/var/log` directory :

- Combining the options `-l` meaning long listing format and `-a` meaning show all files including hidden ones (Long listing format provides detailed information about each file as well directories, such as permissions, number of links, owner, group, size and modification time and more).
  <br/>

#### 3. Find and display the path to the bash executable using the which command

**Result 1:**

![Alt text](./screenshots/which_bash.png)

Using this `which bash` command we will get the following results:

- This command locates the executable file, in this case we got`/usr/bin/bash`.
  <br/>

**Result 2:**

![Alt text](./screenshots/current_shell.png)

Using this `echo $SHELL` command we will get the following results:

- This command prints the path of the shell, in this case we got `/bin/bash`.
  <br/><br/><br/>

# File and Directory Operations

This guide provides instructions for basic file and directory operations in a Unix operating system (Ubuntu).

#### 1. Create a directory named `linux_fundamentals` in your home directory

**Result:**

![Alt text](./screenshots/linux_fundamentals_dir.png)

Using this `mkdir ~/linux_fundamentals
` command we will get the following results:

- The `mkdir` command is used to create directories.
- And finally the command creates a directory named `linux_fundamentals` in the user's home directory, in this case `hasanulhaquebanna@DESKTOP-ELBL87C`.
  <br/>

#### 2. Inside `linux_fundamentals` create a subdirectory named `scripts`

**Result:**

![Alt text](./screenshots/linux_fundamentals_subdir.png)

Using this `mkdir ~/linux_fundamentals
` command we will get the following results:

- The `mkdir` command is used to create directories.
- And finally the command creates a directory named `linux_fundamentals` in the user's home directory, in this case `hasanulhaquebanna@DESKTOP-ELBL87C`.
  <br/>

#### 3. Create an empty file named `example.txt` inside the `linux_fundamentals` directory

**Result:**

![Alt text](./screenshots/example_file_create.png)

Using this `touch ~/linux_fundamentals/example.txt` command we will get the following results:

- In here the `touch` command is used to create an empty file.
- This command creates an empty file named `example.txt` inside the `linux_fundamentals` directory.
  <br/>

#### 4. Copy `example.txt` to the `scripts` directory

**Result:**

![Alt text](./screenshots/example_file_copy.png)

Using this `cp ~/linux_fundamentals/example.txt ~/linux_fundamentals/scripts/
` command we will get the following results:

- The `cp` command is used to copy files and directories.
- This command copies the `example.txt` file from `linux_fundamentals` to the `scripts` subdirectory.
  <br/>

#### 5. Move `example.txt` from `linux_fundamentals` to `linux_fundamentals/backup`

**Result:**

![Alt text](./screenshots/example_file_move_backup.png)

Using these command we will get the following results:

- The `mkdir` command is used to make directory and that's why first we need to create a dierectory named `backup` under `linux_fundamentlas.`
- The `mv` command moves the `example.txt` file from `linux_fundamentals` to the `backup` subdirectory.
  <br/><br/><br/>

# Permissions

This guide provides instructions for changing file permissions in a Unix operating system (Ubuntu).

#### 1. Change the permissions of `example.txt` to read and write for the owner, and read-only for the group and others

**Result:**

![Alt text](./screenshots/user_permission.png)

Using these command we will get the following results:

- The `u=rw:` command Sets read and write permissions for the owner (`u` stands for user)
- `g=r:` Sets read-only permissions for the group (`g` stands for group)
- `o=r:` Sets read-only permissions for others (`o` stands for others).
  <br/>

#### 2. Verify the permission changes using `ls -l`

**Result:**

![Alt text](./screenshots/user_permission2.png)

Using these command we will get the following results:

- The `ls -l` command lists files and directories with detailed information, including permissions.
- This command verifies the permissions of `example.txt`.
  <br/><br/><br/>

# File Modification

This guide provides instructions for file modification operations in a Unix operating system (Ubuntu).

#### 1. Create a file named `example.txt` in your home directory

**Result:**

![Alt text](./screenshots/home_example_txt_file.png)

Using this touch `~/example.txt` command we will get the following results:

- The `touch` command is used to create an empty file.
- This command creates an empty file named `example.txt` in the user's home directory, in this case `hasanulhaquebanna@DESKTOP-ELBL87C`.
  <br/>

#### 2. Change the owner of `example.txt` to a user named student

**Result:**

![Alt text](./screenshots/check_permit_example_txt.png)
![Alt text](./screenshots/create_student_students.png)
![Alt text](./screenshots/owner_change_example_txt.png)

Using this `sudo useradd student` command we will get the following results:

- Before assigning the file we created a student user using `sudo useradd -m student` command.
- The `useradd` command is used to create a new user in this case `student`.
- This command creates a user named student.
  <br/>

#### 3. Change the group of `example.txt` to a group named `students`.

**Result:**

![Alt text](./screenshots/create_student_students.png)
![Alt text](./screenshots/change_group_example_txt.png)
Using this `sudo chgrp students ~/example.txt` command we will get the following results:

- Before assigning the file we created a student user using `sudo groupadd students` command.
- The chgrp command is used to change the group ownership of a file.
- This command changes the group of example.txt to students.
  <br/>

#### 4. Verify the changes using appropriate commands.

**Result:**

![Alt text](./screenshots/verify_permissions_example_txt.png)

Using the `ls -l example.txt` or `ls -la example.txt` command we will get the following results:

- Before assigning the file we created a student user using `sudo groupadd students` command.
- The chgrp command is used to change the group ownership of a file.
- This command changes the group of example.txt to students.
  <br/><br/><br/>

# Ownership

This guide provides instructions for basic ownership and permission operations in a Unix operating system (Ubuntu).

#### 1. Create a directory named project in your home directory.

**Result:**

![Alt text](./screenshots/project_dir.png)

Using the `mkdir ~/project` command we will get the following results:

- The mkdir command is used to create a new directory in this case `project`.
- This command creates a directory named project in the user's home directory.
  <br/>

#### 2. Create a file named `report.txt` inside the `project` directory

**Result:**

![Alt text](./screenshots/report_txt.png)

Using the touch `~/project/report.txt` command we will get the following results:

- The `touch` command is used to create an empty file.
- This command creates an empty file named `report.txt` inside the project directory.
  <br/>

#### 3. Set the permissions of `report.txt` to read and write for the owner, and read-only for the group and others

**Result:**

![Alt text](./screenshots/permission_report_txt.png)

Using the `chmod u=rw,go=r ~/project/report.txt` command we will get the following results:

- The `chmod` command changes the file permissions.
- This command sets the permissions of `report.txt` to read and write for the owner, and read-only for the group and others.
  <br/>

#### 4. Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others

**Result:**
![Alt text](./screenshots/permission_project_dir.png)

Using the `chmod u=rwx,go=rx ~/project` command we will get the following results:

- The `chmod` command changes the directory permissions.
- This command sets the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others.
  <br/>

#### 5. Verify the changes using appropriate commands

**Result:**

![Alt text](./screenshots/verify_permissions_project_report.png)

Using the `ls -l ~/project/report.txt` and `ls -ld ~/project` commands:

- The `ls -l` command displays detailed information about the file, showing the updated permissions for `report.txt`.
- The `ls -ld` command displays detailed information about the directory, showing the updated permissions for the `project` directory.
  <br/><br/><br/>

# User add/modify

This guide provides instructions for User add/modify operations in a Unix operating system (Ubuntu).

#### 1. Create a new user named developer

**Result:**

![Alt text](./screenshots/create_developer_usr.png)

Using the `sudo useradd developer` we will get the following results:

- The command will create a new user after succesfully provide the root user password
- The command will create a user in this case `developer`.
  <br/>

#### 2. Set the home directory of the user developer to /home/developer_home

**Result:**

![Alt text](./screenshots/directory_set_developer.png)

Using the `sudo usermod -d /home/developer_home developer` command we will get the following results:

- The `-d` option for `usermod` is used to change the home directory of the specified user (`developer`) to `/home/developer_home`.
- This command updates the home directory for the user `developer` to `/home/developer_home`.
  <br/>

#### 3. Assign the shell `/bin/sh` to the user developer

**Result:**

![Alt text](./screenshots/assign_bin_sh_developer.png)

Using the `sudo usermod -s /bin/sh developer` command we will get the following results:

- The `-s` option for `usermod` is used to change the default shell of the specified user (`developer`) to `/bin/sh`.
- This command updates the shell for the user `developer` to `/bin/sh`.
  <br/>

#### 4. Verify the new user's information

**Result:**

![Alt text](./screenshots/verify_developer_usr.png)

Using the `sudo id developer` command we will get the following results:

- This command verifies the user information for `developer`, confirming its UID, GID, and groups.
  <br/>

#### 5. Change the username of the user developer to devuser

**Result:**

![Alt text](./screenshots/change_username_developer.png)

It changes the username of `developer` to `devuser`.
<br/>

#### 6. Add devuser to a group named devgroup

**Result:**

![Alt text](./screenshots/devgroup_devuser.png)

Using the `sudo usermod -aG devgroup devuser` command we will get the following results:

- Before assigning the command first we need to create a group named `devgroup` using `sudo groupadd devgroup` command.
- The command set the `devuser` to a group named `devgroup`
  <br/>

#### 7. Add devuser to a group named devgroup

**Result:**

![Alt text](./screenshots/set_passwd_devuser.png)

Using the `sudo passwd devuser` command we will get the following results:

- This command prompted to enter and confirm the new password for `devuser`.
  <br/>

#### 8. Verify the changes made to the user

**Result:**

![Alt text](./screenshots/verify_devuser.png)

Using the `id devuser`, `grep devuser /etc/passwd` and `groups devuser` commands we will get the following results:

- The command `id devuser` should show the UID, GID, and groups of `devuser`.
- The command `grep devuser /etc/passwd` should display the entry for `devuser` confirming its username and home directory.
- The command `groups devuser` show list the groups `devuser` belongs to, including `devgroup`
  <br/> <br/> <br/>

# Hard/Soft Link

This guide provides instructions for Hard/Soft Link operations in a Unix operating system (Ubuntu).

#### 1. Create a file named original.txt in your home directory

**Result:**

![Alt text](./screenshots/original_txt.png)

Using the command `original.txt`, we will get the following results:

- The command creates a file named `original.txt` with the specified content in the `home` directory.
  <br/>

#### 2. Create a symbolic link named `softlink.txt` pointing to `original.txt`

**Result:**

![Alt text](./screenshots/create_link.png)

Using the command `ln -s original.txt softlink.txt`, we will get the following results:

- The command creates a symbolic link `softlink.txt` that points to `original.txt`
  <br/>

#### 3. Verify the symbolic link and ensure it points to the correct file

**Result:**

![Alt text](./screenshots/create_link.png)

Using the command `ls -l softlink.txt`, we will get the following results:

- The symbolic link `softlink.txt` points to `original.txt`
  <br/>

#### 4. Delete the original file original.txt and observe the status of the symbolic link

**Result:**

![Alt text](./screenshots/delete_original_txt.png)
![Alt text](./screenshots/verify_softlink_txt.png)

Using `rm original.txt` and `ls -l softlink.txt` commands, we will get the following results:

- The command `rm original.txt` will delete `original.txt` file.
- The command `ls -l softlink.txt` will verify the `softlink.txt` to `original.txt`
- After deleting `original.txt`, `softlink.txt` will still appear in the directory listing, but attempting to open `softlink.txt` will result in an error since the target file no longer exists.
  <br/>

#### 5. Create a file named datafile.txt in your home directory

**Result:**

![Alt text](./screenshots/datafile_txt.png)

Using the command `touch datafile.txt`, we will get the following results:

- The command creates a file named `datafile.txt` with the specified content in the `home` directory.
  <br/>

#### 6. Create a hard link named `hardlink.txt` pointing to `datafile.txt`

**Result:**

![Alt text](./screenshots/datafile_txt_hardlink_txt.png)

Using the command `ln datafile.txt hardlink.txt`, we will get the following results:

- The command creates a hard link `hardlink.txt` that points to `datafile.txt`.
  <br/>

#### 7. Verify the hard link and ensure it correctly points to the file

**Result:**

![Alt text](./screenshots/verify_hardlink_txt.png)

Using the command `ls -li datafile.txt hardlink.txt`, we will get the following results:

- Both `datafile.txt` and `hardlink.txt` share the same inode number, indicating they are hard links to the same data.
  <br/>

#### 8. Check the inode of both `datafile.txt` and `hardlink.txt`

**Result:**

![Alt text](./screenshots/inode_datafile_txt_hardlink_txt.png)

Using `ls -i datafile.txt` and `ls -i hardlink.txt`, we will get the following results:

- Both the inode numbers for `datafile.txt` and `hardlink.txt` are identical.
- <br/>

#### 9. Delete the original file `datafile.txt` and observe the status of the hard link

**Result:**

![Alt text](./screenshots/delete_datafile_txt.png)
![Alt text](./screenshots/check_hardlink_txt.png)

Using the commands `rm datafile.txt` and `ls -li hardlink.txt`, we will get the following results:

- Even after deleting `datafile.txt`, `hardlink.txt` remains and can still be accessed.
- <br/>

#### 10. Find all `.txt` files in your home directory

**Result:**

![Alt text](./screenshots/find_all_txt.png)

Using the command `find ~ -name "*.txt`, we will get the following results:

- The command finds all `.txt` files in the home directory.

<br/><br/><br/>

# Package Installation

This guide provides instructions for Package Installation operations in a Unix operating system (Ubuntu)

#### 1. Update repository cache using `apt/apt-get`

**Result:**

![Alt text](./screenshots/cache_update.png)

Using the command `sudo apt update`, we will get the following results:

- This command update the repository cache to ensure we have the latest information about available packages.
- his command updates the local database of available packages from the repositories configured on your system.
  <br/>

#### 2. Install a package named `tree`

**Result:**

![Alt text](./screenshots/install_tree.png)

Using the command `sudo apt install tree`, we will get the following results:

- This command will install the tree package, which is a utility for displaying directory structures.
- This command installs the `tree` package and along with some its dependencies.
  <br/>

#### 3. Install `gcloud` CLI tool using apt

**Result:**

![Alt text](./screenshots/google_cli_download.png)
![Alt text](./screenshots/google_cli_download2.png)
![Alt text](./screenshots/google_cli_download3.png)
![Alt text](./screenshots/google_cli_download4.png)
![Alt text](./screenshots/google_cli_download5.png)
![Alt text](./screenshots/google_cli_download6.png)
![Alt text](./screenshots/google_cli_download7.png)
![Alt text](./screenshots/google_cli_download8.png)
![Alt text](./screenshots/google_cli_download9.png)
![Alt text](./screenshots/google_cli_download10.png)
![Alt text](./screenshots/google_cli_download11.png)
![Alt text](./screenshots/google_cli_download11.png)
