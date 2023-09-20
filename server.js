// Импорты
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');

// Конфигурация
dotenv.config();
const staticFilesPath = path.join('/home/tnpexygoyu/domains/edweb.site/public_html');
const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
const secretKey = process.env.RECAPTCHA_SECRET_KEY;
const whitelist = ['https://edweb.site', 'http://edweb.site', 'https://www.edweb.site'];

// Инициализация приложения
const app = express();
// Middleware для 301 переадресации с www на non-www
app.use((req, res, next) => {
  const host = req.headers.host;
  if (host.startsWith('www.')) {
    return res.redirect(301, req.protocol + '://' + host.slice(4) + req.originalUrl);
  }
  next();
});

app.use(express.json());
app.use(express.static(staticFilesPath));
app.options('*', cors());

app.use(
  cors({
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);
// Contact-Form
app.post('/contact-form', async (req, res) => {
  const { name, email, subject, message, recaptchaToken, confirmation_of_conditions } = req.body;

  if (!confirmation_of_conditions) {
    return res.status(400).send({ success: false, message: 'You must confirm the conditions before submitting the form.' });
  }

  let transporter = nodemailer.createTransport({
    host: 's160.cyber-folks.pl',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'contact@edweb.site',
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: email,
    to: 'contact@edweb.site',
    subject: `Contact form - edweb.site`,
    html: `
    <div>
      <p style="font-weight: bold;">Feedback Form</p>
      <p style="font-weight: bold;">Name: <span style="font-weight: normal;">${name}</span></p>
      <p style="font-weight: bold;">Email: <span style="font-weight: normal;">${email}</span></p>
      <p style="font-weight: bold;">Subject: <span style="font-weight: normal;">${subject}</span></p>
      <p style="font-weight: bold;">Message: <span style="font-weight: normal;">${message}</span></p>
      </div>`,
  };

  try {
    const response = await axios.post(
      verificationURL,
      {},
      {
        params: {
          secret: secretKey,
          response: recaptchaToken,
        },
      }
    );

    if (!response.data.success) {
      return res.status(403).send({ success: false, message: 'reCAPTCHA verification failed. Are you a robot?' });
    }

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send({ success: false, message: 'Failed to verify reCAPTCHA or send email.' });
  }
});
// Brief-Form
app.post('/brief-form', async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    business_type,
    website_url,
    business_info,
    website_type,
    design_project,
    liked_sites,
    marketing_type,
    extra_services,
    dop_info,
    recaptchaToken,
    confirmation_of_conditions,
  } = req.body;

  if (!confirmation_of_conditions) {
    return res.status(400).send({ success: false, message: 'You must confirm the conditions before submitting the form.' });
  }

  let transporter = nodemailer.createTransport({
    host: 's160.cyber-folks.pl',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'contact@edweb.site',
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: email,
    to: 'contact@edweb.site',
    subject: `Brief form - edweb.site`,
    html: `
    <div>
      <p style="font-weight: bold;">Brief Form</p>
      <p style="font-weight: bold;">Step 1: Contact Information</p>
      <p style="font-weight: bold;">Name: <span style="font-weight: normal;">${first_name}</span></p>
      <p style="font-weight: bold;">Surname: <span style="font-weight: normal;">${last_name}</span></p>
      <p style="font-weight: bold;">Email: <span style="font-weight: normal;">${email}</span></p>
      <p style="font-weight: bold;">Phone: <span style="font-weight: normal;">${phone_number}</span></p>
      <p style="font-weight: bold;">Step 2: Information About Your Activity</p>
      <p style="font-weight: bold;">Type of Business: <span style="font-weight: normal;">${business_type}</span></p>
      <p style="font-weight: bold;">Website URL: <span style="font-weight: normal;">${website_url}</span></p>
      <p style="font-weight: bold;">Business Information: <span style="font-weight: normal;">${business_info}</span></p>
      <p style="font-weight: bold;">Step 3: Websites (Development, Creation, Modernization)</p>
      <p style="font-weight: bold;">Website Type: <span style="font-weight: normal;">${website_type.join(', ')}</span></p>
      <p style="font-weight: bold;">Design Project: <span style="font-weight: normal;">${design_project.join(', ')}</span></p>
      <p style="font-weight: bold;">Websites You Like: <span style="font-weight: normal;">${liked_sites}</span></p>
      <p style="font-weight: bold;">Step 4: Internet Marketing</p>
      <p style="font-weight: bold;">Type of Marketing: <span style="font-weight: normal;">${marketing_type.join(', ')}</span></p>
      <p style="font-weight: bold;">Step 5: Additional Services</p>
      <p style="font-weight: bold;">Additional Services: <span style="font-weight: normal;">${extra_services.join(', ')}</span></p>
      <p style="font-weight: bold;">Step 6: Additional Requests</p>
      <p style="font-weight: bold;">Additional Information: <span style="font-weight: normal;">${dop_info}</span></p>
    </div>`,
  };

  try {
    const response = await axios.post(
      verificationURL,
      {},
      {
        params: {
          secret: secretKey,
          response: recaptchaToken,
        },
      }
    );

    if (!response.data.success) {
      return res.status(403).send({ success: false, message: 'reCAPTCHA verification failed. Are you a robot?' });
    }

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send({ success: false, message: 'Failed to verify reCAPTCHA or send email.' });
    console.error('Error:', error);
  }
});

// Обработчик ошибок
app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'), err => {
    if (err) {
      console.error(err); // Логируем ошибку в консоль
      res.status(500).send('Internal Server Error'); // Отправляем статус 500
    }
  });
});

const PORT = process.env.NODE_ENV === 'production' ? 443 : 5000;
app.listen(PORT);

// copy public_html / package.json
// "postbuild": "cp -r build/* /home/tnpexygoyu/domains/edweb.site/public_html/"
