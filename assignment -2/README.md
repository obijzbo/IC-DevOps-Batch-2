**File System Navigation**

List the contents of the home directory.
ls

![alt text](<screenshot/Screenshot 2024-06-23 at 11.37.34 AM.png>)


Change the current directory to /var/log and list its contents.
cd var/log
![alt text](<screenshot/Screenshot 2024-06-23 at 11.38.22 AM.png>)


Find and display the path to the bash executable using the which command.
which -a bash
![alt text](<screenshot/Screenshot 2024-06-23 at 11.45.04 AM-1.png>)

Find current shell
echo "$SHELL"

![alt text](<screenshot/Screenshot 2024-06-23 at 11.47.49 AM-1.png>)


**File and Directory Operations**

Create a directory named linux_fundamentals in your home directory.
mkdir linux_fundamentals


Inside linux_fundamentals, create a subdirectory named scripts.
mkdir -p linux_fundamentals/scripts
![alt text](<screenshot/Screenshot 2024-06-23 at 11.50.37 AM.png>)

Create an empty file named example.txt inside the linux_fundamentals directory.
touch example.txt

Copy example.txt to the scripts directory.
cp example.txt scripts/
![alt text](<screenshot/Screenshot 2024-06-23 at 11.59.50 AM.png>)

Move example.txt from linux_fundamentals to linux_fundamentals/backup.Permissions
mv example.txt backup.Permissions/
![alt text](<screenshot/Screenshot 2024-06-23 at 12.02.04 PM.png>)

Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.

chmod 644 example.txt 

Verify the permission changes using ls -l
ls -l
![alt text](<screenshot/Screenshot 2024-06-23 at 12.04.21 PM.png>)

**File Modification**

Create a file named example.txt in your home directory.
touch example.txt

Change the owner of example.txt to a user named student
sudo useradd student
chown student example.txt 
![alt text](<screenshot/Screenshot 2024-06-23 at 12.19.30 PM.png>)

Change the group of example.txt to a group named students.
sudo groupadd students
sudo chgrp students example.txt


Verify the changes using appropriate commands.
ls -l
![alt text](<screenshot/Screenshot 2024-06-23 at 12.20.23 PM.png>)



**Ownership**

Create a directory named project in your home directory.
mkdir project
![alt text](<screenshot/Screenshot 2024-06-23 at 12.21.32 PM.png>)

Create a file named report.txt inside the project directory.
touch report.txt
![alt text](<screenshot/Screenshot 2024-06-23 at 12.23.15 PM.png>)

Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.
chmod 644 report.txt
![alt text](<screenshot/Screenshot 2024-06-23 at 12.29.23 PM.png>)

Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others
chmod -R 755 project

Verify the changes using appropriate commands.
ls -l
![alt text](<screenshot/Screenshot 2024-06-23 at 12.23.56 PM.png>)

**Ownership**

Create a new user named developer.
useradd developer

Set the home directory of the user developer to /home/developer_home.
sudo usermod -d /home/developer_home developer 
![alt text](<screenshot/Screenshot 2024-06-23 at 12.34.37 PM.png>)

Assign the shell /bin/sh to the user developer.
grep developer /etc/passwd
sudo usermod --shell /bin/sh developer 
![alt text](<screenshot/Screenshot 2024-06-23 at 12.40.10 PM.png>)

Verify the new user's information.
grep developer /etc/passwd

Change the username of the user developer to devuser.
sudo usermod -l devuser developer
![alt text](<screenshot/Screenshot 2024-06-23 at 12.43.49 PM.png>)

Add devuser to a group named devgroup.
sudo groupadd devgroup
sudo usermod -G devgroup devuser
![alt text](<screenshot/Screenshot 2024-06-23 at 12.50.56 PM.png>)

Set the password of devuser to devpass. ( hint: use passwd command. Run passwd --help to see available options)
passwd devuser
![alt text](<screenshot/Screenshot 2024-06-23 at 12.55.11 PM.png>)

Verify the changes made to the user.
id devuser
![alt text](<screenshot/Screenshot 2024-06-23 at 12.55.11 PM-1.png>)



**Hard/Soft Link**

Create a file named original.txt in your home directory.
sudo touch original.txt

Create a symbolic link named softlink.txt pointing to original.txt.
sudo ln -s original.txt softlink.txt
![alt text](<screenshot/Screenshot 2024-06-23 at 1.00.32 PM.png>)

Verify the symbolic link and ensure it points to the correct file.
ls -l softlink.txt
![alt text](<screenshot/Screenshot 2024-06-23 at 1.03.36 PM.png>)

Delete the original file original.txt and observe the status of the symbolic link.
rm original.txt 

Create a file named datafile.txt in your home directory.
touch datafile.txt

Create a hard link named hardlink.txt pointing to datafile.txt.
sudo ln -v datafile.txt hardlink.txt
![alt text](<screenshot/Screenshot 2024-06-23 at 1.10.57 PM-1.png>)

Verify the hard link and ensure it correctly points to the file.
ls -l hardlink.txt 
![alt text](<screenshot/Screenshot 2024-06-23 at 1.10.57 PM.png>)

Check the inode of both datafile.txt and hardlink.txt
stat /var/log/lastlog
![alt text](<screenshot/Screenshot 2024-06-23 at 1.15.31 PM.png>)

Delete the original file datafile.txt and observe the status of the hard link.
sudo rm datafile.txt 
sudo ls -l hardlink.txt 
![alt text](<screenshot/Screenshot 2024-06-23 at 1.16.52 PM.png>)

Find all .txt files in your home directory. ( use find command. Run find --help for usage)
sudo find . -name '*.txt'
![alt text](<screenshot/Screenshot 2024-06-23 at 1.21.18 PM.png>)



**Package installation**

Update repo cache using apt/apt-get
sudo apt-get update
![alt text](<screenshot/Screenshot 2024-06-23 at 1.24.24 PM.png>)

Install a package named tree
sudo apt-get install tree
![alt text](<screenshot/Screenshot 2024-06-23 at 1.25.24 PM-2.png>)

Install gcloud CLI tool using apt ( Follow instructions from here: https://cloud.google.com/sdk/docs/install#deb )
![alt text](<screenshot/Screenshot 2024-06-23 at 1.22.58 PM.png>)
![alt text](<screenshot/Screenshot 2024-06-23 at 1.23.27 PM.png>)

