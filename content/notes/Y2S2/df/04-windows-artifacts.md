---
title: 04 - Windows Artifacts
---
## Key Folders

| Windows Version       | System Folder | Root Folder (User folder)   |
| --------------------- | ------------- | --------------------------- |
| Windows 2000          | `C:\WINNT`    | `C:\Documents and Settings` |
| Windows XP            | `C:\Windows`  | `C:\Documents and Settings` |
| Windows Vista onwards | `C:\Windows`  | `C:\Users`                  |

- System folder — Stores information about the **operating system** (i.e.: Event logs)
- Root folder — Stores information pertaining to the **user** (i.e.: user configs, user files)
### NTUSER.DAT
- File that stores user **configurations** for installed apps & Windows itself
- **Updated** when the user **logs out** → Can be used to **determine last access time** by user
- Located in the **root folder** (`C:\Users\%USERNAME%`)

---
## Recycle Bin
- Used to temporarily store deleted files
- Located at `C:\Users\%USERNAME%\$RECYCLE.BIN\<SID>`
- File name & file content are split up

| Windows Version       | File Name                                         | File Content                                        |
| --------------------- | ------------------------------------------------- | --------------------------------------------------- |
| Windows 2000 & XP     | `Recycler` (Recycle bin's folder name)            | Hidden file named `INFO2`                           |
| Windows Vista onwards | Index file, named `$I<random_number>.<extension>` | Renamed file, named `$R<random_number>.<extension>` |

---
## Juicy Folders
### Low Folders
- Used by **Internet Explorer**
- Configured with **low privileges** to store files from the internet for **security reasons**
- Contains ==cookies==, ==temporary internet files== & ==history==
### Other Folders
The table below shows a list of common folders that can contain juicy information. Fields marked as `-` under "What it Contains" are self-explanatory.

Most of the Windows related configurations are stored at `C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows`.

| Name                | Applications   | What it Contains                                                                   |
| ------------------- | -------------- | ---------------------------------------------------------------------------------- |
| Email Folders       | Windows Mail   | -                                                                                  |
| Messaging History   | Skype, MSTeams | -                                                                                  |
| Recent Folders      | Windows OS     | Shortcuts (link files) to recently accessed folders & applications                 |
| Documents / Desktop | Windows OS     | -                                                                                  |
| Sent to Folder      | Windows OS     | Used to store files to send to applications (triggered by `Right Click > Send to`) |
| Temp Folder         | Windows OS     | -                                                                                  |
