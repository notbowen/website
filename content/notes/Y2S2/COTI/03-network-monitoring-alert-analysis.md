---
title: 03 - Network Monitoring & Alert Analysis
---
In this week, we learn about the different network monitoring and analysis tools used, how to deploy them and how the alerts are managed.

## Network Monitoring Tools
While there are many tools to monitor networks out there, we shall only focus on the following:
1. Network protocol analysers (i.e.: Wireshark)
2. SNMP for network behaviour discovery
3. [[01-security-operations-management#SOC Technologies|SIEMs]]
## Security Onion
A suite of tools. Follows the following architecture to effectively process data:
1. Alert (Logging)
2. Detection (Filtering logs)
3. Analysis (Analysing logs)

Just like the different web stacks out there (i.e.: LAMP), Security Onion comes with the ELK stack to provide SIEM functionality. ELK stands for:
1. ElasticSearch (Alert)
2. LogStash (Detection)
3. Kibana (Analysis)
## Data Processing Flow
To ingest the large amounts of data obtained from an SIEM or SOAR, a few preprocessing steps must be done to clean the data up for further use.
1. Data Reduction - Cleans up redundant data to reduce the system load when analysing
2. Data Normalisation - Standardises the outputs into a unified format (i.e.: MAC address formatting, date and time formatting)
3. Data Archival - Log retention for ~30 days (usually) for future reference
## Data Archival
As threats are constantly evolving, there is a chance that a zero-day attack goes undetected before a patch was released. In order to reduce the occurrence of an undetected attack, a practice named retrospective security analysis (RSA) is employed.

RSA is when a company archives its logs for a set number of days, and applies new rules on the said logs to catch any previously exploited zero-days. As the logs are kept, any undetected zero-days could be picked up by the updated rules and can be further analysed, reducing any false negatives.
## Types of Analysis
There are 2 types of analysis mentioned in the slides, namely deterministic and probabilistic.
1. Deterministic - The attack is guaranteed to work (i.e.: an SQLi attack on a vulnerable web server). This is the worst-case scenario
2. Probabilistic - Statistical techniques to calculate the probability of a successful exploit (i.e.: employee getting phished)

---
## Alert Software Deployment
This part was mentioned in class but was not found in the slides, so I'll dump it as a separate section. There are 2 ways to deploy an alerting software, using an agent or going agentless.

| Type      | Description                                                                     | Pros                                                                           | Cons               |
| --------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------ |
| Agent     | Deploys a client on every computer that sends data back to a centralised server | More data captured as the software is on the computer (i.e.: suspicious files) | Intrusive          |
| Agentless | Uses a central server to monitor network traffic                                | Non-intrusive                                                                  | Less data captured |
