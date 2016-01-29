/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(
    'smtps://fitter.app.beta@gmail.com:bluecakes@smtp.gmail.com');

module.exports = {

    attributes: {
        email: {
            type: 'string',
            required: 'true'
        }
    },

    afterCreate: function(newUser, next) {
        console.log(newUser);

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'Dylan Harness 👥 <fitter.app.beta@gmail.com>', // sender address
            to: newUser.email, // list of receivers
            subject: EmailTemplate.subject, // Subject line
            text: EmailTemplate.text, // plaintext body
            html: EmailTemplate.html // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            next();
            console.log('Message sent: ' + info.response);
        });


    }
};
