var socket = io();

socket.on('message', (message) => {
    document.getElementById('messages').innerHTML += `<li>${message}</li>`;
});

window.onload = () => {
    document.getElementById('input').onkeydown = (event) => {
        if (event.key === 'Enter') {
            socket.emit('message', event.target.value);
            event.target.value = '';
        };
    };
}