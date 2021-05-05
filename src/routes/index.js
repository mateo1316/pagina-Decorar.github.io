const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { Name, Email, Phone, Message } = req.body;

    contentHTML = `
        <h1>Informacion del cliente Decorar</h1>
        <ul>
            <li>Cliente: ${Name}</li>
            <li>Email eletronico: ${Email}</li>
            <li>celular: ${Phone}</li>
        </ul>
        <p>${Message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'marianabarbosapipe@gmail.com',
            pass: 'yzmlfkdqgfpvbkzv'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"pagina de local" <marianabarbosapipe@gmail.com>', 
        to: 'slintrons@hotmail.com',
        subject: 'la pagina',
        html: contentHTML
    })

    console.log('Message enviado', info.messageId);

    res.redirect('/index.html');
});

module.exports = router;