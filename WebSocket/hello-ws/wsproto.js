var ws = new WebSocket("wss://echo.websocket.org")

ws.onopen = function(evt) {
    console.log('Connection open ...');
    ws.send('链接发送');
}

ws.onmessage = function(mes) {
    console.log('客户端发送的信息' + mes.data);
    ws.close();
}

ws.onclose = function(mes) {
    console.log('链接关闭');
}