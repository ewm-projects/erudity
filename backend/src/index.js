import { env } from "./common/env.js";
import Express from "./http/app.js";
import Logger from "./common/logger.js";

const main = async () => {
    Logger.info('Hello world!');
    Logger.info("Port", env.PORT)
    Logger.info(`NODE ENV ${env.NODE_ENV}`)
    
    try {
        Logger.info(await Express.start())
        throw new Error("Test error!")
    } catch (e) {
        Logger.error("Failed to start application")
        throw e
    }
}

main().catch((e) => Logger.error(e.message))