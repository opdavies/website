---
title: Deploying PHP Applications with Fabric
location: Nomad PHP
tags: ['meetup', 'php', 'fabric']
slides:
   url: ~
   embed: ~
draft: true
logo: assets/images/talks/logos/nomad-php.png
---
You’ve built your application, and now you just need to deploy it. There are various ways that this could be done – from (S)FTP, to SCP and rsync, to running commands like “git pull” and “composer install” directly on the server (not recommended).

My favourite deployment tool of late is Fabric – a Python based command line tool for running commands locally as well as on remote servers. It’s language and framework agnostic, and unopinionated so you define the steps and workflow that you need – from a basic few-step deployment to a full Capistrano style zero-downtime deployment.

This talk will cover some introduction to Fabric and how to write your own fabfiles, and then look at some examples of different use case deployments for your PHP project.