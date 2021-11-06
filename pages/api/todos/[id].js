import Cors from 'cors';
import initMiddleware from "../../../lib/init-middleware";
import axios from "axios";

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);

async function handler(req, res) {
    if (req.method === 'POST') {
        return res.status(201).json(res);
    } else if (req.method === 'PUT') {
        console.log('do')
        await cors(req, res);

        try {
            const response = await axios.put(`https://localhost:8080/todos/${req.query}`);
            console.log(response);
            res.status(200).json(response.data);
        } catch (error) {
            console.error(error)
            return res.status(error.status || 500).end(error.message)
        }

        // return res.status(200).json(res.data);
    }
}
