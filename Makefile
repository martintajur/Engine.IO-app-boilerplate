build:
	mkdir ./node_modules
	git clone git://github.com/LearnBoost/engine.io-client.git ./node_modules/engine.io-client
	npm install ./node_modules/engine.io-client
	git clone git://github.com/LearnBoost/engine.io.git ./node_modules/engine.io
	npm install ./node_modules/engine.io
	npm install ws
	npm install node-static
	npm install debug
	npm install websocket.io
	make -C ./node_modules/engine.io-client -f ./node_modules/engine.io-client/Makefile build
	cp ./node_modules/engine.io-client/dist/engine.io.js ./public/js/engine.io.js