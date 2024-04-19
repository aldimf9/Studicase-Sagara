const jwt = require('jsonwebtoken');

function Auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Authorization header is required' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user_id = decoded.user_id;
    next();
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = Auth;
