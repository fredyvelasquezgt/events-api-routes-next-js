function handler(req, res) {

    const eventId = req.query.eventId;

    if(req.method === 'POST') {
        //add server-side validation
        const {email, name, text} = req.body;
        if()
    }

    if(req.method === 'GET') {

    }
}

export default handler;