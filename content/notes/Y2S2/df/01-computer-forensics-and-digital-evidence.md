---
title: 01 - Computer Forensics & Digital Evidence
---
Digital forensics is the act of preserving, identifying, extracting, interpreting and documenting computer evidence. In this week, the an overview of how digital forensics works was given, outlining the overall process that forensic investigators (FI) go through when conducting investigations on seized storage devices.

The main steps that an FI performs are listed in the table below, in chronological order:

| Step           | Purpose                                                  |
| -------------- | -------------------------------------------------------- |
| Identification | Finding where the storage device is                      |
| Extraction     | Extracting the data from the storage device              |
| Interpretation | Looking for incriminating evidence in the extracted data |
| Documentation  | Recording the steps taken & findings                     |

As this week mainly focused on the *extraction* section, the notes would focus on that too.

---
# Extraction
Extraction is the act of taking the data out of the seized devices while protecting and preserving its original state (i.e.: no files should be modified). If data is lost or corrupted, it is deemed unusable as evidence as its credibility has been lost.
## Hardware Write Blockers
In order to maintain the integrity of the seized device, FIs may use specialised hardware to prevent any modification to the device. One such example of the said hardware is a write blocker. A write blocker, as its name suggests, prevents any write operations to a device, preserving its integrity.

In this module, a [Tableau eSATA Forensic Bridge](https://www.forensiccomputers.com/tableau-t35u-bridge-kit) is used as a write blocker for the extraction step. Its use was demonstrated in the practical file named `DF Practical 22`. These devices come with a variety of interfaces (a name for the holes u plug ur cables into) so that most devices can be plugged in and extracted at a crime scene. The interfaces include SCSI, SATA, USB, Firewire, etc.

Now that the integrity of the seized device is settled, the data is finally extracted.
## Forensic Images
A forensic image is a bit-level copy of the original evidence that can be created by forensic tools. Bit-level means that the evidence accurate to the 1s and 0s stored on the actual seized device, ensuring that whatever the investigator sees is what the suspect saw.

These images can be stored in different disk image formats, the most common being the following:
- `.e01` - EnCase disk image
- `.raw` - Raw disk images (usually produced by [dd](https://en.wikipedia.org/wiki/Dd_(Unix)))
- `.vmdk / .ova` - Virtual Machine disk files (usually used for mock environments, virtual machines are rarely analysed in real-life scenarios)

### Image Types
Images can be created in 3 different types. The different types trade space for verbosity (or the amount of data captured). The table below summarises the types and their trade offs.

| Type          | Description                                    | Trade Off                                                                         |
| ------------- | ---------------------------------------------- | --------------------------------------------------------------------------------- |
| Complete Disk | Takes a snapshot of the **entire** disk        | - Takes up a lot of space<br>- Captures all the deleted files                     |
| Partition     | Takes a snapshot of **a partition** on a disk  | - Takes up lesser space<br>- Captures all the deleted files **on that partition** |
| Logical       | Takes a snapshot of selected files and folders | - Takes up the least space<br>- Does **not** capture any deleted files            |

The following image sums up the difference between the image types quite well.

![[partition_vs_logical_vs_whole.png]]
## Types of Data
All digital data stored on electronic mediums can be classified into 2 types, `persistent` (non-volatile) or `volatile`. Volatile data disappears once power is lost, and vice-versa.
## Forensic Data Categories
Persistent and volatile data are general terms used across the whole field of computing. In forensics, data is classified into 3 main categories: active, latent and archived. The table below gives a rough overview of the categories.

| Category | Key Feature                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| Active   | Data can be seen in the operating system and is being actively used                                                |
| Latent   | Data has been marked as deleted from the operating system, but still remains on the disk waiting to be overwritten |
| Archived | Data that is stored in any form of backup                                                                          |

---
# Misc Notes
Here are some of the things that I jotted down during class, but was too lazy to format into a proper section.

Here are some things that Mr Liew said:

**Random Points**
- Remember to document your steps
- Change "Text Style" during practical test to see answer

And here is the file layout for an EnCase file in case we need it:

**EnCase File Layout**
- Header to contain case metadata
- Uses CRCs to validate each block
- MD5 to ensure the integrity of the entire file

![[encase_layout.png]]