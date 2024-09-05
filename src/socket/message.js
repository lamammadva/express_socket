function socketMessage(socket,io){
    socket.on('message',(message)=>{
        if(!socket.user) return;
        const timestamp = new Date().toISOString();
        socket.broadcast.emit('new_message', {
            nickName: socket.user.nickName,
            message,
            timestamp
        });
        

    });
}
module.exports = socketMessage