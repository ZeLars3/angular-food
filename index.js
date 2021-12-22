const app = require('./app');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the beginning of nothingness'
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
