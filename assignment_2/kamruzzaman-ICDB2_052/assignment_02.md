<h1 align="center"> Linux Fundamentals </h1> 

### Table of Contents : 
1. [File System Navigation](#file-system-navigation)
2. [File and Directory Operations](#file-and-directory-operations)
3. [Permissions](#permissions)
4. [File Modification](#file-modification)
5. [Ownership](#ownership)
6. [User add modify](#user-add-modify)
7. [Hard Soft Link](#Hard-Soft-link)
8. [Package installation](#package-installation)

## File System Navigation: 

- List the contents of the home directory.
```bash
   ls –al
```
![Git Version](./screenshots/1.png)

- Change the current directory to /var/log and list its contents.
```bash
   cd /var/log
   ls
```
![Git Version](./screenshots/2.png)

- Find and display the path to the bash executable using the which command.
```bash
   which bash
```
![Git Version](./screenshots/3.png)

- Find current shell
```bash
   ps p $$
```
![Git Version](./screenshots/4.png)

## File and Directory Operations

- Create a directory named linux_fundamentals in your home directory.
```bash
   mkdir linux_fundamentals
```
![Git Version](./screenshots/5.png)

- Inside linux_fundamentals, create a subdirectory named scripts.
```bash
   cd linux_fundamentals
   mkdir scripts
```
![Git Version](./screenshots/6.png)
- Create an empty file named example.txt inside the linux_fundamentals directory.
```bash
   touch example.txt
```
![Git Version](./screenshots/7.png)
- Copy example.txt to the scripts directory.
```bash
   cp example.txt scripts
```
![Git Version](./screenshots/8.png)
- Move example.txt from linux_fundamentals to linux_fundamentals/backup.
```bash
   mkdir backup
   mv example.txt backup
```
![Git Version](./screenshots/9.png)

## Permissions

- Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.
```bash
   sudo chmod u=rw,g=r,o=r example.txt
```
- Verify the permission changes using ls -l
![Git Version](./screenshots/10.png)

## File Modification

- Create a file named example.txt in your home directory.
```bash
   touch example.txt
```
![Git Version](./screenshots/11.png)

- Change the owner of example.txt to a user named student
```bash
   sudo useradd student
   sudo chown student:eshan example.txt
```

- Change the group of example.txt to a group named students.
```bash
   sudo chown student:student example.txt
```

- Verify the changes using appropriate commands.
```bash
  ls -l example.txt
```
![Git Version](./screenshots/12.png)

## Ownership

- Create a directory named project in your home directory.
```bash
  mkdir project
```
![Git Version](./screenshots/13.png)

- Create a file named report.txt inside the project directory.
```bash
  cd project
  touch report.txt

```
- Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.
```bash
  sudo chmod u=rw,g=r,o=r report.txt
```
![Git Version](./screenshots/14.png)

- Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others
```bash
  sudo chmod u=rwx,g=rx,o=rx project
```
![Git Version](./screenshots/15.png)

- Verify the changes using appropriate commands.
```bash
  sudo usermod –aG eshan student
```
![Git Version](./screenshots/16.png)
```bash
  echo “hello text” >> report.txt
  cat report.tx
```
![Git Version](./screenshots/17.png)
```bash
  sudo su student
  echo “hello txt 2” >> report.txt

```
![Git Version](./screenshots/18.png)

```bash
  touch new_report.txt
  tudo su student
  touch new_report2.txt
```
![Git Version](./screenshots/19.png)

## User add modify

- Create a new user named developer.
```bash
  sudo useradd developer

```
![Git Version](./screenshots/20.png)

- Set the home directory of the user developer to /home/developer_home.
```bash
  sudo usermod –d /home/developer_home developer

```
![Git Version](./screenshots/21.png)

- Assign the shell /bin/sh to the user developer.

- Verify the new user's information.
```bash
  cat /etc/passwd | grep developer
```
![Git Version](./screenshots/22.png)

- Change the username of the user developer to devuser.
```bash
  sudo usermod –l devuser developer
```
![Git Version](./screenshots/23.png)

- Add devuser to a group named devgroup.
```bash
  sudo addgroup devgroup
  sudo usermod –aG devgroup devuser
```
![Git Version](./screenshots/24.png)

- Set the password of devuser to devpass. ( hint: use passwd command. Run passwd --help to see available options)
```bash
   sudo passwd devuser
```
![Git Version](./screenshots/25.png)

- Verify the changes made to the user.
```bash
  su devuser
```
![Git Version](./screenshots/26.png)

## Hard Soft Link

- Create a file named original.txt in your home directory.
```bash
  touch original.txt
```
- Create a symbolic link named softlink.txt pointing to original.txt.
```bash
  ln –s original.txt softlink.txt
```
- Verify the symbolic link and ensure it points to the correct file.
```bash
  echo “hello world” >> original.txt
  cat softlink.txt
```
![Git Version](./screenshots/27.png)

- Delete the original file original.txt and observe the status of the symbolic link.
```bash
  rm –rf original.txt
  ls –l | grep original

```
![Git Version](./screenshots/28.png)

- Create a file named datafile.txt in your home directory.
```bash
  touch datafile.txt
```

- Create a hard link named hardlink.txt pointing to datafile.txt.
```bash
  ln datafile.txt hardlink.txt
```

- Verify the hard link and ensure it correctly points to the file.
```bash
  echo "hello world" >> datafile.txt
  cat hardlink.txt
```
![Git Version](./screenshots/29.png)

- Check the inode of both datafile.txt and hardlink.txt.
```bash
  ls -li datafile.txt hardlink.txt
```
![Git Version](./screenshots/30.png)

- Delete the original file datafile.txt and observe the status of the hard link.
```bash
  rm –rf datafile.txt
```
![Git Version](./screenshots/31.png)

- Find all .txt files in your home directory. ( use find command. Run find --help for usage)
```bash
  find . –type f | grep .txt
```
![Git Version](./screenshots/32.png)

## Package installation

- Update repo cache using apt/apt-get
```bash
  sudo apt update
```
- Install a package named tree
```bash
  sudo apt install tree
```
- Install gcloud CLI tool using apt ( Follow instructions from here: https://cloud.google.com/sdk/docs/install#deb )
```bash
  sudo apt-get update && sudo apt-get install google-cloud-cli
```