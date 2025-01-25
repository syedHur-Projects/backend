const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
    let uri = "mongodb+srv://fa21bscs0091:hello123@cluster0.soz2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};

// Routes
app.get('/', (req, res) => {
    res.send('khsakdhsasdhaksdkahdkashdkakj!');
});

// Start server and connect to DB
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectDB();
});
