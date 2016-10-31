var socket = io();

socket.on('connect', function(){
	console.log('connected to socket io server');
})

socket.on('message', function(message) {
	console.log('new : ');
	console.log(message.text);
})

var form = $('#message-form');

form.on('submit', function(event) {
	event.preventDefault();

	socket.emit('message', {
		text: form.find('input[name=message]').val()
	})

	form.find('input[name=message]').val('');

});