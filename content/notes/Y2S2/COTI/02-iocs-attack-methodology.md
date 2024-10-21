---
title: 02 - IoCs & Attack Methodology
---
Indicators of compromise (IoCs for short), are telltale logs that notifies SOC analysts that a security incident has **already occurred** and should be further investigated. This differs from indicators of attack (IoAs for short), which are telltale signs that an attack is **about to happen**, and that necessary precautions should be taken to prevent a breach.

This module only focuses on IoCs, the notes would take a deeper dive into IoCs without taking IoAs into consideration. However, knowing the difference between IoCs and IoAs is still a plus as it might come in useful for our quizzes.

## Uses
As IoCs are essentially logs that contain malicious activity, it is mainly used to determine how an attack occurs. The IR team would make use of these logs to reconstruct a timeline of the attack in chronological order.

The slides also mentioned an extra use of IoCs: identifying [advanced persistent threats (APTs)](https://en.wikipedia.org/wiki/Advanced_persistent_threat). As most APTs have a unique attack pattern, analysing the IoCs may reveal patterns that match known APTs, indicating that they might be behind the attack.

## Shortcomings
As IoCs are displayed to the SOC analyst via alerts on an [[01-security-operations-management#SOC Technologies|SIEM]] or [[01-security-operations-management#SOC Technologies|SOAR]] platform, the overwhelming amount of information displayed on the screen may cause some critical logs to be missed out.

IoCs are usually flagged out based on hardcoded rules to detect malicious behaviour (i.e.: check for malicious SQL keywords in a request). Advanced threats may circumvent detection by specifically crafting their payload to avoid triggering the hardcoded rules.

## Categories 
IoCs can be divided into 4 categories, explained in the table below:

| Category      | Defining Features                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Network-based | Flagged malicious network activity from tools such as IDSes & SIEMs                                                              |
| File-based    | Flagged malicious file activity (i.e.: downloads) from tools such as EDR software                                                |
| Behavioral    | Flagged malicious activity based on abnormal/suspicious behaviour from [UEBA](https://www.ibm.com/topics/ueba) solutions         |
| Host-based    | Flagged malicious activity on a computer (i.e.: suspicious processes, weird changes to system settings) from EDR or XDR software |

## IoC Examples
The slides went through multiple examples of how IoCs may look like for different attacks. Here's my attempt to summarise them.

### Application Security IoCs
#### SQL Injection
- Logs show the presence of malicious queries
	- `" OR 1=1; --` (leak the entire table)
	- `" OR EXEC ...` (code execution)
#### XSS
- Payloads that include `<script>` tags and malicious bodies
	- `<script>alert(...)</script>` (Normal XSS payload)
	- `%3cscript%3ealert(...)%3c/script%3e` (HTML-encoded payload)
- Note that XSS payloads can be encoded in different ways, so just keep a lookout for keywords such as `script` and `alert`
#### Directory Traversal
- Payloads that include `../` in the body
	- `download.php?file=../../../etc/passwd` (Download the `passwd` file)
- Like XSS payloads, directory traversal payloads can be encoded too. Keep a lookout for file paths that sound sensitive (i.e.: `/etc/passwd/`, `wpconfig.php`, anything that isn't a document)
#### Dictionary Attacks
- Another term for brute force attacks
- A stream of consistent status codes followed by an outlier show a potential dictionary attack
![[dictionary-attack.png]]
- The image shows a stream of `200`s followed by a `302` indicating that an attacker was trying to brute force passwords and succeeded (as the endpoint is named `wp-login.php`)
#### DoS/DDoS Attacks
- Multiple IP addresses connecting to the same port in a short period of time
- Same IP address to different ports (with a [`TIME_WAIT`](https://stackoverflow.com/questions/37292063/what-is-the-meaning-of-time-wait-state-in-windows-when-i-entered-netstat-na-i) status after running `netstat -an`)

---

### Network Security IoCs
#### Network Scans
- Large number of packets from the **same** IP address
- Special cases include:
	- Stealth Scan - Large number of `RST` packet
	- SYN/FIN DDoS - Large number of `SYN/FIN` packets
	- UDP Scans - Large number of `ICMP Type 3` and `ICMP Code 3` responses
#### ARP Poisoning
- Large number of `diplicate IP address configured` warning
- Check using the `arp.duplicate-address-detected` filter
#### MAC Flooding
- Large numbers of **errors** in Wireshark's Expert Information window

---

### Malware IoCs
Malware IoCs are flagged using a process called **live system analysis**, or **behavioural analysis**. It actively looks for potentially malicious changes to the system in real-time and flags it out.

These include:
- **Port Monitoring** - Looks for connections to suspicious IP addresses
- **Process Monitoring** - Looks for suspicious processes
- **Registry Monitoring** - Looks for suspicious registry keys
- **Memory Dump / Static Analysis** - Whatever we learnt in MATT
- **Local / Online Malware Detection** - Uses hashes to look for malware (antivirus, virustotal)

This section reminds me of MATT as most of the concepts have been covered there. None of the steps seemed to give solid telltale signs, so if malware is ever tested in a quiz, start listing all of the steps to run and analyse malware from MATT.

---

### Insider Threat IoCs
As insider threats are determined by human behaviour, the scope is rather broad. I've summarised a few points that I plan to spam during exams:

1. **Data exfiltration** - Someone transferring sensitive data out (via thumbdrives, FTPs, etc)
2. **Irregular access times** - Accessing sensitive resources at 4am is a huge red flag
3. **Missing or tampered critical data** - Oh no someone has been messing with the logs