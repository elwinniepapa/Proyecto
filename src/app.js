const server = require('./server/server');
require('dotenv').config();
require('./database/config')

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
})