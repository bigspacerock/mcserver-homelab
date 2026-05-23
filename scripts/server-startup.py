# Client to server Wake-On-LAN Packet
import subprocess
import time

# This .py file is intended to connect the Pi to the Server/PC.
# The Pi will essentially function as a primtive website which interfaces a server. 
# UNFINISHED; WORK ON WAKE ON LAN!! ok

END_MAC = "AA:BB:CC:DD:EE:FF"
END_IP = "192.168.1.1"

def powerEndDevice():
    # 'wakeonlan' required for Raspberry Pi.
    subprocess.run("wakeonlan",shell=True)

def startMinecraftServer():
    subprocess.run('ssh bigsp "systemctl start minecraft"', shell= True)
