const { Server } = require("socket.io");
let ioStorage = {};
let io = {};

// Function to establish a Socket.IO connection
function connectIO(server) {
    try {
        // Create a new Socket.IO server
        io = new Server(server, {
            cors: {
                origin: ["http://localhost:3000"],
                methods: ["GET", "POST"],
            },
        });

        // Handle socket connection
        io.on("connection", (socket) => {
            console.log("A user connected");
            socket.data.userId = socket.handshake?.auth?.userId;
            socket.data.userRole = socket.handshake?.auth?.userRole;
            ioStorage[socket.data.userId] = { socketId: socket.id };

            if (
                socket.data.userRole === "admin" ||
                socket.data.userRole === "moderator"
            ) {
                console.log("Admin joined the 'admins-room'");
                socket.join("admins-room");
            }

            // Handle user disconnect
            socket.on("disconnect", () => {
                console.log("User disconnected");
                // Remove user data from storage on disconnect
                delete ioStorage[socket.data.userId];
            });

            // Handle new order event
            socket.on("newOrder", (order) => {
                io.in("admins-room").emit("newOrder", order);
            });

            // Handle order actualization event
            socket.on("orderActualization", (userId, order) => {
                const orderClientSocket = ioStorage[userId]?.socketId;
                if (orderClientSocket) {
                    io.to(orderClientSocket).emit("orderActualization", order);
                }
            });
        });
    } catch (error) {
        console.error("Socket.IO Error:", error);
    }
}
function emitNewOrder(order) {
    io.in("admins-room").emit("newOrder", order);
}

function emitOrderActualization(userId, order) {
    const orderClientSocket = ioStorage[userId]?.socketId;
    if (orderClientSocket) {
        io.to(orderClientSocket).emit("orderActualization", order);
    }
}
module.exports = { connectIO, emitNewOrder, emitOrderActualization }