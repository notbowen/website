---
title: 06 - SIEM Solutions & Use Cases
---
## SIEM Architecture
SIEM environments typically contain the following components:
- **Data Source** — Network devices, servers, applications (the ones that generate the logs)
- **Collectors** — Collate & Normalise logs / data
- **Central Engine** — Data correlation & Analysis
- **Database** — Store logs for retention / future re-analysis

## SIEM Solution Types
SIEMs are provisioned in 3 main ways:

| Type        | Description                                                             | Advantages                                               | Disadvantages                                             |
| ----------- | ----------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------- |
| In-house    | Self-hosted by the company, both hardware & software has to be acquired | - Full control<br>- Easily customizable                  | - Expensive to setup & operate                            |
| Cloud-based | Subscribed to as a cloud service                                        | - Kept up-to-date                                        | - One size fits all solution, might not be fully utilised |
| Managed     | Another company manages the SIEM for you                                | - Reduces manpower load<br>- Provides compliance support | - Data is handled by a third-party                        |
## SIEM Sizes
SIEM come in varying sizes (strength), categorised based on the following properties:
- **Events per Second (EPS)** — Event log & correlation throughput of the SIEM (also referred to as "SIEM velocity")
- **Volume** — Storage capacity of the SIEM
- **Hardware Requirements** — Self-explanatory

---
## SIEM Deployment Architectures

| Architecture                   | Where is Collection Done? | Where is Processing Done? |
| ------------------------------ | ------------------------- | ------------------------- |
| Self-Hosted, Self Managed      | On-premise                | On-premise                |
| Self-Hosted, MSSP Managed      | On-premise                | MSSP                      |
| Self-Hosted, Jointly Managed   | On-premise                | Both MSSP and on-premise  |
| Cloud, MSSP Managed            | Cloud                     | MSSP                      |
| Cloud, Jointly Managed         | Cloud                     | Both MSSP and on-premise  |
| Cloud, Self Managed            | Cloud                     | On-premise                |
| Hybrid Module, Jointly Managed | Both cloud and on-premise | Both MSSP and on-premise  |

We can generalise the table above to the following rules:
- Where the **collection** is done determines whether its **self-hosted** or on the **cloud**
- Where the **processing** is done determines whether its **self managed**, **MSSP managed** or **jointly managed**

---
## Incident Detection Methods
The slides contain ways to detect different incidents through signature/anomaly detection performed on various data sources. Refer to the slides for further information.