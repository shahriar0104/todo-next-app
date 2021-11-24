async function index(req, res) {
    if (req.method === 'POST') {
        return res.status(201).json(res);
    } else if (req.method === 'PUT') {
        console.log('damn');
        return res.status(200).json(res);
    }
}
