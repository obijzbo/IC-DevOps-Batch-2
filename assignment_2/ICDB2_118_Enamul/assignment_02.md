## File System Navigation

#### List the contents of the home directory

>_ls -la_

![](screenshots/list.png)

#### Change the current directory to `/var/log` and list its contents.

>_cd /var/log_

![](screenshots/directorychange.png)

#### Find and display the path to the `bash` executable using the `which` command.

>_which bash_

![](screenshots/which.png)

#### Find current shell

>_echo $SHELL_

>_echo $0_

![](screenshots/currentshell.png)


## File and Directory Operations

#### Create a directory named `linux_fundamentals` in your home directory.

>_sudo mkdir linux_fundamentals_

![](screenshots/linux_fundamentals.png)

#### Inside `linux_fundamentals`, create a subdirectory named `scripts`.

>_sudo mkdir scripts_

![](screenshots/subdirectory.png)

#### Create an empty file named `example.txt` inside the `linux_fundamentals` directory.

>_sudo touch example.txt_

![](screenshots/example.png)

#### Copy `example.txt` to the `scripts` directory.

>_sudo cp example.txt scripts/_

![](screenshots/copyexample.png)

#### Move `example.txt` from linux_fundamentals to `linux_fundamentals/backup`.

>_sudo mv /home/enamul/linux_fundamentals/example.txt ._

![](screenshots/moveexample.png)

## Permissions

#### Change the permissions of example.txt to read and write for the owner, and `read-only` for the group and others.

>_sudo chmod 644 example.txt_
![](screenshots/permission.png)


#### Verify the permission changes using ls -l

>_ls -la_
![](screenshots/verify.png)
