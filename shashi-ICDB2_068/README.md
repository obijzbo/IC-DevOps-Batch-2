
--------------------------------------------------------
GIT COMMANDS SCRIBE SHEET
--------------------------------------------------------

Date: _________________________
Time: _________________________

Participant(s): _____________________________________

--------------------------------------------------------
|  COMMAND          | DESCRIPTION                       |
--------------------------------------------------------
| git init          | Initialize a new Git repository  |
| git clone <URL>   | Clone a repository from a URL     |
| git status        | Show the status of the repository|
| git add <file(s)> | Add file(s) to staging area      |
| git commit -m "<message>" | Commit changes with a message|
| git push          | Push changes to remote repository|
| git pull          | Fetch and merge changes from remote repository|
| git branch        | List branches                     |
| git checkout <branch> | Switch to a different branch |
| git merge <branch> | Merge changes from another branch |
| git log           | Show commit history               |
| git diff          | Show changes between commits      |
| git reset         | Reset current HEAD to the specified state |
| git revert <commit> | Revert a commit                 |
| git stash         | Stash changes in a dirty working directory |
| git cherry-pick <commit> | Apply the changes introduced by some existing commits |
| git checkout -b <branch_name> | create a branch and checkout to it
| git commit -m "initial commit for PR" | commit for PR 

--------------------------------------------------------
Notes:
- Replace <...> with appropriate values.
- Use `-h` or `--help` with commands for more options.
- Refer to Git documentation for detailed usage.
- Customize this sheet as needed for your workflow.
--------------------------------------------------------

Next Steps / Action Items:
- Practice using Git commands regularly.
- Refer to online tutorials or documentation for further learning.
- Share this scribe sheet with team members for reference.
- Provide feedback for improving this scribe sheet.

--------------------------------------------------------
Participant(s) Signature(s):

1. shashi kanta das_______________Date: ________________

# SAIO-Ubuntu18.04

