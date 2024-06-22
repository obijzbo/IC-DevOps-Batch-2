<div style="text-align: center;">

<img src="linux.png" height="60">
<!-- br -->

# Linux Fundamentals

> Here listed some necessary Linux commands. It's help a developer to find linux commands easily.

<!-- br -->

#### By

## <a href="https://github.com/msicse" > Md Sumon Islam</a>

</div>


## File System Navigation

#### List the contents of the home directory.
```
ls -al
```
![alt text](screenshoots/1.png)

#### Change the current directory to /var/log and list its contents.
```
cd /var/log
ls -al
```
![alt text](screenshoots/2.png)

#### Find and display the path to the bash executable using the which command.
```
which bash
```
#### Find current shell
```
echo $SHELL
```
![alt text](screenshoots/3.png)

## File and Directory Operations
#### Create a directory named linux_fundamentals in your home directory.
```
mkdir linux_fundamentals
```
#### Inside linux_fundamentals, create a subdirectory named scripts.
```
mkdir linux_fundamentals/scripts
```
#### Create an empty file named example.txt inside the linux_fundamentals directory.
```
touch linux_fundamentals/example.txt
```
#### Copy example.txt to the scripts directory.
```
cp linux_fundamentals/example.txt linux_fundamentals/scripts
```
#### Move example.txt from linux_fundamentals to linux_fundamentals/backup.
```
mkdir linux_fundamentals/backup && mv linux_fundamentals/example.txt linux_fundamentals/backup
```
### Permissions
#### Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.
```
sudo chmod 644 linux_fundamentals/backup/example.txt
```

#### Verify the permission changes using ls -l
```
ls -l linux_fundamentals/backup/example.txt
```
![alt text](screenshoots/file_directory.png)



## File Modification
#### Create a file named example.txt in your home directory.
```
touch example.txt
```
#### Change the owner of example.txt to a user named student
```
sudo useradd student
sudo chown student example.txt
```
#### Change the group of example.txt to a group named students.
```
sudo groupadd students
sudo chgrp students example.txt
```

#### Verify the changes using appropriate commands.
```
ls -l example.txt
```

![alt text](screenshoots/file-modification.png)
## Ownership
#### Create a directory named project in your home directory.
```
mkdir project
```
#### Create a file named report.txt inside the project directory.
```
touch project/report.txt
```
#### Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.
```
chmod 644 project/report.txt
```
#### Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others
```
chmod 755 project/report.txt
```
#### Verify the changes using appropriate commands.
```
ls -l project/report.txt
ls -l
```
![alt text](screenshoots/ownership.png)
