import * as fs from 'fs';
import ConnectToMongo from './ConnectToMongo';
ConnectToMongo();
const FeedbackData = require("./searchhistoryschema")
export default async function Feedback(req, res) {
    try {
        if (req.method === "POST") {
            // console.log(req.body)
            const search = req.body
            console.log(search)
            // console.log(search);
            const feedbackcontent = new FeedbackData( search );
            const savedata = await feedbackcontent.save();
            console.log(savedata)
            res.json(savedata)
        }
    } catch (error) {
        console.log(error.message)
    }

}