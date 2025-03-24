import express from 'express';
import Cart from '../Models/Cart.js';

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});


router.get('/:userId', async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving cart items' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedCartItem = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: 'Error updating cart item' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: 'Error removing item from cart' });
  }
});

export default router;
