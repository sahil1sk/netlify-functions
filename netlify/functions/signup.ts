import { Handler, HandlerEvent } from "@netlify/functions";
import Airtable from "airtable";

// ================== How to get this app key, table key and api key ==================
// 1. Go to airtable site
// create your table go inside it and just copy the full url from browser
// https://airtable.com/appltuaWURcr30ETY/tblGhjxJw7xaMIbgs/viwwt21vxUC8tNrBu?blocks=hide (it will something like this)
// It's first part is app key (appltuaWURcr30ETY), second part is table key (tblGhjxJw7xaMIbgs)
// Api key is important go to account generate your api key there.
// ======================================================================================
// Here how we set api key in netlify
// => netlify env:set AIRTABLE_API_KEY <your_api_key>

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