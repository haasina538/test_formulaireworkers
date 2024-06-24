const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


let users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/formulaire', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and email are required');
    }

    
    const newUser = { id: users.length + 1, name, email };
    
    
    users.push(newUser);

    console.log(`User added:`, newUser);

   
    res.status(200).send('Form submitted successfully');
});


app.get('/users', (req, res) => {
    res.json(users);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});