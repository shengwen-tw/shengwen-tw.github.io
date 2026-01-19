---
title: "semu: a minimalist RISC-V system emulator capable of running Linux kernel"
tags: ["virtual machine", "Linux", "virtualization", "system software"]
date: 2024-10
path: "research/semu"
selected: true 
cover: "./tux.png"
priority: 5
---

[semu](https://github.com/sysprog21/semu) is a minimalist RISC-V system emulator capable of running Linux the kernel and corresponding userland. semu implements the following:

* RISC-V instruction set architecture: RV32IMA
* Privilege levels: S and U modes
* Control and status registers (CSR)
* Virtual memory system: RV32 MMU
* UART: 8250/16550
* PLIC (platform-level interrupt controller): 32 interrupts, no priority
* Standard SBI, with the timer extension

My contributions include the virtualization of several hardware components:
* **VirtIO Block:** Emulates block storage devices, allowing the guest OS to mount and access disk images
* **VirtIO GPU:** Emulates a graphics device supporting [X11](https://www.x.org/wiki/), [Mesa3D](https://mesa3d.org/), [DirectFB](https://directfb2.github.io/), etc.
* **VirtIO Input:** Emulates input devices such as mouse and keyboard for interactive use
* **VirtIO Entropy:** Emulates a random number generator (RNG), supplying entropy required by many software components to operate correctly (e.g., system libraries, cryptographic routines, networking tools)

<iframe src="https://www.youtube.com/embed/iPnLBjABbGs" width="100%" height="500px" title="semu: VirtIO GPU demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
