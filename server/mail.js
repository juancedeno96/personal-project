const mailer = require('nodemailer')
const {Hello} = require('../hello_template')

const getEmailData = (to, first_name, template) => {
    let data = null,

    switch (template) {
        case 'hello':
            data={
                from: "Juan <cedenojj7@gmail.com",
                to,
                subject: `'Welcome!  ${first_name}`,
                html: Hello()
            }
            break;
    
        default:
            data
    }
    return data
}

const sendEmail = (to, first_name, type) => {
const smptTransport = mailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
})

const mail = getEmailData(to, first_name, type)

smptTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error)
    } else {
        console.log('email sent successfully')
    }
    smptTransport.close()
})

}

module.exports = {sendEmail}