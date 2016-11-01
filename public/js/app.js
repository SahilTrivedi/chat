var name = getQueryVariable('name');
var room = getQueryVariable('room');
var socket = io();

$('.room-title').text(room);

socket.on('connect', function(){
	console.log('connected to socket io server');

	socket.emit('joinRoom', {
		name: name,
		room: room
	});
})

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	console.log('new : ');
	console.log(message.text);
	$('.messages').append('<p><strong>'+ message.name + ' ' + momentTimestamp.local().format('h:mm a')  +' : </strong> '+'</p>')
	$('.messages').append('<p>'+ message.text + '</p>')
})

var form = $('#message-form');

form.on('submit', function(event) {
	event.preventDefault();

	socket.emit('message', {
		name:name,
		text: form.find('input[name=message]').val()
	})

	form.find('input[name=message]').val('');

});