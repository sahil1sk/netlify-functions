import { Handler, HandlerEvent } from "@netlify/functions";
import Airtable from "airtable";

const { AIRTABLE_KEY } = process.env;
const base = new Airtable({ apiKey: AIRTABLE_KEY }).base('appltuaWURcr30ETY'); // Inside base the app key

// To run this file in root directory run command => netlify dev

const handler: Handler = async (event: HandlerEvent, context: any) => {
    try {
        const data = JSON.parse(event.body || "");
        if (!data.email) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Email is required"
                })
            }
        }

        // Inside base the table key where to create table
        await base('tblGhjxJw7xaMIbgs').create({
            Email: data.email,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Success"
            })
        }

    } catch (error: any) {
        return {
            statusCode: 500,
            body: error.message
        }
    }


}

export { handler };