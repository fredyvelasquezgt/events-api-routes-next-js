function handler(req, res) {
    if(req.method === 'POST') {
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')) {
            
        }
    }
}

export default handler;