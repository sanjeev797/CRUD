const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routers/userRoutes');
require('dotenv').config();

const app = express();
const port = 3000;

connectDB();
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
