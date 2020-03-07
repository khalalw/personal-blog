---
author: Khalal Walker
title: 'How I Became a Dad Joke Extraordinaire'
image: ''
date: 2020-03-07
draft: false
tags: ['javascript', 'node', 'twilio']
layout: post
---

People were always telling me that I should work on personal projects, but I never really knew what to build. After many weeks of thinking what I'd actually want to put my time into, I had an idea. What if people were able to receive a dad joke on their phone every day? I like corny jokes and I'm sure other people love them as well.

I built it, and the service was live for about 2 months. I ended up having 563 subscribers at one point, just to receive a daily dad joke. People were amazed. After a while, the personal project became a little to pricey for my liking: the hosting, the messages... these things weren't free. Although it wasn't a ton of money, it felt like a large investment for a _small_ personal project that I had no intent to monetize.

I ended it, with no notice to the users. I dropped the database of phone numbers, as I had no reason to keep them. No, I wasn't going to sell their data or keep them for some future marketing plan. That's not my jam.

I may resurrect the service eventually, haven't really thought it out. But, I do want to share how I built it and the thought process that went behind some of my technical decisions.

###### Tools I used to build it

- [Express](https://expressjs.com/) - Node.js web framework
- [Twilio](https://www.twilio.com/) - Phone number and SMS API
- [icanhazdadjoke](https://icanhazdadjoke.com/api) - Random Dad Joke Generator
- [MongoDB](https://www.mongodb.com/) - NoSQL database
