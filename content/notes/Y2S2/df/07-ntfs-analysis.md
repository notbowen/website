---
title: 07 - NTFS Analysis
---
## Main NTFS Components
Each NTFS partition contains:
- **Partition Boot Record (PBR)** — Overall partition data (fixed)
- **Master File Table (MFT)** — Contains metadata for NTFS (variable position)
- **$Bitmap** — Cluster allocation tracker (stored in the MFT)

## Partition Boot Record (PBR)
The PBR is stored at the **start** of every NTFS partition (fixed location). It contains information such as:
- Bytes per sector, sectors per cluster, hidden & total sectors
- MFT location (logical cluster for $MFT)

## Master File Table (MFT)
MFT stores all of the metadata of the files stored in the NTFS filesystem. Its location is not fixed; the location is listed within the PBR. The first 16 entires are used for system files to make NTFS work, such as `$Bitmap`. The rest of the MFT is used to store metadata for user created directories and files.

`$MFT` — Used to track all fragmented segments of the MFT
`$Bitmap` — Used to track cluster availability on the disk

**Additional Properties:**

| Property       | Value        |
| -------------- | ------------ |
| Size           | `1024 bytes` |
| File Signature | `FILE`       |
### Useful MFT Records

| Record     | Purpose                                                                            |
| ---------- | ---------------------------------------------------------------------------------- |
| `$Logfile` | Keeps track of disk operations for fallback, contains useful forensics information |
|            |                                                                                    |

## Typical File Record
Important fields:

| Attribute               | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `$Standard_Information` | Acces modes (rwx), timestamp, link count                           |
| `$File_Name`            | Name of the file/folder                                            |
| `$File_Name_`           | For backward-compatibility with MS-DOS                             |
| `$Data`                 | File content (for files only) (contains link to next data segment) |
| `$Index_Root`           | Root node of the B-tree to track directory                         |
| `$Index_Allocation`     | B-tree to track files within folders                               |
| `Resident Flag`         | Used to check if said record is the root record                    |
