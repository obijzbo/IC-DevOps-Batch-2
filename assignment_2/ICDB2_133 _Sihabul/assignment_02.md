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






