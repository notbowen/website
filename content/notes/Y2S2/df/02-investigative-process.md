---
title: 02 - Investigative Process
---
Forensic investigators usually follow a fixed number of steps when conducting their investigations at a crime scene. The steps are as follows:

1. ==Preliminary examination==
2. Obtain a search warrant
3. Secure the scene
4. Conduct preliminary interviews
5. ==Document the scene==
6. ==Search & seize==
7. ==Bag & tag==
8. ==Transport the evidence==
9. Perform forensic duplication at the lab
10. Hash the images
11. ==Prepare chain of custody==
12. ==Store original evidence securely==
13. Analyse image copy for evidence
14. Prepare forensic reports
15. Testify in court

Though there are quite a number of steps, I've highlighted the important ones to take note of, which will be elaborated on in the following sections.

---

## Before Arriving
### Preliminary Examinations
Before heading to the crime scene, the FIs must conduct preliminary examinations to know what to do at the crime scene. They will:

- Try to predict where the evidence is
- Anticipate obstacles (EM interference, power loss)
- Prepare tools to extract the evidence (storage drives, write-blockers, drive adapters, forensic software, live-response tools)
- Bring documentation tools (cameras to record, notepads & pens to take details down)
- Misc tools (screwdrivers, anti-static wrist straps, evidence bags & tapes)
### Obtaining Permission / Search Warrant
There are 2 ways to seize digital evidence, through a search warrant or a voluntary surrender. Search warrants are usually used when the evidence is seized from a suspect, while the evidence is voluntarily surrendered from the victim.

---
## At the Crime Scene
### Documenting the Scene
Upon arriving, FIs will first document the scene in its original state by taking videos, notes and sketching layouts. They usually document the following stuff:
- Mouse position
- Stuff found near the system
- Photos of the monitor
- Photos of the entire scene
### Searching and Seizing
Gloves are usually used when handling the evidence to avoid tampering with/leaving additional marks on it. The state of the evidence should also not be changed. If the computer is off, leave it off. If the computer was on, take pictures of the screen and note the programs running, and leave it on.

If the computer is on, there are 3 ways of handling it:

| Action                    | Pros                                                  | Cons                                                    |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| Yank out the cable        | Prevents any cleanup scripts from running on shutdown | Might corrupt the disk, in turn corrupting the evidence |
| Perform a proper shutdown | Prevents the data from being corrupted                | A cleanup script might execute, erasing all evidence    |
| Leave it up and running   | Leaves the system in its original state               | Becomes a hassle with a large number of devices         |
### Chain of Custody
A chain of custody is a document that tracks the possession of the said evidence. It is used to prove the integrity of the evidence in court.

It contains a lot of information, such as, but not limited to:
- List of actions and their date & time performed
- Information about the personnel handling the evidence
- Information about the evidence (serial number, computer model, BIOS settings, drive manufacturer, drive parameters)
- Handling procedure, precautions taken & reasons for action
### Bagging and Tagging
Evidences are bagged and tagged to prevent contamination and tampering, and to associate a evidence with a particular case and additional information such as location found, date & time seized etc.

Magnetic media should be packed in anti-static packaging.
### Transporting the Evidence
During transportation, care must be taken to prevent the evidence from being corrupted. Actions include:
- Keeping electronic evidence away from magnetic sources
- Keeping the evidence away from high temperatures and humidity

---
## At the Forensics Lab
### Evidence Acquisition
Steps should be taken such that the original evidence's integrity is maintained. Steps include:
- Disconnecting the storage medium from the device (to prevent writes)
- Using write-blockers to prevent the examiner's system from tampering with it
- Updating the chain of custody