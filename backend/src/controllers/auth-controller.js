// src/controllers/auth.controller.js
import { registerUser, loginUser } from "../services/auth-service.js"

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    const user = await registerUser({ email, password, name });

    res.status(201).json({
      message: "Usuario creado",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email y password requeridos",
      });
    }

    const data = await loginUser({ email, password });

    res.json(data);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
