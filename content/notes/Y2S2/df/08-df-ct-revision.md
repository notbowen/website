---
title: 08 - DF CT Revision
---
## Digital Evidence
- Information **stored digitally** for **use in court**
- Examples:
	- Any digital document
	- Email
	- Word docx
	- Internet history
	- RAM content
## Categories of Forensic Data
- **Active Data** — In use by OS; Not deleted
- **Latent Data** — Not in use by OS but still exists; Logically deleted
- **Archival Data** — Data stored in offshore backups
## Forensic Images
- File format to store bit-by-bit copy of original evidence
- File extensions: `E01`, `VMDK`, `OVF`, `DD`
## Image Format
- **Complete Disk** — Full disk snapshot, comprehensive, large size, contains slack
- **Partition** — Snapshot of a partition of a disk, kind of comprehensive, medium size, contains slack
- **Logical** — Snapshot of certain files, not comprehensive, small size, no slack
## Imaging Process
- Connect hardware write blocker to prevent writes
- Use imaging tools like `dd`, `FTK Imager`, `EnCase` to obtain image

---
## Crime Scene Tools
- Forensic software
- Large capacity storage drive
- Write-blockers
- Hardware adapters
- Digital camera (for documentation)
- Anti-static bags
- Evidence bags
## Handling Live Systems
- **Yank the plug**  — Prevents shutdown scripts from running; May corrupt system as not properly shut down
- **Proper shutdown** — Shutdown scripts will run, possibly erasing evidence; Won't corrupt system as its properly shut down
- **Leave it up and running** — Constantly on, preserves integrity; Tedious to do memory acquisition on large number of systems
## Seizing Hard Disks
- Wear **anti-static strap** to protect equipment from **electricity**
- Ensure equipment is protected from **magnetic fields**
- Document internal storage devices
- Disconnect storage devices to prevent destruction/alteration of data
## Chain of Custody
- Documents every move and access of evidence to prove the preservation of evidence in court
- Logs data such as
	- Date and time of action
	- Action type
	- Person collecting/accessing the evidence
	- Computer information (model, serial number)
	- Disk drive information (size, manufacturer, serial number, heads, cylinders, sectors per track)
	- Handling procedure
## Bagging & Tagging
- **Bagging** — Protects against contamination and tampering
- **Tagging** — Associate bagged evidence with case
## Transporting Evidence
- Keep evidence away from magnetic sources and high temperature
- Maintain chain of custody

---
## Types of Extraction
- **Manual inspection** — Effective for small disks as its faster & provides increased confidence
- **File signatures** — Bypasses file extension renaming
- **Timestamp & metadata** — Contains MD5 hash, can be checked against a database to identify file
- **String and keyword search** — Look for patterns / names in filename / content
- **File carving** — Recover deleted files by looking at start and end signatures
## Analysis of Data
- **Timeframe** — Determines the sequences of events occurring on a computer system; Associate individual using computer at said timing
- **Data hiding** — Find data concealed through file extension mismatches, password protected files & steganography
- **Application and file** — Look through files to infer data from the user, i.e.: installed apps, internet history, correlating files together

---
## MBR vs GPT

| Attribute                   | MBR                                       | GPT                      |
| --------------------------- | ----------------------------------------- | ------------------------ |
| **Max partitions**              | 4 primary<br>or<br>3 primary + 1 extended | 128 primary              |
| **Max partition size**          | 2TB                                       | 9.4 Zettabytes           |
| **Partition Addressing Method** | Cylinder head sector                      | Logical block addressing |
| **Size of a partition entry**   | 16B                                       | 128B                     |
| **Error Detection**             | None                                      | CRC                      |
| **Firmware interface support**  | BIOS                                      | UEFI                     |
