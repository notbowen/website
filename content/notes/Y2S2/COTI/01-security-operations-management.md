---
title: 01 - Security Operations & Management
---
Threat actors target companies for 2 main reasons:
1. Obtaining sensitive information such as [PII](https://en.wikipedia.org/wiki/Personal_data) or [IP](https://en.wikipedia.org/wiki/Intellectual_property)
2. Political reasons (i.e. disabling national infrastructure)

As companies all around the world are constantly being bombarded by cyberattacks (i.e. the recent [Internet Archive DDoS](https://blog.archive.org/2024/05/28/internet-archive-and-the-wayback-machine-under-ddos-cyber-attack/)), a response methodology has emerged in the form of a security operations centre (SOC).

## Security Operations Centre (SOC)

An SOC ingests data (basically logs) from different parts of the company (i.e.: database logs, firewall logs, endpoint traffic) and monitors them for suspicious traffic. The image below provides a nice overview of how an SOC functions.

![[soc-graph.png]]

### SOC Tiers
Just like a conventional company department (i.e.: Sales / HR), SOCs embraces a tiered approach to their job roles. A higher tier corresponds to a higher threat severity, and the threats gets escalated their way up the hierarchy depending on each tier's capability to handle it.

There are 3 tiers in total, with 2 being SOC analysts and the last being a incident responder.

The table below shows the responsibilities and capabilities of each tier. The severity level of the threat increases as the table goes down.

| Tier                   | Responsibilities                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tier 1                 | - Monitor logs<br>- Triage alerts<br>- Initial analysis to deem whether said alert is a threat                                                          |
| Tier 2                 | - Performs further investigation into the alert to see if it's a false positive<br>- Escalates the issue to Incident Response (IR) if a threat is found |
| Incident Response (IR) | - Takes necessary actions to eradicate the threats<br>- Provides remediation actions to prevent future attacks                                          |

---
## SOC Technologies
There are 2 main technologies that SOCs use for threat response:
1. Security Information and Event Management (SIEM)
2. Security Orchestration, Automation and Response (SOAR)

A really brief summary can be found in the following table:

| Technology | Description                                                                                                                 | Purpose    |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- |
| SIEM       | Provides detailed logs to detect suspicious activities                                                                      | Monitoring |
| SOAR       | Gathers logs + Provides ways to trigger automated responses to predefined threats (i.e. blocking an IP when req > 2500/sec) | Response   |

These 2 technologies can be used in tandem to continuously monitor and respond to new threats.

## SOC Metrics
These are some of the metrics used to gauge an SOCs effectiveness.

| Metric                      | Definition                                                   |
| --------------------------- | ------------------------------------------------------------ |
| Mean Time to Detect (MTTD)  | Time taken till the threat is **found**.                     |
| Mean Time to Respond (MTTR) | Time taken till the threat is **blocked**.                   |
| Mean Time to Contain (MTTC) | Time taken till the threat is **contained** and **removed**. |

There are 2 more definitions in the slides, *dwell time* and *time to control*. These seem like duplicates of *MTTD* and *MTTC* respectively, and thus are not included in the table above.

### MTTR vs MTTC
Based on the table, the *MTTR* and *MTTC* metrics seem almost the same, but there are slight differences. Let's use a DDoS attack as an example.

Say a DDoS attack is originating from the IP `129.126.8.5`. The SOC team notices this and blocks the malicious IP. This counts as the *MTTR*. However, the root cause of the problem is not solved yet and the company is still vulnerable to DDoS attacks as the attacker can simply change their IP.

Say the DDoS attack was due to a vulnerability in the web server of the company. The SOC team escalates this to the IR team, which then patches the vulnerability. This counts as the *MTTC*. The root cause of the problem is eradicated; the threat has been contained and removed.