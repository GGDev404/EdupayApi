import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
  // Get the token from the request headers
  const authHeader = req.headers.authorization;

  // Check if the token exists
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const token = authHeader.split(' ')[1];
    // Verify the token
    const decoded = jwt.verify(token, process.env.secretJwt);

    // Attach the decoded token to the request object
    req.user = decoded;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}


export default authMiddleware;