build:
	mkdir ./node_modules
	cd ./node_modules
	git clone git://github.com/LearnBoost/engine.io-client.git
	cd engine.io-client
	npm install
	cd ..
	git clone git://github.com/LearnBoost/engine.io.git
	cd engine.io
	npm install
	cd ../..
	npm install ws
	npm install node-static
	npm install debug
	npm install websocket.io
