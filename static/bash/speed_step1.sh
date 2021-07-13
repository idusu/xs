#!/bin/bash
chkconfig NetworkManager off
service NetworkManager stop
yum -y install perl
if [ $(which perl | wc -l) -ne 0 ]; then
  let i=0
  ip addr | grep "mtu 1500" | egrep -v bond | awk {'print $2'} | cut -d: -f1 | while read line; do
    if [ $(ls /etc/sysconfig/network-scripts/ | grep $line | wc -l) -ne 0 ]; then
      egrep -v 'HWADDR|NM_CONTROLLED' /etc/sysconfig/network-scripts/ifcfg-$line >/tmp/ifcfg-$line.new
      cat /tmp/ifcfg-$line.new >/etc/sysconfig/network-scripts/ifcfg-$line
      rm -f /tmp/ifcfg-$line.new
      echo HWADDR=$(ip addr | grep -A1 "mtu 1500" | grep -A1 $line | grep ether | awk {'print $2'}) >>/etc/sysconfig/network-scripts/ifcfg-$line
      echo "HWADDR=$(ip addr | grep -A1 "mtu 1500" | grep -A1 $line | grep ether | awk {'print $2'}) >> /etc/sysconfig/network-scripts/ifcfg-$line" >>/root/changenic.log
      echo "NM_CONTROLLED=no" >>/etc/sysconfig/network-scripts/ifcfg-$line
      INTF=$(echo eth$i)
      mv /etc/sysconfig/network-scripts/ifcfg-$line /etc/sysconfig/network-scripts/ifcfg-$INTF
      for h in {0..32}; do mv "/etc/sysconfig/network-scripts/ifcfg-$line-range$h" "/etc/sysconfig/network-scripts/ifcfg-$INTF-range$h"; done
      perl -pi -e "s/$line/$INTF/" /etc/sysconfig/network-scripts/ifcfg-*
      let "i=i+1"
    fi
  done
fi
#
echo "nameserver 8.8.8.8" >/etc/resolv.conf
echo "nameserver 4.2.2.2" >>/etc/resolv.conf

yum -y install krb5-workstation gcc gcc-c++ system-config-securitylevel-tui automake autoconf ntp sysstat rsync make crontab crontabs quota ping traceroute wget tcpdump scp bzip2 unzip system-config-network-tui kudzu smartmontools make which gd lsof ncurses-devel psmisc dbus-python bc net-tools irqbalance

chkconfig irqbalance on

ln -s /usr/lib64/libncurses.so.5 /usr/lib64/libtinfo.so.5

iptables -F
/etc/init.d/iptables save

service iptables stop

perl -pi -e 's/SELINUX\=enforcing/SELINUX\=disabled/' /etc/selinux/config

chkconfig ip6tables off
chkconfig iptables off
chkconfig firewalld off

rm -f kernel*.rpm

wget https://buildlogs.centos.org/c7.01.u/kernel/20150327030147/3.10.0-229.1.2.el7.x86_64/kernel-3.10.0-229.1.2.el7.x86_64.rpm
wget https://buildlogs.centos.org/c7.01.u/kernel/20150327030147/3.10.0-229.1.2.el7.x86_64/kernel-devel-3.10.0-229.1.2.el7.x86_64.rpm
wget https://buildlogs.centos.org/c7.01.u/kernel/20150327030147/3.10.0-229.1.2.el7.x86_64/kernel-headers-3.10.0-229.1.2.el7.x86_64.rpm
wget https://buildlogs.centos.org/c7.01.u/kernel/20150327030147/3.10.0-229.1.2.el7.x86_64/kernel-tools-3.10.0-229.1.2.el7.x86_64.rpm
wget https://buildlogs.centos.org/c7.01.u/kernel/20150327030147/3.10.0-229.1.2.el7.x86_64/kernel-tools-libs-3.10.0-229.1.2.el7.x86_64.rpm

rpm -Uvh --force kernel*.rpm
rm -f kernel*.rpm

wget --no-check-certificate https://downloads.hpe.com/pub/softlib2/software1/pubsw-linux/p1857046646/v122789/ssacli-2.65-7.0.x86_64.rpm
rpm -ivh ssacli-2.65-7.0.x86_64.rpm

yes | /opt/smartstorageadmin/ssacli/bin/ssacli ctrl slot=0 modify dwc=enable

ssacli ctrl slot=0 array a modify ssdsmartpath=disable

ssacli ctrl slot=0 logicaldrive 1 modify arrayaccelerator=enable

ssacli ctrl slot=0 modify cacheratio=10/90

lsblk
