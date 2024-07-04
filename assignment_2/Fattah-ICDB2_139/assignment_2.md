<p align="center">
  <a href="https://example.com/">
    <img src="./Screenshots/ubuntu-logo.png" alt="Logo" width=72 height=72>
  </a>

  <h3 align="center">Linux Fundamentals</h3>

  <p align="center">
   The fundamentals of linux through practical examples
 </p>

 <p align="center"><i> Crafted by <a href="https://github.com/AbuFattah">Abu Fattah Hossain</a></i></p>

## Table of contents

- [File System Navigation](#file-system-navigation)
- [File and Directory Operations](#inspection-and-comparison)
- [File Modification](#branching-and-merging)
- [Ownership](#Ownership)
- [User add/modify](#User-add/modify)
- [Hard/Soft Link](#Hard/Soft-Link)
- [Package installation](#Package-installation)

## File System Navigation :

#### 1. List the contents of the home directory.

```bash
ls -la ~
```

The '~' tilde symbol is a shorthand for the home directory. Doing `ls -la ~` will list all the contnents of the home directory including hidden files.

- `-l` flag shows detailed information of files and directories
- `-a` flag shows all files and directories including hidden files

![Image](./screenshots/list-home-files.png)

#### 2. Change the current directory to /var/log and list its contents.

```bash
cd /var/log
ls -l
```

`cd <directory_path>` command is used to change directory.

![Image](./screenshots/change-directory.png)

#### 3. Find and display the path to the bash executable using the which command.

```bash
which bash
```

`which <command name>` command is used to display path to the executable file.

![Image](./screenshots/which.png)

#### 4. Find current shell

```bash
echo $SHELL
```

`echo` command prints a string and `$SHELL` is a global environment variable which stores the current shell that is being by the user. Therefore, `echo $SHELL` displays the current shell.

![Image](./screenshots/shell.png)

## File and Directory Operations :

#### 1. Create a directory named linux_fundamentals in your home directory.

```bash
cd ~
mkdir linux_fundamentals
```

`mkdir <directory name>` command is used to create a directory .

![Image](./screenshots/create-directory.png)

#### 2. Inside linux_fundamentals, create a subdirectory named scripts.

```bash
mkdir linux_fundamentals/scripts
```

`mkdir linux_fundamentals/<new directory>` this command will create a new directory inside linux_fundamentals

![Image](./screenshots/script-directory.png)

#### 3. Create an empty file named example.txt inside the linux_fundamentals directory.

```bash
touch example.txt
```

`touch <filename>` command is used to create an empty file.

![Image](./screenshots/empty-file.png)

#### 4. Copy example.txt to the scripts directory.

```bash
cp example.txt scripts
```

`cp <sourcefile_path> <target_directory>` command is used to copy file from source path to target directory. Both source path and target directory can be both relative or absolute.

![Image](./screenshots/cp-example.png)

#### 5. Move example.txt from linux_fundamentals to linux_fundamentals/backup.

```bash
mkdir backup && mv example.txt backup/
```

- First create a directory named backup and then use `mv <source_path> <target_directory>` command to move example.txt file to backup directory.

- The `&&` operator can be used to execute to commands sequentially.

![Image](./screenshots/mv-example.png)

## Permissions

#### 1. Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.

```bash
# Using numeric representation
chmod 644 example.txt

# Without symbolic representation
chmod u=rw,g=r,o=r example.txt
ls -l
```

- `chmod` command is used to change file permissions.
- 644: This is the numeric representation of the permissions:
  - 6: Read (4) + Write (2) for the owner.
  - 4: Read-only for the group.
  - 4: Read-only for others.
- Symbolic representation
  - `u=rw` sets read and write permission for user
  - `g=r` , `o=r` sets read permission for group and others respectively.

![Image](./screenshots/chmod-example.png)

#### 2. Verify the permission changes using ls -l

```bash
ls -l linux_fundamentals/scripts/example.txt
```

When we do `ls -l` we can see that user has read and write (rw-) permission, group and others have read (r--) permission.

![Image](./screenshots/verify-permission.png)

## File Modification

#### 1. Create a file named example.txt in your home directory.

```bash
touch ~/example.txt
```

`touch` command is used to create an example.txt file in home directory

![Image](./screenshots/create-exmple.png)

#### 2. Change the owner of example.txt to a user named student

```bash
# Create the user: student
sudo useradd student

# Change owner to student
sudo chown student ~/example.txt

```

- `useradd <username>` command is used to add a user.
- `chown <username> <filename>` command is used to change ownership of a file.

![Image](./screenshots/chown-student.png)

#### 3. Change the group of example.txt to a group named students.

```bash
# Create the group : students
sudo groupadd students

# Change group to students
sudo chown :students example.txt
```

- This command needs sudo privilege.
- `groupadd <group_name>` command is used to create a group.
- `chown :<group_name> <filename>` command is used to change group of a file.

![Image](./screenshots/chown-group.png)

#### 4. Verify the changes using appropriate commands.

```bash
ls -l ~/example.txt
```

`ls -l <file_path>` shows the permissions and ownership of a file/directory.

![Image](./screenshots/verify-chown.png)

## Ownership

#### 1. Create a directory named project in your home directory.

```bash
mkdir ~/project
```

`mkdir ~/<diretory_name>` creates a directory in the home directory.

![Image](./screenshots/mk-project.png)

#### 2. Create a file named report.txt inside the project directory.

```bash
touch ~/project/report.txt
```

`touch ~/project/report.txt` command creates report.txt file inside project directory.

![Image](./screenshots/mkrpt.png)

#### 3. Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.

```bash
chmod 644  ~/project/report.txt
```

- `chmod` command is used to change file permissions.
- 644: This is the numeric representation of the permissions:
  - 6: Read (4) + Write (2) for the owner.
  - 4: Read-only for the group.
  - 4: Read-only for others.

![Image](./screenshots/chmod-rptx.png)

#### 4. Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others

```bash
chmod 755  ~/project
```

- `chmod` command is used to change file permissions.
- 755: This is the numeric representation of the permissions:
  - 7: Read (4) + Write (2) + Execute(1) for the owner.
  - 5: Read (4) + Execute(1) for the group.
  - 5: Read (4) + Execute(1) for others.

![Image](./screenshots/chmod-proj.png)

#### 5. Verify the changes using appropriate commands.

```bash
ls -l ~/project/report.txt
ls -l ~
```

`ls -l <file_path>` shows the permissions and ownership of a file/directory.

![Image](./screenshots/verify-changes.png)

## User add/modify

#### 1. Create a new user named developer.

```bash
sudo useradd developer
```

`useradd <username>` command is used to add a user.

![Image](./screenshots/user-add.png)

#### 2. Set the home directory of the user developer to /home/developer_home.

```bash
# create /home/developer_home directory
sudo mkdir /home/developer_home

# modifying home directory for user: developer
sudo usermod -d /home/developer_home developer
```

`usermod` command is used to modify user's attributes. Such as, `sudo usermod -d /home/developer_home developer` changes directory to /home/developer_home. 

![Image](./screenshots/set-home.png)

#### 3. Assign the shell /bin/sh to the user developer.

```bash
sudo usermod -s /bin/sh developer
```

In `sudo usermod -s /bin/sh developer` command, the -s flag along with shell directory is passed to assign a shell.

![Image](./screenshots/shell-assign.png)

#### 4. Verify the new user's information.

```bash
# View user info
tail /etc/passwd
```

The /etc/passwd file contains user information, by using the `tail` we can view the /etc/passwd fille from last.

![Image](./screenshots/verify-user.png
)

#### 5. Change the username of the user developer to devuser.

```bash
sudo usermod -l devuser developer
```

In `usermod -l <new_username> <current_username>` command, the -l flag is used to update the user name.

![Image](./screenshots/change-username.png)

#### 6. Add devuser to a group named devgroup.

```bash
# Create a group
sudo addgroup devgroup
# Add devuser to devgroup
sudo usermod -aG devgroup devuser
```

The -aG flag is used to add a user to a group.

![Image](./screenshots/devgroup.png)

#### 7. Set the password of devuser to devpass. ( hint: use passwd command. Run passwd --help to see available options)

```bash
sudo passwd devuser
```

`passwd <username>` command is used to set password of the specified user.

![Image](./screenshots/devpass.png)

#### 8. Verify the changes made to the user.

```bash
ls -l ~/project/report.txt
ls -l ~
```

`ls -l <file_path>` shows the permissions and ownership of a file.

![Image](./screenshots/verify-changesss.png)
