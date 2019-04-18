// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function(ws) {
    console.log(`链接上 [SERVER] connection()`)
    ws.on('message', function(message) {
        console.log('服务端收到信息' + message);
        // 发送二进制数据
        if (message === 'binary') {
            console.log(`服务端收到请求二进制的数据 [SERVER] Received: ${message}`);
            const array1 = new Float32Array(5);
            for (var i = 0; i < array1.length; ++i) {
                array1[i] = i / 2;
            }
            // var blob = new Blob(['{name: "blob"}'],{type: 'application/json'});
            // ws.send(blob);
            ws.send(array1)
        }else {
            console.log(`服务端收到信息为字符串 [SERVER] Received: ${message}`);
            ws.send(`服务端发送信息 ECHO: ${message}`, (err) => {
                if(err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            })
        }
        
    })
})