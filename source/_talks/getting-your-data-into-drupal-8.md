---
title: Getting (Your Data) Into Drupal 8
slides: https://speakerdeck.com/opdavies/getting-your-data-into-drupal-8-drupal-bristol
slides_embed: <script async class="speakerdeck-embed" data-id="63e5dfce996e46699e304d50e896477b" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>
tags: [drupalcamp, migration, drupal-8]
events:
    - { id: drupal-bristol, date: '2017-01-18' }
    - { id: drupalcamp-london-2017, date: '2017-03-04' }
---
If you’ve moved a site from Drupal 6 to 7, the chances are that you’ve either used the upgrade path to update your old site in-place, or you built a new site from scratch and used the Migrate module from contrib to migrate your data from the old database.

In Drupal 8, things have changed as there’s no upgrade path from Drupal 7 and the Migrate module has been moved into core, though there are still migration related modules available in contrib.

This talk will look at the core Migrate module and how it implements Drupal 8 features such as YAML and the plugin and configuration systems, and how to write your own migrations to get your data into Drupal 8.