var env = (process.env.NODE_ENV === 'production' ? 'production' : 'development'); // start up with NODE_ENV=production, Express-like.
var enabledTransports = ['polling']; // possible options: ['polling', 'websocket', 'flashsocket']

var httpRequestHandler = function (request, response) {
	var uri = request.url.substr(1).split('/');

	if (uri[0] !== 'engine.io' || uri[0] == '') {
		request.addListener('end', function () {
			staticServer.serve(request, response);
		});
    }
    else if (uri[0] == 'engine.io') {
    	server.handleRequest(request, response);
    }
};

var engine = require('engine.io');
var httpServer = require('http').createServer();

httpServer.listen(3000);

var server = new engine.Server({ transports: enabledTransports });

var staticServerProvider = require('node-static'),
	staticServer = new(staticServerProvider.Server)('./public');

var log = function() {
	if (env == 'development') {
		console.log.apply(this, arguments);
	}
}

httpServer.on('upgrade', function (req, socket, head) {
	server.handleUpgrade(req, socket, head);
});

httpServer.on('request', httpRequestHandler);

var clientsData = {
/*
	253673624562: {
		id: 253673624562,
		name: 'Mike'
	},
	74747352234243: {
		id: 74747352234243,
		name: 'John'
	},
*/
};

log('Server started');

server.on('connection', function (client) {

	log('new client connected', client.id);

	clientsData[client.id] = { id: client.id };
	
	publishToAll(client, {
		command: 'new.client.connected',
		data: {
			id: client.id
		}
	});
	
	sendData(client, {
		command: 'current.connected.clients',
		data: {
			clients: clientsData
		}
	});
	
	client.on('message', function (message) {
		
		try {
			message = JSON.parse(message);
		}
		catch(err) {
			throw err;
		}

		log('new message received from ' + client.id, message);
		
		if (message.command && message.data && typeof handlers[message.command] === 'function') {
			handlers[message.command](client, message.data);
		}
	
	});
	
	client.on('close', function () {
	
		publishToAll(client, {
			command: 'client.disconnected',
			data: {
				id: client.id
			}
		});
		
		delete clientsData[client.id];
	
	});

});

var sendData = function(toClient, message) {
	toClient.send(JSON.stringify(message));
};

var publishToAll = function(byClient, message) {
	message.data._sentBy = byClient.id;
	for (var clientId in server.clients) {
		if (server.clients.hasOwnProperty(clientId)) {
			server.clients[clientId].send(JSON.stringify(message));
		}
	}
};

var handlers = {
	'update.name': function(client, data) {
		if (!data.name) return false;
		
		clientsData[client.id].name = data.name;
		
		publishToAll(client, {
			command: 'client.name.updated',
			data: {
				id: client.id,
				name: data.name
			}
		});
	},
	'some.custom.handler': function(client, data) {
		// do some custom stuff
	}
};

