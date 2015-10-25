## Engine.IO app boilerplate

A lightweight boilerplate application for creating real-time applications on top of Engine.IO. Fast and easy.


## Easy install

```
git clone git://github.com/martintajur/Engine.IO-app-boilerplate.git
cd Engine.IO-app-boilerplate
npm install
node .
```

or, if you'd prefer a one-liner:

```
git clone git://github.com/martintajur/Engine.IO-app-boilerplate.git && cd Engine.IO-app-boilerplate && make build && node .
```

## Requirements for building

 * git
 * NodeJS 0.6+
 * npm 1.1+
 * Mac OS X or Linux (all major distros should work)


## What does it do?

It lets you kick-start real-time application development with Engine.IO very easily by providing a simple command+data messaging. Basically this boilerplate includes very little in itself. It only provides you with the bare essentials you need to have in order to communicate between server and client using Engine.IO.


## What features does it have?

 * Provides a simple command+data message structure with extendable handlers
 * Clients who connect to server receive information about other clients that are connected
 * Each client is able to set his/her display name, all names changes get distributed to other clients
 * Easily extendable with your own custom event handlers


## What is it good for? (and what not)

 * Simple, basic real-time apps (not for complex apps)
 * Chat apps
 * Geolocation-based games
 * Ad hoc apps
 * Apps that don't require a lot of authentication


## Why did I do this?

I compiled this for a friend and thought it might be useful to share with others as well. 


## Licence

The MIT License (http://www.opensource.org/licenses/MIT), Copyright (c) 2012 Martin Tajur
