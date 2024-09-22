const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
const cors = require('cors');
app.use(cors());

// Sample route
app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

// POST route as per your requirements
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;
    
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowerCaseAlphabet = alphabets.filter(ch => ch === ch.toLowerCase()).sort().slice(-1);

    let fileValid = false;
    let fileMimeType = '';
    let fileSizeKb = 0;

    if (file_b64) {
        // Basic handling for file validity
        fileValid = true;
        fileMimeType = 'application/octet-stream'; // You could derive MIME type from base64
        fileSizeKb = (Buffer.from(file_b64, 'base64').length / 1024).toFixed(2);
    }

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowerCaseAlphabet,
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKb
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
