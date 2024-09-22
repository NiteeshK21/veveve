const User = require('../models/User');
const multer = require('multer');

// File handling with multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST handler
exports.postHandler = async (req, res) => {
  const { data, file_b64 } = req.body;

  // Simulate validation and processing logic
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highest_lowercase_alphabet = alphabets.filter(a => a === a.toLowerCase()).sort().slice(-1);

  const user = {
    user_id: "john_doe_17091999", // Example user_id
    email: "john@xyz.com",
    roll_number: "ABCD123",
    is_success: true,
    numbers,
    alphabets,
    highest_lowercase_alphabet,
    file_valid: file_b64 ? true : false, // Example validation
    file_mime_type: "image/png", // Example MIME type
    file_size_kb: 400 // Example size in KB
  };

  res.json(user);
};

// GET handler
exports.getHandler = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};