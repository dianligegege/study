//初始化系统库（引包）
var express = require('express');
var app = express();
var server = require('http').createServer(application);
//引入socket.io这个包
var socketio     = require('socket.io')(server);
var path = require("path");
//加载前端文件index.html

//设置静态路径
app.use(express.static(path.join(__dirname, "views")));
app.get('/joinRoom', function(request, response){
    response.sendFile('./views/joinRoom.html');
});

//监听用户连接事件
socketio.on('connection', function(socket){
    //设置房间id（id自己设置，根据具体情况而定）
    var roomid = 'room_1';

    //将用户加入房间
    socket.on('join', function(data){
        //用户加入房间
        socket.join(roomid);
        //对房间内的用户发送消息
        socketio.sockets.in(roomid).emit('system','hello,'+data+'加入了房间');//包括自己
        //socket.broadcast.to(roomid).emit('event_name', data);//不包括自己
    });

    socket.on('leave', function(data){
        //用户离开房间
        socket.leave(roomid);
        //向此用户发送信息
        socket.emit('leavehint','you are leave！')
    });

});
server.listen(9004);