## Assignment 02: File System Navigation and Operations in Linux

### Navigation Links

- [File System Navigation](#file-system-navigation)
- [File and Directory Operations](#file-and-directory-operations)
- [Permissions](#permissions)
- [File Modification](#file-modification)
- [Ownership](#ownership)
- [User add/modify](#user-addmodify)
- [Hard/Soft Link](#hardsoft-link)
- [Package Installation](#package-installation)

---

### File System Navigation

1. **List the contents of the home directory.**

   - **Command**: `ls ~`
   - **Description**: Lists the files and directories in the home directory.
   - **Example**:
     ```sh
     ls ~
     ```
   - **Screenshot**: [Screenshot](./screenshot/filesystem-navigation/contentOfhome.JPG)

2. **Change the current directory to /var/log and list its contents.**

   - **Command**: `cd /var/log && ls`
   - **Description**: Changes the current directory to `/var/log` and lists its contents.
   - **Example**:
     ```sh
     cd /var/log && ls
     ```
   - **Screenshot**: [Screenshot](./screenshot/filesystem-navigation/contentOfVar-log.JPG)

3. **Find and display the path to the bash executable using the which command.**

   - **Command**: `which bash`
   - **Description**: Finds the location of the `bash` executable.
   - **Example**:
     ```sh
     which bash
     ```
   - **Screenshot**: [Screenshot](./screenshot/filesystem-navigation/bash-executable.JPG)

4. **Find current shell.**
   - **Command**: `echo $SHELL`
   - **Description**: Displays the current shell being used.
   - **Example**:
     ```sh
     echo $SHELL
     ```
   - **Screenshot**: [Screenshot](./screenshot/filesystem-navigation/carent-shell.JPG)

---

### File and Directory Operations

5. **Create a directory named linux_fundamentals in your home directory.**

   - **Command**: `mkdir ~/linux_fundamentals`
   - **Description**: Creates a directory named `linux_fundamentals` in the home directory.
   - **Example**:
     ```sh
     mkdir ~/linux_fundamentals
     ```
   - **Screenshot**: [Screenshot](./screenshot/File-and-Directory-Operations/make-linux&scripts.JPG)

6. **Inside linux_fundamentals, create a subdirectory named scripts.**

   - **Command**: `mkdir ~/linux_fundamentals/scripts`
   - **Description**: Creates a subdirectory named `scripts` inside `linux_fundamentals`.
   - **Example**:
     ```sh
     mkdir ~/linux_fundamentals/scripts
     ```
   - **Screenshot**: [Screenshot](./screenshot/File-and-Directory-Operations/make-linux&scripts.JPG)

7. **Create an empty file named example.txt inside the linux_fundamentals directory.**

   - **Command**: `touch ~/linux_fundamentals/example.txt`
   - **Description**: Creates an empty file named `example.txt`.
   - **Example**:
     ```sh
     touch ~/linux_fundamentals/example.txt
     ```
   - **Screenshot**: [Screenshot](./screenshot/File-and-Directory-Operations/create-example-txt.JPG)

8. **Copy example.txt to the scripts directory.**

   - **Command**: `cp ~/linux_fundamentals/example.txt ~/linux_fundamentals/scripts/`
   - **Description**: Copies `example.txt` to the `scripts` directory.
   - **Example**:
     ```sh
     cp ~/linux_fundamentals/example.txt ~/linux_fundamentals/scripts/
     ```
   - **Screenshot**: [Screenshot](./screenshot/File-and-Directory-Operations/copy-example-to-scripts.JPG)

9. **Move example.txt from linux_fundamentals to linux_fundamentals/backup.**
   - **Command**: `mkdir ~/linux_fundamentals/backup && mv ~/linux_fundamentals/example.txt ~/linux_fundamentals/backup/`
   - **Description**: Moves `example.txt` to the `backup` directory.
   - **Example**:
     ```sh
     mkdir ~/linux_fundamentals/backup && mv ~/linux_fundamentals/example.txt ~/linux_fundamentals/backup/
     ```
   - **Screenshot**: [Screenshot](./screenshot/File-and-Directory-Operations/move-example-to-backup.JPG)

---

### Permissions

10. **Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.**

    - **Command**: `chmod 644 ~/linux_fundamentals/backup/example.txt`
    - **Description**: Changes the permissions of `example.txt` to `rw-r--r--`.
    - **Example**:
      ```sh
      chmod 644 ~/linux_fundamentals/backup/example.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/File-and-Directory-Operations/change-permisson-verify-permission.JPG)

11. **Verify the permission changes using ls -l.**
    - **Command**: `ls -l ~/linux_fundamentals/backup/example.txt`
    - **Description**: Lists detailed information about `example.txt`, including permissions.
    - **Example**:
      ```sh
      ls -l ~/linux_fundamentals/backup/example.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/File-and-Directory-Operations/change-permisson-verify-permission.JPG)

---

### File Modification

12. **Create a file named example.txt in your home directory.**

    - **Command**: `touch ~/example.txt`
    - **Description**: Creates an empty file named `example.txt` in the home directory.
    - **Example**:
      ```sh
      touch ~/example.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/File-Modification/create-example-to-home-irectory.JPG)

13. **Change the owner of example.txt to a user named student.**

    - **Command**: `sudo chown student ~/example.txt`
    - **Description**: Changes the owner of `example.txt` to `student`.
    - **Example**:
      ```sh
      sudo chown student ~/example.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/File-Modification/owership-change-owner-group-example.JPG)

14. **Change the group of example.txt to a group named students.**

    - **Command**: `sudo chown :students ~/example.txt`
    - **Description**: Changes the group of `example.txt` to `students`.
    - **Example**:
      ```sh
      sudo chown :students ~/example.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/File-Modification/owership-change-owner-group-example.JPG)

15. **Verify the changes using appropriate commands.**
    - **Command**: `ls -l ~/example.txt`
    - **Description**: Lists detailed information about `example.txt`, including owner and group.
    - **Example**:
      ```sh
      ls -l ~/example.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/File-Modification/owership-change-owner-group-example.JPG)

---

### Ownership

16. **Create a directory named project in your home directory.**

    - **Command**: `mkdir ~/project`
    - **Description**: Creates a directory named `project` in the home directory.
    - **Example**:
      ```sh
      mkdir ~/project
      ```
    - **Screenshot**: [Screenshot](./screenshot/Ownership/create-project-report.JPG)

17. **Create a file named report.txt inside the project directory.**

    - **Command**: `touch ~/project/report.txt`
    - **Description**: Creates an empty file named `report.txt` inside the `project` directory.
    - **Example**:
      ```sh
      touch ~/project/report.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/Ownership/create-project-report.JPG)

18. **Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.**

    - **Command**: `chmod 644 ~/project/report.txt`
    - **Description**: Changes the permissions of `report.txt` to `rw-r--r--`.
    - **Example**:
      ```sh
      chmod 644 ~/project/report.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/Ownership/permission-report.JPG)

19. **Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others.**

    - **Command**: `chmod 755 ~/project`
    - **Description**: Changes the permissions of `project` directory to `rwxr-xr-x`.
    - **Example**:
      ```sh
      chmod 755 ~/project
      ```
    - **Screenshot**: [Screenshot](./screenshot/Ownership/permission-project.JPG)

20. **Verify the changes using appropriate commands.**
    - **Command**: `ls -ld ~/project && ls -l ~/project/report.txt`
    - **Description**: Lists detailed information about `project` directory and `report.txt`.
    - **Example**:
      ```sh
      ls -ld ~/project && ls -l ~/project/report.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/Ownership/permission-project.JPG)

---

### User add/modify

21. **Create a new user named developer.**

    - **Command**: `sudo adduser developer`
    - **Description**: Creates a new user named `developer`.
    - **Example**:
      ```sh
      sudo adduser developer
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/create-user-shell-home-verify.JPG)

22. **Set the home directory of the user developer to /home/developer_home.**

    - **Command**: `sudo usermod -d /home/developer_home developer`
    - **Description**: Sets the home directory of `developer` to `/home/developer_home`.
    - **Example**:
      ```sh
      sudo usermod -d /home/developer_home developer
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/create-user-shell-home-verify.JPG)

23. **Assign the shell /bin/sh to the user developer.**

    - **Command**: `sudo usermod -s /bin/sh developer`
    - **Description**: Sets the shell of `developer` to `/bin/sh`.
    - **Example**:
      ```sh
      sudo usermod -s /bin/sh developer
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/create-user-shell-home-verify.JPG)

24. **Verify the new user's information.**

    - **Command**: `getent passwd developer`
    - **Description**: Displays information about the `developer` user.
    - **Example**:
      ```sh
      getent passwd developer
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/veryfy.JPG)

25. **Change the username of the user developer to devuser.**

    - **Command**: `sudo usermod -l devuser developer`
    - **Description**: Changes the username of `developer` to `devuser`.
    - **Example**:
      ```sh
      sudo usermod -l devuser developer
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/update-user-name.JPG)

26. **Add devuser to a group named devgroup.**

    - **Command**: `sudo usermod -aG devgroup devuser`
    - **Description**: Adds `devuser` to the `devgroup`.
    - **Example**:
      ```sh
      sudo usermod -aG devgroup devuser
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/change-group.JPG)

27. **Set the password of devuser to devpass.**

    - **Command**: `sudo passwd devuser`
    - **Description**: Sets the password for `devuser`.
    - **Example**:
      ```sh
      sudo passwd devuser
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/update-passw.JPG)

