import express from 'express';
import 'dotenv/config';
import path from 'path';
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
