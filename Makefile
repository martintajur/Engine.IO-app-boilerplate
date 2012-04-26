build:
	npm install ws
	npm install node-static
	npm install debug
	npm install websocket.io
	curl -o ./node_modules/engine.io.tar.gz https://github.com/LearnBoost/engine.io/tarball/master
	tar -xzf ./node_modules/engine.io.tar.gz
	curl -o ./node_modules/engine.io.tar.gz https://github.com/LearnBoost/engine.io-client/tarball/master
	tar -xzf ./node_modules/engine.io-client.tar.gz
	npm install ./node_modules/engine.io
	npm install ./node_modules/engine.io-client
	make -C ./node_modules/engine.io-client -f ./node_modules/engine.io-client/Makefile build
	cp ./node_modules/engine.io-client/dist/engine.io.js ./public/js/engine.io.js