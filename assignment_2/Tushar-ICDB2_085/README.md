# Linux Fundamentals - Assigment

- [File System Navigation](#file-system-navigation)
- [File and Directory Operations](#file-and-directory-operations)
- [Permissions](#permissions)

## File System Navigation

##### 1. List the contents of the home directory:

To list the contents of the home directory, use the `ls` command:

**_Example :_**

```bash
    ls ~
```

![ls Command](./screenshots/ls.png)

**Explanation:** The ~ symbol represents the home directory of the current user.

##### 2. Change the current directory to `/var/log` and list its contents.

First, change the directory using `cd`, then list the contents using `ls` :

**_Example :_**

```bash
    cd /var/log
    ls
```

![cd Command](./screenshots/cd.png)

**Explanation:** `cd` changes the current directory to `/var/log`, and `ls` lists the contents of this directory.

##### 3. Find and display the path to the bash executable using the `which` command:

**_Example :_**

```bash
    which bash
```

![cd Command](./screenshots/bash.png)
**Explanation:** The `which` command shows the full path of shell commands, in this case, `bash`.

##### 4. Find the current shell:

**_Example :_**

```bash
    echo $SHELL
```

![cd Command](./screenshots/shell.png)
**Explanation:** The `$SHELL` environment variable contains the path to the current shell.
