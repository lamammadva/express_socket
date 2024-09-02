function socketAuth(socket){
    socket.on('auth',(nickName)=>{
        if (nickName.length >= 2) {
            socket.user = { nickName };
            socket.emit('auth_success',{nickName});
        } else {
            socket.emit('auth_error', 'Nickname must be at least 2 characters long.');
        }
    });
}

module.exports = socketAuth;