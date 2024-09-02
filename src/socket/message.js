function socketMessage(socket,io){
    socket.on('message',(message)=>{
        if(!socket.user) return;
        socket.broadcast.emit('new_message', {
            nickName: socket.user.nickName,
            message
        });

        

    });
}
module.exports = socketMessage