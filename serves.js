const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// OYUN İÇİNDEN ALDIĞINIZ API ANAHTARINI BURAYA YAZIN
const API_KEY = "17154dd5-81a9-476c-baca-78bb5a87bf53"; 
const WWO_API_URL = "https://api.wolvesville.com";

// Frontend (Arayüz) dosyalarını dışarıya aç
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Oyuncu Arama Köprüsü (Proxy Endpoint)
app.get('/api/search', async (req, res) => {
    const username = req.query.username;
    if (!username) return res.status(400).json({ error: "Kullanıcı adı gerekli" });

    try {
        // 1. İsimden ID bulma isteği
        const searchRes
      
