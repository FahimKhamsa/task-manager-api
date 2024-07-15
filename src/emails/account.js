const postmark = require("postmark");
require("dotenv").config();

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

const sendWelcomeMail = (email, name) => {
  client.sendEmail({
    From: "fahimrahman@iut-dhaka.edu",
    To: email,
    Subject: "Thanks for joining in!",
    TextBody: `Welcome to the task app, ${name}. Let us know how you get along with the app.`,
  });
};

const sendCancelationMail = (email, name) => {
  client.sendEmail({
    From: "fahimrahman@iut-dhaka.edu",
    To: email,
    Subject: "Sorry to see you go!",
    TextBody: `Goggbye, ${name}. We hope to see you back sometime soon. Thank you!`,
  });
};

module.exports = { sendWelcomeMail, sendCancelationMail };
