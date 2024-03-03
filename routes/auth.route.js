import express from 'express';
import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

const router = Router();
// All route
router.post('/register', register);
router.post('/login', login);

//test route
router.get('/test', requireSignIn, isAdmin, (req, res) => {
    res.send('Protected route');
    console.log('Protected route')
});

// user-protection route    
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true, message: 'user route authenticated' })
});

// admin-protection route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true, message: 'admin route authenticated' })
});

export default router;