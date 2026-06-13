import {CronJob} from "cron";

import http from "node:http";
import https from "node:https";

//every 14 mintunes send GET request to the health endpoint to keep the server awake
const job=new CronJob("*/14 * * * *", function (){
    // Send GET request to health endpoint

    const base =process.env.FRONTEND_URL;

    if(!base) return;

    const url =new URL("/health",base).href;
    const client =url.startsWith("https:") ? https : http;

    client.get(url, (res) => {
        if(res.statusCode === 200) console.log("GET request sent successfully");
        else console.log("GET request failed",res.statusCode);
    }).on("error", (e) => 
        console.error("Error occurred while checking health:", e.message));
    });

    export default job;