const express = require('express');
const { postHandler, getHandler } = require('../controllers/apiController');
const router = express.Router();

router.get('/bfhl', getHandler);
router.post('/bfhl', postHandler);
const app = express();

app.use(express.json());
module.exports = router;
app.post('/bfhl', (req, res) => {
    res.status(200).json({ message: 'POST request received' });
  });
  
  app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
  });
  
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });