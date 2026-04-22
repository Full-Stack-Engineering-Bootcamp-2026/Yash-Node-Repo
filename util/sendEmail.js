const sgMail =  require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID);

 const   sendEmail = async (email) => {
  const msg = {
    to: email,
    from: 'yash.kalange@mindbowser.com', 
    subject: "Hello from Baner gaon ",
    text: "This is email from Yash",
    html: "<h1> kesa hai bhai ?</h1>",
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendEmail