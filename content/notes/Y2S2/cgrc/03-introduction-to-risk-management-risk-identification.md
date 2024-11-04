---
title: 03 - Introduction to Risk Management & Risk Identification
---
## Risk Identification
- Determines the **extent of the potential threat** associated with an IT system
- Looks at the **likelihood** and **impact** for each risk to **assign** a **risk rating / score**
### NIST Methodology
1. Risk Identification
2. Risk Assessment
3. Risk Control
![[risk-assessment-flowchart.png]]

---
## Risk Assessment
### Step 4 - Control Analysis
- Analyses the **effectiveness** of  the safeguards that are **already in place / planned**
- Usually uses a checklist to ensure analysis is performed in a efficient and systematic manner
- **Control Methods**
	- Technical Controls → Hardware / Software safeguards
	- Non-technical Controls → Management / Operational controls
- **Control Categories**
	- Preventive Controls → Thwart attempts to violate security policy (liken to IPS)
	- Detective Controls → Warn of violations of security policy (liken to IDS)
### Step 5 - Likelihood Determination
- Determine the probability of a vulnerability being exploited between 0.1 (low) and 1.0 (high)
- Categorised into high, medium and low through 3 factors:
	- Threat-source motivation & capability
	- Nature of the vulnerability
	- Existence and effectiveness of current controls
### Step 6 - Impact Analysis
- Categorises the impact into low, medium and high based on CIA
![[impact-analysis.png]]
### Step 7 - Risk Determination
- Function that gives a number to gauge the risk of an asset
- `Risk = (Likelihood of occurrence * Impact) - Percentage under control + Uncertainty`

---
## Risk Control
### Step 8 - Control Recommendations
- Aims to reduce the risk to the assets to an acceptable level
- Conduct cost-benefit analysis
- Factors
	- Feasibility
	- Legislation & regulation compliance
	- Organisational policy
	- Operational impact
	- Safety & reliability
- 3 categories of control
	- Policies
	- Programmes
	- Technologies
### Step 9 - Result Documentation
- Document the result into a official report or briefing. It should include
	- Threat sources & vulnerabilities + Risk assessment
	- Recommended controls
- Summarise the list into a ranked vulnerability risk worksheet (shown below)
- Risk assessment report is then used to help management make decisions
![[result-documentation.png]]
