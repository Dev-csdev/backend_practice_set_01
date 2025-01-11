// 1. to use module-js 
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/test-arr', (req, res) => {
    const arr = [
        {
            id: 1,
            title: "Dev",
            content: "I am Dev"
        },
        {
            id: 2,
            title: "Vignesh",
            content: "I am Vignesh"
        },
        {
            id: 3,
            title: "Nipon",
            content: "I am Nipon"
        },
        {
            id: 4,
            title: "Mona Lisa",
            content: "I am Mona Lisa"
        },
    ];
    res.send(arr);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listen at ${port}`);
    }
);