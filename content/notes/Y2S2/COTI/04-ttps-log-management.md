---
title: 04 - TTPs & Log Management
---
## TTP
Stands for:
- Tactics - High level description of the attack strategy (i.e.: reconaissance)
- Techniques - Technical description of the attack (i..e: brute-forcing, SQL injection)
- Procedures - The approach followed by the threat actor (i.e.: cyber kill chain)

### Network Related TTPs

| TTP                                                                                 | Details                                                                                                             |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| DNS Poisoning                                                                       | Infects a DNS server to serve malicious DNS replies                                                                 |
| [DNS Cache Poisoning](https://www.cloudflare.com/learning/dns/dns-cache-poisoning/) | Infects the **cache** of a DNS server to serve malicious DNS replies                                                |
| ARP Poisoning                                                                       | Infects the ARP cache to serve malicious MAC addresses                                                              |
| DHCP Starvation                                                                     | Flood the DHCP server with spoofed requests to starve its IP pool                                                   |
| DHCP Spoofing                                                                       | Masquerades as a DHCP server to respond with malicious network configurations for MITM / other malicious activities |
| Network Sniffing                                                                    | Wireshark / tcpdump to sniff the network packets                                                                    |
### Password Attacks

| Attack        | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| Dictionary    | Uses a predefined wordlist to match and crack hashes                                          |
| Brute Force   | Permutates characters around to match and crack hashes                                        |
| Hybrid        | Combines a dictionary and brute force approach (i.e. permutates the characters in a wordlist) |
| Birthday      | Uses mathematical weaknesses to create hash collisions                                        |
| Rainbow Table | Uses predefined plaintext to hash mappings to crack the hash                                  |
### Application Level TTPs

| TTP                 | Details                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SQL Injection       | Modifies the SQL query to manipulate a database directly                                                                                                                                                           |
| XSS                 | - Stored: XSS is stored on the server, infects any client that comes across it<br>- Reflected: XSS is reflected off the URL sent to a server<br>- DOM-based: XSS happens locally, the server does not get involved |
| Parameter Tampering | Injecting malicious payloads into the URL parameter                                                                                                                                                                |
| Directory Traversal | Malformed file paths that allows for unauthorised access                                                                                                                                                           |
| CSRF                | Malicious JS code performs unwanted actions on a user's behalf                                                                                                                                                     |
| Cookie Poisioning   | Misnomer. Act of stealing / modifing cookies & the information within them                                                                                                                                         |

---
## Log Management
### Windows Logs

| Log         | Description                            |
| ----------- | -------------------------------------- |
| System      | System and service related logs        |
| Security    | Audit logs & authentication events     |
| Setup       | Configuration logs                     |
| Application | Logs from user-installed applications  |
| Forwarded   | Events forwarded from another computer |
### Linux Logs
- The lower the value, the higher the severity (inversely proportional)
### Firewall Logs
- Contain timestamp, source & destination IP  and action taken (i.e.: DROP, FORWARD)
- Windows logs:
	- Windows Firewall
	- IIS Logs
- Linux
	- Iptables

---
## Centralised Logging
### Process
1. Collection – Gather the logs
2. Transmisssion – Send to a centralised server
3. Storage – Store on the server
4. Normalisation – Normalise the data
5. Correlation – Identify trends / actions in the data
6. Analysis – Look for outliers
7. Alerting & Reporting – Wee woo
### Log Analysis Best Practices
- Sync time with NTP for accurate ordering

---
## Misc Stuff
### Privilege Escalation
- Non-admin takes advantage of bugs / misconfigurations to gain admin access
### Advanced Persistent Threats
- Sophisticated threats that steals sensitive data / causes disruption
- Follows 3 stages of attack: infiltration → escalation / lateral movement → exfiltration