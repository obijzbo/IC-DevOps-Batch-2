# File System Navigation

- List the contents of the home directory.
```
ls -a ~
```
<img src="screenshots/contents_of_home.png">

- Change the current directory to /var/log and list its contents.
```
cd /var/log \
ls -a
```
<img src="screenshots/var_log.png">

- Find and display the path to the bash executable using the which command. Find current shell
```
which bash
echo $SHELL
```
<img src="screenshots/bash_dir_and_current_shell.png">