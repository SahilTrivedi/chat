var socket = io();

socket.on('connect', function(){
	console.log('connected to socket io server');
})

socket.on('message', function(message) {
	console.log('new : ');
	console.log(message.text);
})