28. **Verify the changes made to the user.**
    - **Command**: `getent passwd devuser && getent group devgroup`
    - **Description**: Displays information about `devuser` and `devgroup`.
    - **Example**:
      ```sh
      getent passwd devuser && getent group devgroup
      ```
    - **Screenshot**: [Screenshot](./screenshot/User-addmodify/veryfy.JPG)

---

### Hard/Soft Link

29. **Create a file named original.txt in your home directory.**

    - **Command**: `touch ~/original.txt`
    - **Description**: Creates an empty file named `original.txt` in the home directory.
    - **Example**:
      ```sh
      touch ~/original.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-original-solftlink-verify.JPG)

30. **Create a symbolic link named softlink.txt pointing to original.txt.**

    - **Command**: `ln -s ~/original.txt ~/softlink.txt`
    - **Description**: Creates a symbolic link `softlink.txt` pointing to `original.txt`.
    - **Example**:
      ```sh
      ln -s ~/original.txt ~/softlink.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-original-solftlink-verify.JPG)

31. **Verify the symbolic link and ensure it points to the correct file.**

    - **Command**: `ls -l ~/softlink.txt`
    - **Description**: Lists detailed information about `softlink.txt`.
    - **Example**:
      ```sh
      ls -l ~/softlink.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-original-solftlink-verify.JPG)

32. **Delete the original file original.txt and observe the status of the symbolic link.**

    - **Command**: `rm ~/original.txt && ls -l ~/softlink.txt`
    - **Description**: Deletes `original.txt` and lists detailed information about `softlink.txt`.
    - **Example**:
      ```sh
      rm ~/original.txt && ls -l ~/softlink.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/remove-softlink.JPG)

