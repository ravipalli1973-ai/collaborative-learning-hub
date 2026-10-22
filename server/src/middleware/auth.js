module.exports = function authGuard(req, res, next) {
  const authHeader = req.headers['authorization'];
  const expectedToken = process.env.API_TOKEN || 'supersecrettoken123';

  if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or missing token' });
  }
  next();
};