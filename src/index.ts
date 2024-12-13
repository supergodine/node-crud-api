import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
  });

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
