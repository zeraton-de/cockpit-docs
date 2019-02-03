---
title: Getting Started
---

# Getting Started

## Introduction

Cockpit is a headless CMS with an API-first approach that puts content first. It is designed to simplify the process of publication by separating content management from content consumption on the client side.

Cockpit is focusing just on the back-end work to manage content. Rather than worry about delivery of content through pages, its goal is to provide structured content across different channels via a simple API.

### Key Features

* **Manage flexible content models.** There are no pre-defined content models. Define the content model yourself.
* **Uncluttered UI.** Cockpit offers you a modern and simple user interface.
* **One system, consume it the way you want.** Receive your content via a simple API.


### The Advantages Of Going Headless:

1. No presentation limitations – build the best design ever.
2. Content for multiple channels – create content once, consume anywhere.
3. Highly scalable content – for all your devices and microsites.
4. Minimum training required – get started, immediately.
5. Easy integrations – connect with everything.


## Requirements


* **PHP >= 7.1**
* PDO with **SQLite** support (or MongoDB)
* (optional: Redis)
* GD, Zip extension enabled
* **Apache** (with mod_rewrite enabled) or **nginx**
* Any modern browser

------------------

**That's it.** No generation or build scripts, no heavy-weight PHP libraries or dependencies. Cockpit was successfully tested on Apache and nginx.

## Installation

Traditional Installation

1. Download the latest version of Cockpit on getcockpit.com/download.
2. Unzip the downloaded zip package into your web root or a sub-directory of your web root.

### Permissions

Make sure that the folders storage and config with all of its sub-folders have write-access by the web server.
Create your first user

### Create Users

Go to `/install` in your favorite browser and follow the instructions. A new
user called `admin` with password `admin` is created when cockpit has not
already been installed.