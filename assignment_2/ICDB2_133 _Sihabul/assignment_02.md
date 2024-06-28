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


