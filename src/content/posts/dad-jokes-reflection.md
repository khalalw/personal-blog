---
author: Khalal Walker
title: 'Reflections on Being a Supreme Dad Jokester'
image: '../img/black-dad.jpeg'
date: 2020-03-08
draft: false
tags: ['javascript', 'node', 'twilio']
layout: post
---

People in tech preach to folks that they should work on personal projects. While I don't disagree, sometimes it's hard to figure out what you really want to build. It took me some time, but after while something came into my head... "What if people were able to receive a dad joke on their phone every day?" I like corny jokes and I'm sure other people love them as well.

#### High Level Implementation

I built a SMS subscription service in ~~Python, originally~~ JavaScript and used Twilio's API to handle all of the messaging interactions: receiving, responding, etc. As for coming up with dad jokes to send everyday, [icanhazdadjoke's](https://icanhazdadjoke.com/) API came in handy. For the subscribers who opted into the service, I saved their numbers in a MongoDB NoSQL database. Also, I saved the id's of the daily jokes sent so I wouldn't send out the same joke twice.

### Reception

I ended up having 563 subscribers at one point, just to receive a daily dad joke. People were amazed. I went to [Twilio Signal](https://signal.twilio.com/) and had the opportunity to show it off to other developers, Twilio employees, and conference attendees. They really loved it, and I loved to see their excitement.

After it was live for about 3 months or so, the personal project became a little too pricey for my liking: the hosting, the messages... these things weren't free. Although it wasn't a ton of money, it felt like a large investment for a _small_ personal project that I had no intent to monetize.

I ended it, with no notice to the users. I dropped the database of phone numbers, as I had no reason to keep them. No, I wasn't going to sell their data or keep them for some future marketing plan. That's not my jam.

Many people were really upset with me because it'd become apart of their daily routine. People were sharing the jokes with their co-workers, friends, family and it almost made me sad for ending it. Maybe...just maybe, ~~I'll bring it back again and allow for people to enjoy it.~~

Edit: It's live again! Text Dad to 415-223-8886

# What I Learned Throughout the Project

### Support Open-Sourced Projects

Running something as small as this SMS service made me realize that all of the "free" technology we use is being paid for, by somebody. Yes, we have the luxury of using them for free but we really should try to donate to things we use the most, especially the ones that don't have big name sponsors.

### Your Code Doesn't Have to be Perfect

When I first shipped the service, there were bugs and requirement gaps in my implementation. But, instead of worrying about it being perfect, I put it out in the world. People gave me feedback and I iterated on it. None of the code we write today will live forever, so we shouldn't try to get it "perfect" the first time around. Create an MVP, get feedback, and continue to iterate.

### Don't Overthink Your Side Project

Think about something you enjoy and try to implement a product around it. You'll learn a lot along the way. As mentioned above, you don't have to have the perfect idea to start implementing. Just start moving. Starting tends to be the hardest thing for folks to do, but once you get the ball rolling it's easier to keep things in motion.

# The Code

If you'd like to see the code behind the service, here's the [GitHub repo](https://github.com/khalalw/dad-jokes-js).
