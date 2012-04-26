build:
	npm install ws
	npm install node-static
	npm install debug
	npm install websocket.io
	git clone git://github.com/LearnBoost/engine.io-client.git ./node_modules/engine.io-client
	rm -rf ./node_modules/engine.io-client/.git
	npm install ./node_modules/engine.io-client
	npm install browserbuild
	ln -s ../../../browserbuild/bin/browserbuild ./node_modules/engine.io-client/node_modules/.bin/browserbuild
	chmod +x ./node_modules/engine.io-client/node_modules/.bin/browserbuild
	git clone git://github.com/LearnBoost/engine.io.git ./node_modules/engine.io
	rm -rf ./node_modules/engine.io/.git
	npm install ./node_modules/engine.io
	make -C ./node_modules/engine.io-client build
	cp ./node_modules/engine.io-client/dist/engine.io.js ./public/js/engine.io.js
	echo 'Everything worked!'