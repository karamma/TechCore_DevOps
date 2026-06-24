## Задача (Установка): Установить Docker Desktop (для Win/Mac) или Docker Engine (для Linux).

docker --version 
![docker --version](../screenshots/docker-version.png)

docker info

**Вывод:**
```
Client: Docker Engine - Community
 Version:    28.5.1
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.29.1
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.40.0
    Path:     /usr/libexec/docker/cli-plugins/docker-compose

Server:
 Containers: 5
  Running: 0
  Paused: 0
  Stopped: 5
 Images: 12
 Server Version: 28.5.1
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: systemd
 Cgroup Version: 2
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local splunk syslog
 CDI spec directories:
  /etc/cdi
  /var/run/cdi
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: b98a3aace656320842a23f4a392a33f46af97866
 runc version: v1.3.0-0-g4ca628d1
 init version: de40ad0
 Security Options:
  apparmor
  seccomp
   Profile: builtin
  cgroupns
 Kernel Version: 6.8.0-124-generic
 Operating System: Ubuntu 24.04.4 LTS
 OSType: linux
 Architecture: x86_64
 CPUs: 16
 Total Memory: 15.32GiB
 Name: timur-Katana-GF76-11UE
 ID: 2c67fe5b-5dac-4902-a03e-046afb776d09
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Username: karamma
 Experimental: false
 Insecure Registries:
  ::1/128
  127.0.0.0/8
 Live Restore Enabled: false

```

