import express from "express";

export const status = async (req, res) => {
    try {
      res.status(200).json({ message: 'Server Running' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

const router = express.Router();

router.get("/", status);

export default router;