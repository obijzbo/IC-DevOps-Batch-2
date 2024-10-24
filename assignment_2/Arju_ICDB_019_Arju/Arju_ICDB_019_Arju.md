Certainly! Here's the content formatted as per your provided structure:

---

# OS: Beach between hardware and software. 

## Linus: 
Operating System, Open Source.

## Confusion: 
Carnel.

## Terminal: 
An interface to communicate with user and computer.

## Shell: 
Terminal এ Shell নামে একটা Variable থাকে । 
Terminal এ যে command দেয়া হয় সেটা মূলত Shell দেয় । 
Terminal এ দেয়া command গুলো Shell প্রথমে OS এ পাঠায়, OS থেকে সেটা Hardware যায় . শেষে Hardware থেকে একটা Feedback User এর কাছে আসে ।

- Terminal > Shell > OS > Hardware > User

There are many kinds of Shell.

## Linux Files System:

- **File**: File.
- **Folder**: Directory.

### Commands:

1. `ls`: Which files has in the current directory.
2. `ls -l`: Show detailed information about files.

   Note: If the first letter l, d, - then it is called:
   - `lrwxrwxrwx`: l means Symbolic Link.
   - `drwxrwx`: d means directory.
   - `-rw`: - means file.
   - `r = read (Numeric value 4)`
   - `w = write (Numeric value 2)`
   - `x = executable (Numeric value 1)`

   - `-rw-rw-r - -`: 
     - `rw`: It is current user permission; Like: Current user can read and write here.
     - `rw`: It indicates that the current user belongs in which group.
     - `--`: This indicates other users’ permission.

- **Root directory**: তে অনেক ধরনের sub-directory তে থাকে ।
- `bin` **directory**: তে Binary জিনিসপত্র থাকে । যেমন ঃ executable. Bin directory is used for boot the System and Basic command run করার জন্য সে সব binary দরকার সেগুলো থাকে । OS এর বেসিক command গুলো bin directory তে থাকে ।

- `cdrom`: External cd rom থাকলে, তাহলে সেটা cdrom directory তে থাকে ।
- `etc`: Configuration file গুলো থাকে ।
- `lib`: Store the different types of Libraries.
- `mnt`: Use for External Mount.
- `propc`: To store Running process and System performance information.

3. `cd -`: It will redirect to the previous directory.
4. `ps`: Will show all running processes.

### Other Commands:

5. `pwd`: To see the current directory where I am.
6. `env`: Return the key and value.
7. `mkdir devops-ic-batc-2`: `mkdir` - It creates a directory named devops-ic-batc-2.
8. `mv devops-ic-batc-2 devops-ic-batch-2`: It renames the file or directory.
9. `touch unix.txt`: It will create an empty file named unit.txt.
10. `vi unix.txt`: It will enable writing something in this unix.txt file.
11. `cat unix.txt`: It will show the content which is in the unix.txt file.
12. `whoami`: It shows the current user directory.
13. `groups`: It will show that in which group the current user belongs to.
14. `ls -a`: It will show all kinds of files in the current directory.
15. `touch .super-secret-file`: It will create a secret file named super-secret-file. If before the file name . দেয়া হয় তাহলে সেটা secret file হয়ে যায় । সেটা আর ls command দিয়ে দেখা যায় না । এটা দেখতে হলে ls -a command দিতে হবে ।
16. `ls -al`: It will show all total files.
17. `echo “something”`: It will print the value something in the terminal.
18. `echo “something” > .super-secret-file`: It will transfer the writing content in the super-secret-file.
19. `echo “somethingV1” > .super-secret-file`: It can be updated here and previous content will be removed.
20. `echo “somethingv2” >> .super-secret-file`: It will update the content but not remove the previous content.
21. `rm .super-secret-file`: It will delete the file named super-secret-file.
22. `rm -r test/`: It will delete the directory named test.
23. `cp unix.txt unix2.txt`: It will copy a file.
24. `ssh`: Give a remote server.
25. `cat /etc/os-release`: Shows the operating system.
26. `cat /etc/passwd`: To show list of owners.
27. `useradd user_name`: To create a new user.
28. `sudo useradd --help`: To see the arguments.
29. `sudo sudouser user_name`: To see the user directory.
30. `sudo chown -R devops:devops devops-b2`: To change the ownership and assigning a group.
31. `groups`: In which group I belong to.
32. `sudo chmod -x devops-b2/`: To permission the user to execute.
33. `sudo chmod u+x devops-b2/`: To permission the user to execute.
34. `sudo chmod -rwx intro.txt`: For permission a user in read, write, and executable.
35. `sudo chmod u+r intro.txt`: Permission a user only read permission.
36. `sudo chmod u+rw intro.txt`: Permission a user only read and write permission.
37. `sudo chmod 740 intro.txt`: If want to owner all permission, group can be only read permission and others have no permission.
38. `usermod --help`.
39. `which $SHELLL`: To see the default shell.
40. `sudo usermod -s /bin/bash devops`: To change the user shell.
41. `sudo userdel john`: To delete a user named like named john