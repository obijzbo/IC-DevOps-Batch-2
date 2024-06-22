# File System Navigation

## 1. For contents of the home directory
```
ls ~
```
### Common Directories in the Home Directory:
**Desktop:** Contains files and shortcuts on your desktop.
**Documents:** Default directory for storing documents.
**Downloads:** Default directory for downloaded files.
**Music:** Default directory for music files.
**Pictures:** Default directory for image files.
**Videos:** Default directory for video files. <br>
**.config:** Stores configuration files for various applications. <br>
**.local:** Contains user-specific data and applications. <br>
**.cache:** Stores cached data for various applications.


## 2. Change the current directory to `/var/log` and list its contents

```
cd /var/log
#then
ls
```
### Common Files and Directories in /var/log:
**auth.log:** Authentication logs. <br>
**boot.log:** Boot process logs.<br>
**dmesg:** Kernel ring buffer messages.<br>
**kern.log:** Kernel logs.<br>
**syslog:** System logs.<br>
**apt/:** Logs related to package management.<br>
**apache2/:** Logs for Apache web server (if installed).<br>
**journal/:** Systemd journal logs.<br>
**ufw.log:** Uncomplicated Firewall logs.<br>
**wtmp:** Login records.<br>

## 3. Find and display the path to the `bash` executable using the `which` command.

```
which bash
```

## 4. Find current shell.

```
echo $SHELL
```


# File and Directory Operations


### 1. Create a directory named `linux_fundamentals` in your home directory.
### 2. Inside `linux_fundamentals`, create a subdirectory named `scripts`.
### 3. Create an empty file named `example.txt` inside the `linux_fundamentals` directory.

```
cd  # return to home directory
mkdir Linux_fundamentals   # create directory (1)
cd Linux_fundamentals   #inside Linux_fundamentals
mkdir scripts  #create subdirectory (2)
touch example.txt   # create an empty file (3)
```

### 4. Copy `example.txt` to the `scripts` directory.

```
# while at Linux_fundamentals directory
cp example.txt scripts
```

### 5. Move `example.txt` from linux_fundamentals to `linux_fundamentals/backup`.
```
cd ..  #back to Linux_fundamentals directory
mkdir backup  # create backup directory
mv example.txt backup  # move to backup
```

## Permissions.

### 1. Change the permissions of example.txt to read and write for the owner, and `read-only` for the group and others.

**Change the permissions of `example.txt` using the `chmod` command:**
```
chmod 644 example.txt
```
Explanation of chmod 644 example.txt:

* `6` (`read` + `write` for owner)
* `4` (`read` for group)
* `4` (`read` for others)


### 2. Verify the permission changes using ls -l
```
ls -l example.txt
```
* `rw-r--r--` indicates the permissions set for example.txt.
* The first `rw-` specifies read and write permissions for the owner (user).
* The `r--` specifies read-only permissions for the group and others.