This process demonstrates how to deploy swift all-in-one **(SAIO)** in a Ubuntu 18.04 server. Deploying SAIO can be castigating and time-consuming. This thread shows us how to deploy a minimal SAIO. To continue with this article we need a VM. You can check out my [KVM-Virtualization-Ubuntu-20.04](https://github.com/rizwan192/KVM-Virtualization-Ubuntu-20.04) to install VM on your host machine. Our host machine is running Ubuntu-20.04 but the process is the same for Ubuntu-18.04 too.

The VM we are using has the following configuration:

- Ubuntu-18.04 Server
- 2GB Ram
- 2 vCPU
- 10GB of vHD

First, we install some dependencies.

```bash
apt-get install curl gcc memcached rsync sqlite3 xfsprogs \
                    git-core libffi-dev python-setuptools \
                    liberasurecode-dev libssl-dev

apt-get install python-coverage python-dev python-nose \
                    python-xattr python-eventlet \
                    python-greenlet python-pastedeploy \
                    python-netifaces python-pip python-dnspython \
                    python-mock
```

Now we clone the swift repo from git. We will use the swift `train` version which is a stable release.

```bash
git clone https://github.com/openstack/swift.git
cd swift
git checkout stable/train
pip install -r requirements.txt
python setup.py install
cd ..
```

Now we will configure swift

```bash
mkdir -p /etc/swift
cd swift/etc
useradd swift
chown -R swift:swift /etc/swift
```

```bash
cp account-server.conf-sample /etc/swift/account-server.conf
cp container-server.conf-sample /etc/swift/container-server.conf
cp object-server.conf-sample /etc/swift/object-server.conf
cp proxy-server.conf-sample /etc/swift/proxy-server.conf
cp swift.conf-sample /etc/swift/swift.conf
cp drive-audit.conf-sample /etc/swift/drive-audit.conf
cp rsyncd.conf-sample /etc/swift/rsyncd.conf
cp internal-client.conf-sample /etc/swift/internal-client.conf
cp container-reconciler.conf-sample /etc/swift/container-reconciler.conf
cp memcache.conf-sample /etc/swift/memcache.conf

```

```bash
swift-init -h
```

If `swift-init -h` doesn't show any errors then we are on the right track

Now we will add drives to swift. First we need to add storage drives to our VM. We can check all the storage currently attached to the guest machine.

```bash
ls /sys/block
```

![img2](images/2.png)

After we can mount the storage devices with help of `virt-manager`. While adding storage devices we shutdown the VM otherwise it might show some errors.

![img1](images/1.png)

After adding the storage devices we can check our newly added storage blocks with `ls /sys/block`

![img4](images/4.png)

Now we will format the devices to `xfs`

```bash
mkfs.xfs -f -L d1 /dev/vdb
mkfs.xfs -f -L d2 /dev/vdc
mkfs.xfs -f -L d3 /dev/vdd
mkfs.xfs -f -L d4 /dev/vde
```

Now we will make our mounting points

```bash
mkdir -p /srv/node/d1
mkdir -p /srv/node/d2
mkdir -p /srv/node/d3
mkdir -p /srv/node/d4
```

Now we are just mounting our newly created `xfs` storage system to our VM

```bash
mount -t xfs -o noatime,nodiratime,logbufs=8 -L d1 /srv/node/d1
mount -t xfs -o noatime,nodiratime,logbufs=8 -L d2 /srv/node/d2
mount -t xfs -o noatime,nodiratime,logbufs=8 -L d3 /srv/node/d3
mount -t xfs -o noatime,nodiratime,logbufs=8 -L d4 /srv/node/d4
```

We will now add the user `swift` and give it permission to the nodes we just created

```bash
chown -R swift:swift /srv/node
```

So far we did everything right. But as soon as we reboot our VM we will need to manually mount those storage nodes. Now we will add a `CRON` job to mount the devices every time the device boots. So we write a simple bash script to the following directory.

```bash
cd swift/bin
sudo vim mount_devices.sh
```

In the `mount_device.sh` we need to add the following lines

```bash
#!/bin/bash
sudo mount -t xfs -o noatime,nodiratime,logbufs=8 -L d1 /srv/node/d1
sudo mount -t xfs -o noatime,nodiratime,logbufs=8 -L d2 /srv/node/d2
sudo mount -t xfs -o noatime,nodiratime,logbufs=8 -L d3 /srv/node/d3
sudo mount -t xfs -o noatime,nodiratime,logbufs=8 -L d4 /srv/node/d4
```

We will save it by `:wq`. Now we will add the bash script to `CRON` and add the following line

```bash
crontab -e
@reboot sh swift/bin/mount_devices.sh
```

![img6](images/6.png)

Now we will create ring files

```bash
cd /etc/swift
swift-ring-builder account.builder create 3 3 1
swift-ring-builder container.builder create 3 3 1
swift-ring-builder object.builder create 3 3 1
```

```bash
swift-ring-builder account.builder add r1z1-127.0.0.1:6002/d1 100
swift-ring-builder container.builder add r1z1-127.0.0.1:6001/d1 100
swift-ring-builder object.builder add r1z1-127.0.0.1:6000/d1 100

swift-ring-builder account.builder add r1z1-127.0.0.1:6002/d2 100
swift-ring-builder container.builder add r1z1-127.0.0.1:6001/d2 100
swift-ring-builder object.builder add r1z1-127.0.0.1:6000/d2 100

swift-ring-builder account.builder add r1z1-127.0.0.1:6002/d3 100
swift-ring-builder container.builder add r1z1-127.0.0.1:6001/d3 100
swift-ring-builder object.builder add r1z1-127.0.0.1:6000/d3 100

swift-ring-builder account.builder add r1z1-127.0.0.1:6002/d4 100
swift-ring-builder container.builder add r1z1-127.0.0.1:6001/d4 100
swift-ring-builder object.builder add r1z1-127.0.0.1:6000/d4 100
```

Once we have created the ring files we need to `rebalance` them

```bash
swift-ring-builder account.builder rebalance
swift-ring-builder container.builder rebalance
swift-ring-builder object.builder rebalance
```

We need to start the `memcache`

```bash
service memcached start
```

Now we will configure the `swift.conf` file

```bash
cd /etc/swift
vim swift.conf
```

In the `swift.conf` we need to add the 64-bit hash string. In a real-world deployment, these will be confidential

```bash
swift_hash_path_suffix = RzUfDdu32L7J2ZBDYgsD6YI3Xie7hTVO8/oaQbpTbI8=
swift_hash_path_prefix = OZ1uQJNjJzTuFaM8X3v%fsJ1iR#F8wJjf9uhRiABevQ4
```

We will set the following in the `proxy-server.conf` which is also located at `/etc/swift`

```bash
proxy-server.conf
```

```bash
bindport:8080
bindip:127.0.0.1
```

We will change the following attributes to true inline `173` of `proxy-server.conf`

```bash
allow_account_management = true
account_autocreate = true
```

Now we will start the proxy server

```bash
swift-init proxy start
```

We can see from the output that the server started successfully.

![img7](images/7.png)

We need to change the default port numbers and bind ip in `account-server.conf, object-server.conf and container-server.conf`.The files are in `/etc/swift`

```bash
account-server--> bindport: 6002, bind_ip: 127.0.0.1
container-server--> bindport: 6001, bind_ip: 127.0.0.1
object-server-->bindport: 6000, bind_ip: 127.0.0.1
```

We will start all the main service of SAIO now

```bash
swift-init main start
```

We should see account, object, and container server running

![img8](images/8.png)

Now we will generate `AUTH_token` with the following command

```bash
curl -v -H 'X-Auth-User: admin:admin' -H 'X-Auth-Key: admin' http://localhost:8080/auth/v1.0/
```

This will give us an `auth_token` which we will use to access the different servers

![img11](images/11.png)

In our case that token is `AUTH_tkade9707a9b9c4c57a7e524db29149ed5`. We use this token to send the following curl request

```bash
curl -v -H 'X-Storage-Token: AUTH_tkade9707a9b9c4c57a7e524db29149ed5' "http://127.0.0.1:8080/v1.0/AUTH_admin"
```

We see a `204 No Content` response as our container is empty
