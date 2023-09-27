const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('Uploaded'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploaded')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 10, // 10MB limit
    },
}).array('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).json(err);
        }

        return res.status(200).send(req.files);
    });
});

app.listen(8000, () => {
    console.log('App is running on port 8000');
});