33. **Create a file named datafile.txt in your home directory.**

    - **Command**: `touch ~/datafile.txt`
    - **Description**: Creates an empty file named `datafile.txt` in the home directory.
    - **Example**:
      ```sh
      touch ~/datafile.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-datafile-hardlink-inode-delete-datafile.JPG)

34. **Create a hard link named hardlink.txt pointing to datafile.txt.**

    - **Command**: `ln ~/datafile.txt ~/hardlink.txt`
    - **Description**: Creates a hard link `hardlink.txt` pointing to `datafile.txt`.
    - **Example**:
      ```sh
      ln ~/datafile.txt ~/hardlink.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-datafile-hardlink-inode-delete-datafile.JPG)

35. **Verify the hard link and ensure it correctly points to the file.**

    - **Command**: `ls -l ~/hardlink.txt`
    - **Description**: Lists detailed information about `hardlink.txt`.
    - **Example**:
      ```sh
      ls -l ~/hardlink.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-datafile-hardlink-inode-delete-datafile.JPG)

36. **Check the inode of both datafile.txt and hardlink.txt.**

    - **Command**: `ls -i ~/datafile.txt ~/hardlink.txt`
    - **Description**: Lists the inode numbers of `datafile.txt` and `hardlink.txt`.
    - **Example**:
      ```sh
      ls -i ~/datafile.txt ~/hardlink.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-datafile-hardlink-inode-delete-datafile.JPG)

37. **Delete the original file datafile.txt and observe the status of the hard link.**

    - **Command**: `rm ~/datafile.txt && ls -l ~/hardlink.txt`
    - **Description**: Deletes `datafile.txt` and lists detailed information about `hardlink.txt`.
    - **Example**:
      ```sh
      rm ~/datafile.txt && ls -l ~/hardlink.txt
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/create-datafile-hardlink-inode-delete-datafile.JPG)

38. **Find all .txt files in your home directory.**
    - **Command**: `find ~ -name "*.txt"`
    - **Description**: Finds all `.txt` files in the home directory.
    - **Example**:
      ```sh
      find ~ -name "*.txt"
      ```
    - **Screenshot**: [Screenshot](./screenshot/HardSoft-Link/find-txt.JPG)

---

### Package Installation

39. **Update repo cache using apt/apt-get.**

    - **Command**: `sudo apt update`
    - **Description**: Updates the package repository cache.
    - **Example**:
      ```sh
      sudo apt update
      ```
    - **Screenshot**: [Screenshot](./screenshot/Package-installation/upate-cache.JPG)

40. **Install a package named tree.**

    - **Command**: `sudo apt install tree`
    - **Description**: Installs the `tree` package.
    - **Example**:
      ```sh
      sudo apt install tree
      ```
    - **Screenshot**: [Screenshot](./screenshot/Package-installation/install-tree.JPG)

41. **Install gcloud CLI tool using apt (Follow instructions from [here](https://cloud.google.com/sdk/docs/install#deb)).**
    - **Command**: Follow the instructions at the provided link.
    - **Description**: Installs the `gcloud` CLI tool using `apt`.
    - **Example**:
      ```sh
      # Follow the instructions at the provided link
      ```
    - **Screenshot**: [Screenshot](./screenshot/Package-installation/gclou.JPG)

---
