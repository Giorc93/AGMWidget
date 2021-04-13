//configuración del socket. Empleado para la carga en tiempo real de los productos generados.
//implementado en views/EcommercePage/Sections/SectionProduct

var io = require("socket.io-client");

export const socket = io.connect("https://app.agentemotor.com:3333", {
  transports: ["websocket"],
  secure: true,
});