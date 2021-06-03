const express = require('express');
    const app = express();
    let string = '';

    app.use(express.static('public'));
    app.use('/', express.static('public'));

    app.use(express.urlencoded({extended: true}));

    app.post('/', (req, res) => {
        console.log(req.body.name);
       // res.render("Hola " + req.body.name);
       res.send(`<h1>Hola ${req.body.name }!</h1>`)
      });

   

  
    app.listen(3000, () => console.log('Listening on port 3000!'))