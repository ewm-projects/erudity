import { env } from "./common/env.js";
import app from "./http/app.js";

const main = async () => {
    console.log('Hello world!');
    console.log("Port", env.PORT)
    console.log("NODE ENV", env.NODE_ENV)
    
    try {
        console.log(await app.start())
    } catch (e) {
        console.error("Failed to start application")
        throw e
    }
}

main().catch((e) => console.log(e.message))