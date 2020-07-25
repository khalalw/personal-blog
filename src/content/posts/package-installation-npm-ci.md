---
author: Khalal Walker
title: Project Installation with npm ci
image: ../img/packages.jpg
date: 2020-07-25
draft: false
tags: ['npm', 'javascript']
layout: post
---

Using a package manager effectively is an essential part of being a web developer, whether it's with your favorite front-end library/framework,
or exclusively with Node.js. There are many package managers available, but this article will be specific to [npm](https://www.npmjs.com/).

If you're familiar with npm, you've used `npm install` to add/update packages. `npm install` can be used to download individual packages, but we're going to scope this conversation
of installing entire projects. Here's a high level overview of what the `npm install` command does:

- creates the `node_modules` directory in the current directory if it does not exist
- installs all the modules listed as dependencies according to the `package.json` file into `node_modules`
- creates the `package-lock.json` (lockfile) in the current directory if it does not exist.
- writes to the lockfile with the current version of each package if there are version changes

##### `npm ci`

One "issue" with `npm install` is that it can be hard to get exact repeatable builds of a project since it doesn't always install the exact version listed in a
`package.json` file. Sometimes `package.json` lists out minimum/maximum versions, so npm will install according to those specifications.

Enter... `npm ci`

###### What does it do exactly?

- removes the existing `node_modules` directory, starts installation with a clean slate
- bypasses the `package.json` file and only looks at the `package-lock.json` file for package installation
- does not write to `package.json` or `package-lock.json` files
- stricter than regular install, and will error out of `package-lock.json` and `package.json` are not in sync due to manual changes.

###### Benefits

- `npm ci` allows multiple developers to create deterministic project environments, to ensure the installed version of all packages are the same.
- sometimes the `node_modules` directory gets "corrupted", so deleting the directory from the beginning ensures a fresh, clean build.
- every install will be the exact same since it doesn't do any writing to files, or update versions. All installs are "essentially frozen".
- also reported to be up to 80% faster than the traditional install.

###### No more deleting node_modules manually

If you've ever come across installation issues, you're familiar with the command:

```
rm -rf node_modules && npm install
```

`npm ci` does this with every installation, so there's no need for you to do so.

##### Recommendation

Always use `npm ci` to download all packages of a project if a lockfile exists, to avoid the side effects of changing package versions unintentionally.
If package versions need to be updated, make sure it's a conscious decision to do so. You can always upgrade your packages with `npm update` and/or
fix vulnerabilities with `npm audit fix`.
