import app from "./config/app";
import env from './environment'
import * as http from 'http'


const port = env.getPort();
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});