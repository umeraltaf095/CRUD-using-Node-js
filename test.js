import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// const user = {
//     id: '12345',
//     email: 'umer@email.com'
// }
// const secretKey = 'qw123'
// const token = jwt.sign(
// {id: user.id , email: user.email},
// secretKey,
// {expiresIn: '1h'}

// );

// console.log('JWT token' , token);

    
const secret = process.env.SECRET_KEY;

console.log(secret);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVtZlAZW1haWwuY29tIiwiaWF0IjoxNzQ4NDU4NTk4LCJleHAiOjE3NDg0NjIxOTh9.pszxvPIReXEhyY0fKKSYqLiDS9TTmjMW4j7V43qcC78";

const jwtToken = token ;
console.log(jwtToken);

try {
  const decoded = jwt.verify(token, secret);
  console.log("Decoded:", decoded);
  console.log("Token verified successfully");
} catch (err) {
  console.log("Error occurred:", err.message);
} 
    
    

