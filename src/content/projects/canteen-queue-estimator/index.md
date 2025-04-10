---
title: "Canteen Queue Estimator"
description: "Calculates my school's canteen queue timings using YoloV5 on a Raspberry Pi"
date: "Jun 1 2022"
repoURL: "https://github.com/notbowen/CanteenQueueEstimater"
---

Project using [YoloV5 Crowdhuman](https://github.com/deepakcrk/yolov5-crowdhuman) to detect the
number of people in a queue (backend), and sends the data an internal webserver to be displayed (frontend).

## Tech Used

- Flask - Webserver to display queue timings
- YoloV5 Crowdhuman - Model to detect number of heads
- Raspberry Pi - Portable computer to mount at the canteen
