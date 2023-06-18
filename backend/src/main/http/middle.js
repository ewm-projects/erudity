import morgan from "morgan"

import { env } from "../common/env.js"
import Logger from "../common/logger.js"

// src: https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342
const httpLogger = () => {

    // stream options
    const stream = {write: (message) => Logger.http(message)} // override default with winston Logger
    const skip = () => env.NODE_ENV === "production"; // skip logging if production

    // Create new token
    morgan.token("body", (req, res) => JSON.stringify(req.body))

    return morgan(":method :url :body", {stream, skip})
}

const errorHandler = (error, req, res, next) => {
    res.status(503).json({status: 503, cause: "Server Error", error: error.message})
}

const unknownEndpoint = (req, res) => {
    res.status(404).json({ status: 404, error: "Unknown endpoint" });
};

const middlewares = {
    httpLogger, errorHandler, unknownEndpoint
}

export default middlewares