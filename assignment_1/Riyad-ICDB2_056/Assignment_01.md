# Git Commands Scribe Sheet
## Basic Git Command :

### 1. `git mkdir`
**Description**: Create a folder/repository.
#### **Example**:
```bash
git mkdir my-assignment
```
### 2. `cd`
**Description**: change directory or enter the that repository.
#### **Example**:
```bash
cd my-assignment
```
### 3. `ls`
**Description**: check the the elements of that repository.
#### **Example**:
```bash
ls
```
### 4. `ls -a`
**Description**: check all the elements With hideen file of that repository.
#### **Example**:
```bash
ls -a
```
### 5. `git init`
**Description**: Initialize git repository.
#### **Example**:
```bash
git init
```

### 6. `git status`
**Description**: show's the working tree status.
#### **Example**:
```bash
git status
```
### Screenshots :
![Screenshot of git init](https://github.com/riyad20038/IC-DevOps-Batch-2/blob/branch1/assignment_1/Riyad-ICDB2_056/Screenshots/1.create%20foder%20%26%20init.png)

### 7. `touch`
**Description**: create new file.
#### **Example**:
```bash
touch day1.txt
```
### 8. `git add`
**Description**: Staging the file.
### **Example**:
```bash
git add day1.txt
```

### 9. `git add`
**Description**: Staging the file.
- `git add .` [For all file staging in that folder]
- `git add -A` [For staging all file in the repository]
- `git add *.txt` [For staging specific file like .txt ] 
### **Example**:
```bash
git add day1.txt
```
#### Screenshots:
![create new file & staging](https://raw.githubusercontent.com/riyad20038/IC-DevOps-Batch-2/refs/heads/branch1/assignment_1/Riyad-ICDB2_056/Screenshots/2.add%20new%20file%20%26%20staging.png)


### 10. `git rm --cached`
**Description**: For unstaging the file.
### **Example**:
```bash
git rm --cached day1.txt
```
#### Screenshots:
![Unstaging the file](https://raw.githubusercontent.com/riyad20038/IC-DevOps-Batch-2/refs/heads/branch1/assignment_1/Riyad-ICDB2_056/Screenshots/3.unstaging%20file.png)


### 11. `git commit -m "msg here`
**Description**: committed to local repository.
### **Example**:
```bash
git commit -m "my name added"
```
### 12. `git log`
**Description**: check commit hiatory.
### **Example**:
```bash
git log
```
#### Screenshots:
![git commit & check history](https://github.com/riyad20038/IC-DevOps-Batch-2/blob/branch1/assignment_1/Riyad-ICDB2_056/Screenshots/4.git%20commit%20%26%20check%20history.png)
