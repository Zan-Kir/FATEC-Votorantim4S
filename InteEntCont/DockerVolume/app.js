const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
