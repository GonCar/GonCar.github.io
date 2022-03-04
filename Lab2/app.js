const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];

app.get('/', (req, res) =>{
    const html = `<h1>Welcome</h1>`;
    res.send(html);
});

app.get('/courses', (req, res) =>{
    res.send(courses);
});

app.get('/courses/:id', (req, res) =>{
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Invalid ID given");
    }
    res.send(course);
});

app.post('/courses', (req, res) => 
{
    if(!req.body.name){
        res.status(400).send('The body cannot be empty');
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.post('/something',(req,res) => {
    const email = req.body.email;
    const age = req.body.age;
    const gender = req.body.gender;
    res.status(200).json({
        msg: "email been saved",
        email,
        age,
        gender
    });
});
app.put('/courses/:id', (req, res) =>{
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Invalid ID given");
    }
    course.name = req.body.name;
    res.send(course);
});

port = 3000;
app.listen(port, () =>{
    console.log("Listening on port " + port);
});