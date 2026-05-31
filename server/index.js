const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable Cross-Origin Resource Sharing so your Vite frontend can communicate with this backend
app.use(cors());
// Middleware to parse incoming JSON request bodies
app.use(express.json());

app.post('/api/reservations', async (req, res) => {
  const data = req.body;
  console.log('New Reservation Received:', data);

  if (!pool) {
    // Just return success for now so the frontend works
    return res.status(201).json({ 
      success: true, 
      message: 'Dev Mode: Reservation logged to console (No DB).' 
    });
  }
  
  // ... rest of your existing try/catch block for the database ...
});

/**
 * POST /api/reservations
 * Handles real-time customer table booking requests
 */
app.post('/api/reservations', async (req, res) => {
  const { customer_name, email, phone, guests, reservation_date, reservation_time, notes } = req.body;

  // Basic validation fallback
  if (!customer_name || !email || !phone || !guests || !reservation_date || !reservation_time) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing mandatory fields required to reserve a luxury table sequence.' 
    });
  }

  try {
    const queryText = `
      INSERT INTO reservations (customer_name, email, phone, guests, reservation_date, reservation_time, notes) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) 
      RETURNING *
    `;
    const values = [customer_name, email, phone, guests, reservation_date, reservation_time, notes];
    
    const result = await pool.query(queryText, values);
    
    // Return standard success structure matching frontend parsing parameters
    res.status(201).json({ 
      success: true, 
      message: 'Reservation recorded cleanly into secure cluster storage.',
      data: result.rows[0] 
    });
  } catch (err) {
    console.error('Database operational execution error:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Internal booking pipeline error encountered.' 
    });
  }
});

// Fallback configuration default targeting node 5000 environment matching documentation mapping
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[L'Étoile Atelier Engine] Running securely on port ${PORT}`);
});