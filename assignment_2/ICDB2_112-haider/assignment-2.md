## File System Navigation
#### List the contents of the home directory.
  ```bash
  cd ~
  ```
  ```bash
  ls -la
  ```
![ls](screenshots\linux-cmd-1.png)

Change the current directory to /var/log and list its contents.
```bash
cd /var/log
```
![cd](screenshots\2.png)

Find and display the path to the bash executable using the which command.
```bash
which bash
```
![cd](screenshots\3.png)
Find current shell
```bash
echo $SHELL
```
![cd](screenshots\4.png)

## File and Directory Operations
Create a directory named linux_fundamentals in your home directory.
```bash
cd ~
mkdir linux_fundamentals
```
![cd](screenshots\5.png)
Inside linux_fundamentals, create a subdirectory named scripts.
```bash
cd linux_fundamentals
mkdir scripts
```
![cd](screenshots\6.png)
Create an empty file named example.txt inside the linux_fundamentals directory.
```bash
cd linux_fundamentals
touch example.txt
```
![cd](screenshots\7.png)
Copy example.txt to the scripts directory.
```bash
cp example.txt scripts/
```
![cd](screenshots\8.png)
Move example.txt from linux_fundamentals to linux_fundamentals/backup.
```bash
mkdir backup
mv example.txt backup/
```
![cd](screenshots\9.png)

## Permissions
Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.
```bash
sudo chmod -rwx
sudo chmod u=rw, go=r example.txt
```
![cd](screenshots\10.png)
Verify the permission changes using ls -l
```bash
ls -l example.txt
```
![cd](screenshots\11.png)

## File Modification
Create a file named example.txt in your home directory.
```bash
cd ~
touch example.txt
```
![cd](screenshots\12.png)
Change the owner of example.txt to a user named student
```bash
sudo useradd student
sudo chown student example.txt
```
![cd](screenshots\13.png)
Change the group of example.txt to a group named students.
```bash
sudo groupadd students
sudo chown :students example.txt
```
![cd](screenshots\14.png)
Verify the changes using appropriate commands.
```bash
ls -lla example.txt
```
![cd](screenshots\15.png)

## Ownership
Create a directory named project in your home directory.
```bash
cd ~
mkdir project
```
![cd](screenshots\16.png)
Create a file named report.txt inside the project directory.
```bash
cd project
touch report.txt
```
![cd](screenshots\17.png)
Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.
```bash
sudo chmod -rwx report.txt
sudo chmod u=rw, go=r report.txt
```
![cd](screenshots\18.png)
Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others.
```bash
sudo chmod u=rwx, go=rx project
```
![cd](screenshots\19.png)
Verify the changes using appropriate commands.
```bash
ls -l project/report.txt
ls -ld project
```
![cd](screenshots\20.png)

## User add/modify
Create a new user named developer.
```bash
sudo useradd developer
```
![cd](screenshots\21.png)
Set the home directory of the user developer to /home/developer_home.
```bash
sudo usermod -d /home/developer_home developer
```
![cd](screenshots\22.png)
Assign the shell /bin/sh to the user developer.
```bash
sudo usermod --shell /bin/sh developer
```
![cd](screenshots\23.png)
Verify the new user's information.
```bash
sudo cat /etc/passwd
```
![cd](screenshots\24.png)
Change the username of the user developer to devuser.
```bash
sudo usermod -l devuser developer
```
![cd](screenshots\25.png)
Add devuser to a group named devgroup.
```bash
sudo groupadd devgroup
sudo usermod -aG devgroup devuser
```
![cd](screenshots\26.png)
Set the password of devuser to devpass. (hint: use passwd command. Run passwd --help to see available options)
```bash
sudo passwd devuser
```
![cd](screenshots\27.png)
Verify the changes made to the user.
```bash
id devuser
groups devuser
```
![cd](screenshots\28.png)
## Hard/Soft Link
Create a file named original.txt in your home directory.
```bash
cd ~
touch original.txt
```
![cd](screenshots\29.png)
Create a symbolic link named softlink.txt pointing to original.txt.
```bash
ln -s softlink.txt original.txt
```
![cd](screenshots\30.png)
Verify the symbolic link and ensure it points to the correct file.
```bash
ls -la softlink.txt
```
![cd](screenshots\31.png)
Delete the original file original.txt and observe the status of the symbolic link.
```bash
rm original.txt
ls -lla softlink.txt
```
![cd](screenshots\32.png)
Create a file named datafile.txt in your home directory.
```bash
cd ~
touch datafile.txt
```
![cd](screenshots\33.png)
Create a hard link named hardlink.txt pointing to datafile.txt.
```bash
ln datafile.txt hardlink.txt
```
![cd](screenshots\34.png)
Verify the hard link and ensure it correctly points to the file.
```bash
ls -la hardlink.txt
```
![cd](screenshots\35.png)
Check the inode of both datafile.txt and hardlink.txt
```bash
ls -li datafile.txt hardlink.txt
```
![cd](screenshots\36.png)
Delete the original file datafile.txt and observe the status of the hard link.
```bash
rm datafile.txt
ls -la
```
![cd](screenshots\36.png)
Find all .txt files in your home directory. (use find command. Run find --help for usage)
```bash
find ./ -name '*.txt'
```
![cd](screenshots\37.png)
## Package installation
Update repo cache using apt/apt-get
```bash
sudo apt update
```
![cd](screenshots\38.png)
Install a package named tree
```bash
sudo apt install tree
```
![cd](screenshots\39.png)
Install gcloud CLI tool using apt (Follow instructions from here: https://cloud.google.com/sdk/docs/install#deb)
```bash
sudo apt install gcloud
```
![cd](screenshots\40.png)