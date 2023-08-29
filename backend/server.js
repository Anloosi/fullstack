const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const cors = require('cors')
const {notFound, errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 5000;

connectDB();

const app =express();

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  credentials: true,
})); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 
  'index.html')));
} else {
  app.get('/', (req, res) => res.send('Server is ready'));
}

  app.use(errorHandler);

  app.use(notFound);

  app.listen(port, () => console.log(`Server started on port ${port}`));


/*
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }))  */