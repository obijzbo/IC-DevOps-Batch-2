Linux Fundamentals Exercise: 

This exercise covers basic file system navigation, file and directory operations, and permissions in a Linux environment.

File System Navigation: 

List the contents of the home directory:

ls ~


Change the current directory to /var/log and list its contents:

cd /var/log
ls-ltr


Find and display the path to the bash executable using the which command:

which bash


Find the current shell:

echo $SHELL


File and Directory Operations: 
Create a directory named linux_fundamentals in your home directory:


mkdir ~/linux_fundamentals

Inside linux_fundamentals, create a subdirectory named scripts:


mkdir ~/linux_fundamentals/scripts

Create an empty file named example.txt inside the linux_fundamentals directory:


touch ~/linux_fundamentals/example.txt

Copy example.txt to the scripts directory:

cp ~/linux_fundamentals/example.txt ~/linux_fundamentals/scripts/

Move example.txt from linux_fundamentals to linux_fundamentals/backup:


mkdir ~/linux_fundamentals/backup
mv ~/linux_fundamentals/example.txt ~/linux_fundamentals/backup/


Permissions:  

Change the permissions of example.txt to read and write for the owner, and read-only for the group and others:


chmod u+rw example.txt
chmod g+r example.txt

Verify the permission changes using ls -l:

ls -ltr

Each command should be executed in the terminal. Ensure you have the necessary permissions to create directories and files in the specified locations..