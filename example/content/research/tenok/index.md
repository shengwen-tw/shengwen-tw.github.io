---
title: "Tenok: a Linux-like real-time operating system for robotics and IoT"
tags: ["RTOS", "embedded system"]
path: "research/tenok"
date: 2024-2-1
selected: true
cover: "./preview.png"
priority: 3 
---

## Overview

The [Tenok project](https://tenok-rtos.github.io/index.html) is a real-time operating system (RTOS) designed for robotic applications and the
Internet of Things (IoT). The name originated from the language of an indigenous tribe called Amis in Taiwan, where "tenok" means
"kernel" in their language. It resembles various designs from Linux and maintains a small code footprint for ARM Cortex-M processors. In
contrast to NuttX, Tenok does not implement a set of low-level hardware drivers as a part of the system. Instead, it adopts an approach
similar to FreeRTOS by treating the RTOS as a third-party library. Users can choose their preferred library for the hardware abstraction
layer (HAL).

<iframe src="https://www.youtube.com/embed/byWihWcMP00" title="tenok: an experimental real-time operating system" width="100%" height="500px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Presentations

### COSCUP 2024

<iframe src="https://drive.google.com/file/d/16S8ZRC-lhT15CXwWIy-RIIWXl5Ertqo5/preview" width="100%" height="500px"></iframe>

### COSCUP 2023

<iframe src="https://drive.google.com/file/d/1p8YJVPVwFAEknMXPbXzjj0y0p5qcqT2T/preview" width="100%" height="500px"></iframe>
