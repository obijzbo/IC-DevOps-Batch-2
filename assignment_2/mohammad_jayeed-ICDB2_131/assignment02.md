# File System Navigation

List the contents of the home directory.
```
ls -a ~
```
<img src="screenshots/contents_of_home.png">

Change the current directory to /var/log and list its contents.
```
cd /var/log \
ls -a
```
<img src="screenshots/var_log.png">

Find and display the path to the bash executable using the which command. Find current shell
```
which bash
echo $SHELL
```
<img src="screenshots/bash_dir_and_current_shell.png">

# File and Directory Operations

Create a directory named linux_fundamentals in your home directory.
Inside linux_fundamentals, create a subdirectory named scripts.
Create an empty file named example.txt inside the linux_fundamentals directory.
Copy example.txt to the scripts directory.
Move example.txt from linux_fundamentals to linux_fundamentals/backup.

```
cd ~
mkdir linux_fundamentals
mkdir linux_fundamentals/scripts
touch linux_fundamentals/example.txt
cp linux_fundamentals/example.txt linux_fundamentals/scripts/
mkdir linux_fundamentals/backup && mv ~/linux_fundamentals/example.txt ~/linux_fundamentals/backup
```
<img src="screenshots/file_directory_operations.png">

# Permissions

Change the permissions of example.txt to read and write for the owner, and read-only for the group and others. Verify the permission changes using ls -l

```
ls -l linux_fundamentals/scripts/example.txt
chmod 644 linux_fundamentals/scripts/example.txt
ls -l linux_fundamentals/scripts/example.txt
```
<img src="screenshots/permissions.png">

# File Modification

Create a file named example.txt in your home directory.
Change the owner of example.txt to a user named student
Change the group of example.txt to a group named students.
Verify the changes using appropriate commands.

```
cd ~
touch example.txt
ls -l example.txt
sudo useradd student
sudo chown student ~/example.txt
ls -l example.txt
sudo groupadd students
sudo chgrp students ~/example.txt
ls -l example.txt
```

<img src="screenshots/file_mod.png">

