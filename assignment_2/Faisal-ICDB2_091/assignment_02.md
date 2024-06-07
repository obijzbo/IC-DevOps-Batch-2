## File System Navigation

# Verify the current directory is home

```bash
pwd
```
![img1](/assignment02_images/A2S1.png)

# List all contents of the home direcotry

```bash
ls -la
```
![img1](/assignment02_images/A2S2.png)

# There is a shorter command (an alias) that works the same way. 

```bash
ll
alias ll
```
![img1](/assignment02_images/A2S3.png)

# Change directory to /var/log and verify

```bash
cd /var/log && pwd
```
![img1](/assignment02_images/A2S3.png)

# List all contents of the /var/log direcotry 
# We might not get all contents in a single window so let's view first and last 10 contents

```bash
ls -la|head
ls -la|tail
```
![img1](/assignment02_images/A2S4.png)

# Get the location of bash using which

```bash
which bash
```
![img1](/assignment02_images/A2S5.png)

# Get the current shell

```bash
echo $SHELL
```

![img1](/assignment02_images/A2S6.png)

## File and Directory Operations

# Verify urrent directory & create directory linux_fundamentals inside home directory

```bash
pwd
mkdir linux_fundamentals
ls -l
```
![img1](/assignment02_images/A2S7.png)

# Change directory to linux_fundamentals and create subdirectory scripts

```bash
cd linux_fundamentals && pwd
mkdir scripts
ls -l
```
![img1](/assignment02_images/A2S8.png)

# Create empty file example.txt inside linux_fundamentals

```bash
touch example.txt
```
![img1](/assignment02_images/A2S9.png)

# Copy example.txt file to scripts 

```bash
cp example.txt scripts/
ls -l scripts/
```
![img1](/assignment02_images/A2S10.png)

# Go back to home directory and create backup direcotry inside linux_fundamentals directory

```bash
cd
mkdir -p linux_fundamentals/backup
```

![img1](/assignment02_images/A2S11.png)
# Move example.txt file from linux_fundamentals directory to backup direcotry

```bash
mv linux_fundamentals/example.txt linux_fundamentals/backup/
ls -l linux_fundamentals/backup/example.txt 
```
![img1](/assignment02_images/A2S12.png)
## Permissions

# Change the permission of example.txt file so that owner can read and write, and group members and others can only read the file.

```bash
cd linux_fundamentals/backup/
chmod 644 example.txt 
```

# Verify the file permission we've just set.

```bash
ls -l example.txt 
```
![img1](/assignment02_images/A2S13.png)
