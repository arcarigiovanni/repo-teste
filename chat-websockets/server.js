const express = require('express');
const app = express();

const http = require('http').Server(app);
const serverSocket = require('socket.io');

let num = 5
if (num !=5){
    print("num diferente de 5")
}

