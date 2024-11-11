require('dotenv').config();  
const express = require('express');
const passport = require('passport');
const vehicleRoutes = require('./routes/vehicle');
const authRoutes = require('./routes/auth');
require('./middlewares/auth'); 

const app = express();

app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})