import { WebSocketServer , WebSocket } from "ws";
const wss = new WebSocketServer({ port : 8080 })

interface User {
    socket : WebSocket;
    room : string
}

let userCount = 0;
let allSockets : User[]= []

wss.on("connection", (socket)=>{
    // allSockets.push(socket)
    userCount += 1;
    // for(let i = 0 
    console.log("User connected #"+   socket);

    socket.on("message", (message)=>{
        console.log("hellooo", message)
        // @ts-ignore 
        const parsedMessage = JSON.parse(message);
        if(parsedMessage.type === "join"){
            allSockets.push({
             socket,
             room : parsedMessage.payload.room   
            })
        }
        if(parsedMessage.type == "chat"){
            let currentUserRoom = null;
            for(let i = 0; i < allSockets.length; i++){
                if(allSockets[i].socket == socket){
                    currentUserRoom = allSockets[i].room
                }
            }
            for(let i = 0; i < allSockets.length; i++){
                if(allSockets[i].room == currentUserRoom ){
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }
        }
        
    })
    // socket.on("disconnect", ()=>{
    //         allSockets = allSockets.filter( x => x != socket);
    // })
})



