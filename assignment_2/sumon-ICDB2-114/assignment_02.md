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
