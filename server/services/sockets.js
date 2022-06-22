module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');
    socket.on('userCoordinates', (coords) => {
      console.log(coords);
      socket.broadcast.emit('newUserCoordinates', coords);
    });
  });
};
