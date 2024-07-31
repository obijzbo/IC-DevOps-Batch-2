<p align="center">
  <a href="https://example.com/">
    <img src="screenshots/linux-filesystem.png" alt="Logo" width=400 height=200>
  </a>

  <h3 align="center">Linux Fundamental</h3>

</p>



# Table of Content

- [File System Navigation](#file-system-navigation)
- [File and Directory Operations](#file-and-directory-operations)
- [Permissions](#permissions)


## File System Navigation

##### 1. List the contents of the home directory:

To view the contents of the home directory "ls" command can be used while user in home directory, otherwise "ls ~"

**_Example :_**

```bash
    ls ~
```
![ls Command](./screenshots/homed.png)

**Explanation:** The `-al` flag reveals all contents within the current directory.

##### 2. Change the current directory to `/var/log` and list its contents.

Initiate the directory switch using `cd`, followed by listing its contents with `ls`:

**_Example :_**

```bash
    cd /var/log
    ls
```

![cd Command](./screenshots/varlog.png)

**Explanation:** `cd` alters the current directory to `/var/log`, while `ls` displays its contents.

##### 3. Find and display the path to the bash executable using the `which` command:

**_Example :_**

```bash
    which bash
```

![cd Command](./screenshots/bash.png)
**Explanation:** The `which` command divulges the full path of shell commands, such as `bash`.

##### 4. Find the current shell:

**_Example :_**

```bash
    echo $SHELL
```

![cd Command](./screenshots/shell.png)
**Explanation:** The `$SHELL` environment variable holds the path to the current shell.




## File and Directory Operations

#### 1. Create a directory named `linux_fundamentals` in your home directory:

**_Example :_**

```bash
    mkdir ~/linux_fundamentals
    or 
    mkdir linux_fundamentals    (while in home dir)
```

![cd Command](./screenshots/funda.png)
**Explanation :** mkdir creates a new directory. `~ ` indicates the home directory.

#### 2. Inside linux_fundamentals, create a subdirectory named scripts:

```bash
    mkdir ~/linux_fundamentals/scripts
    or 
    cd linux_fundamentals
    mkdir scripts
```

![cd Command](./screenshots/sibdir.png)

**Explanation :** This creates the scripts directory inside linux_fundamentals.

#### 3. Create an empty file named example.txt inside the linux_fundamentals directory:

**_Example :_**

```bash
    touch ~/linux_fundamentals/example.txt
```

![cd Command](./screenshots/touch.png)
**Explanation:** touch creates an empty file if it doesn't already exist.

#### 4. Copy `example.txt` to the `scripts` directory:

**_Example :_**

```bash
cp example.txt scripts

```

![cd Command](./screenshots/cp.png)
**Explanation:** `cp` copies files. Here, it copies `example.txt` to the scripts directory.

#### 5. Move `example.txt` from `linux_fundamentals` to `linux_fundamentals/backup`:

First, create the `backup` directory:

**_Example :_**

```bash
#Make dir backup
    mkdir ~/linux_fundamentals/backup
#Then move file 
     mv ~/linux_fundamentals/example.txt ~/linux_fundamentals/backup/
```



![cd Command](./screenshots/backup.png)

**Explanation:** `mv` moves files. This moves `example.txt` to the backup directory.

## Permissions

#### 1. Change the permissions of example.txt to read and write for the owner, and read-only for the group and others:

**_Example :_**

```bash
    chmod 644 example.txt
```


**Explanation:** `chmod 644` modifies file permissions to `rw-r--r--`. This configuration grants the owner read and write privileges (6), and restricts the group and others to read-only access (4).

#### 2. Verify the permission changes using `ls -l`:

**_Example :_**

```bash
    ls -l example.txt
```

![cd Command](./screenshots/perm.png)
**Explanation:** `ls -l` presents detailed file information, inclusive of its permissions.


