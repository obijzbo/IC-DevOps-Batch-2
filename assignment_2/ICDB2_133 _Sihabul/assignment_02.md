# File System Navigation:

### List the contents of the home directory.

> ls -la

![](screenshots/List_content.png)

### Change the current directory to /var/log and list its contents.

> cd /var/log
>
> ls -la

![](screenshots/var_log.png)

### Find and display the path to the bash executable using the which command.

> which bash

![](screenshots/which_bash.png)

### Find current shell

> echo $SHELL

![](screenshots/current_shell.png)



# File and Directory Operations

### Create a directory named linux_fundamentals in your home directory.

> mkdir linux_fundamentals

![](screenshots/linux_fundamental_directory.png)

### Inside linux_fundamentals, create a subdirectory named scripts.

> mkdir linux_fundamentals/scripts

![](screenshots/subdir_scripts.png)

### Create an empty file named example.txt inside the linux_fundamentals directory.

> touch example.txt

![](screenshots/example_file.png)

### Copy example.txt to the scripts directory.

> cp example.txt /home/sihabul/linux_fundamentals/scripts/

![](screenshots/copy_file.png)

### Move example.txt from linux_fundamentals to linux_fundamentals/backup.

> mkdir backup
>
> mv example.txt backup/

![](screenshots/move_file.png)

## Permissions

### Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.

> chmod 644 example.txt

![](screenshots/permissions.png)

### Verify the permission changes using ls -l

> ls -la

![](screenshots/permissions.png)

# File Modification

### Create a file named example.txt in your home directory.

> touch example.txt

![](screenshots/create_file.png)

### Change the owner of example.txt to a user named student

> sudo useradd student
>
> sudo chown student example.txt 

![](screenshots/permission_change.png)

### Change the group of example.txt to a group named students.

> sudo chown :student example.txt 

![](screenshots/group_change.png)

### Verify the changes using appropriate commands.

> ls -la | grep example.txt

![](screenshots/group_change.png)


# Ownership

### Create a directory named project in your home directory.

> mkdir ~/project

![](screenshots/create_directory.png)

### Create a file named report.txt inside the project directory.

> touch project/report.txt

![](screenshots/create_project_file.png)

### Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.

> chmod 644 project/report.txt 

![](screenshots/change_file_permission.)

### Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others

> chmod 755 project/

![](screenshots/change_group_permission.png)

### Verify the changes using appropriate commands.

> ls -la | grep project
>
> cd project/
> 
> ls -la

![](screenshots/verify_permission.png)

# User add/modify
### Create a new user named developer.

> sudo useradd developer

![](screenshots/user_add.png)

### Set the home directory of the user developer to /home/developer_home.

> sudo usermod -d /home/developer_home developer

![](screenshots/specify_homedir.png)

![](screenshots/specify_homedir2.png)

### Assign the shell /bin/sh to the user developer.

> sudo chsh --shell /bin/sh developer

![](screenshots/change_shell.png)

### Verify the new user's information.

> cat /etc/passwd | grep developer

![](screenshots/verify_devuser_info.png)

### Change the username of the user developer to devuser.

> sudo usermod -l devuser developer

![](screenshots/change_username.png)

### Add devuser to a group named devgroup.

> sudo groupadd devgroup
>
> sudo usermod -aG devgroup devuser

![](screenshots/group.png)

### Set the password of devuser to devpass. ( hint: use passwd command. Run passwd --help to see available options)

> sudo passwd devuser

![](screenshots/change_pass.png)

### Verify the changes made to the user.

> cat /etc/passwd | grep developer

![](screenshots/verify_devuser_newinfo.png)

# Hard/Soft Link
### Create a file named original.txt in your home directory.

> touch original.txt

![](screenshots/create_file2.png)

### Create a symbolic link named softlink.txt pointing to original.txt.

> ln -s original.txt softlink.txt

![](screenshots/softlink.png)

### Verify the symbolic link and ensure it points to the correct file.

> ls -l softlink.txt

![](screenshots/verify_softlink.png)

### Delete the original file original.txt and observe the status of the symbolic link.

> rm original.txt
>
> ls -l softlink.txt

![](screenshots/del_original_file.png)

### Create a file named datafile.txt in your home directory

> touch datafile.txt

![](screenshots/create_datafile.png)

### Create a hard link named hardlink.txt pointing to datafile.txt

> ln datafile.txt hardlink.txt

![](screenshots/create_hardlink.png)

### Verify the hard link and ensure it correctly points to the file

> ls -l datafile.txt hardlink.txt

![](screenshots/verify_hardlink.png)

### Check the inode of both datafile.txt and hardlink.txt

> ls -i datafile.txt hardlink.txt

![](screenshots/check_inode.png)

### Delete the original file datafile.txt and observe the status of the hard link

> rm datafile.txt
>
> ls -l hardlink.txt

![](screenshots/check_hardlink.png)

### Find all .txt files in your home directory. (Use the find command. Run find --help for usage.)

> find ~ -name "*.txt"

![](screenshots/check_txt_file.png)

# Package installation
### Update repo cache using apt/apt-get

> sudo apt update

![](screenshots/apt_update.png)

### Install a package named tree

> sudo apt install tree

![](screenshots/tree_install.png)

### Install gcloud CLI tool using apt ( Follow instructions from here: https://cloud.google.com/sdk/docs/install#deb )

> ![](screenshots/google_cli.png)