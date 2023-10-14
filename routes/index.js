const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('home'));
router.get('/aboutme', (req, res) => res.render('aboutme'));
router.get('/projects', (req, res) => res.render('projects'));
router.get('/contactme', (req, res) => res.render('contactme'));

module.exports = router;
