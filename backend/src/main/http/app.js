import express from "express";
import "express-async-errors";

import { env } from "../common/env.js";
import middlewares from "./middle.js";
import router from "./router.js";

const create = () => {
    const app = express()

    app.use(express.json())
    app.use(middlewares.httpLogger())
    app.use(router)
    app.use(middlewares.errorHandler)
    app.use(middlewares.unknownEndpoint)
    
    return app
}

const start = () => {
    const app = create()

    const getUrl = (server) => {
        const address = server.address()
        const port = address.port !== 80 ? `:${address.port}` : "";
        let host = "";

        if (address.family === "IPv4" && address.address !== "0.0.0.0") {
            host = address.address;
          } else if (address.family === "IPv6" && address.address !== "::") {
            host = address.address;
          } else {
            host = "localhost";
          }
        
          return `http://${host}${port}/`;
    }

    return new Promise((resolve, reject) => {
        const server = app.listen(env.PORT);

        server.once("listening", () => resolve(`Server running on ${getUrl(server)}`))
        server.once("error", (err) => reject(new Error(`Server failed to start: ${err.message}`)));
    })
}

const Express = {create, start}

export default Express