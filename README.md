## Engine.IO app boilerplate

A lightweight boilerplate application for creating real-time application on top of Engine.IO. Fast and easy.


## Easy install

```
git clone git://github.com/martintajur/Engine.IO-app-boilerplate.git
cd Engine.IO-app-boilerplate
make build
node .
```

or, if you'd prefer a one-liner:

```
git clone git://github.com/martintajur/Engine.IO-app-boilerplate.git && cd Engine.IO-app-boilerplate && make build && node .
```


## What does it do?

It lets you kick-start real-time application development with Engine.IO very easily by providing a simple command+data messaging. Basically this boilerplate includes very little in itself. It only provides you with the bare essentials you need to have in order to communicate between server and client using Engine.IO.


## What features does it have?

 * Clients who join receive information about other clients that are connected
 * Each client is able to set his/her name
 * All client names get distributed to other clients
 * Easily extendable with your own custom event handlers


## Why did I do this?

I compiled this for a friend and thought it might be useful to share with others as well. 


## Licence

The MIT License (http://www.opensource.org/licenses/MIT), Copyright (c) 2012 Martin Tajur
