const nodemailer = require("nodemailer");

const MY_EMAIL = "tugce.degentile@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MY_EMAIL,
    pass: process.env.EMAIL_PASSWORD, // Vercel'den gelen şifre
  },
});

const mailOptions = {
  from: MY_EMAIL,
  to: MY_EMAIL,
  subject: "İletişim Formu Mesajı",
  text: "Formdan gelen mesaj içeriği...",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("E-posta gönderildi: " + info.response);
  }
});
