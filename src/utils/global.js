var io = require("socket.io-client");

export const socket = io.connect("https://app.agentemotor.com:3333", {
  transports: ["websocket"],
  secure: true,
});