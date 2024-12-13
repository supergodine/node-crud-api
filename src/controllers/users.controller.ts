import { Request, Response } from 'express';
import sequelize from '../database'; // Importando diretamente a instância do sequelize
import User from '../models/user.model'; // Importando o modelo User corretamente

// Função para buscar usuários
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll(); // Usando Sequelize para buscar todos os usuários
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
};

// Função para criar um usuário
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body; // Desestruturando name e email do corpo da requisição
    const newUser = await User.create({ name, email }); // Usando Sequelize para criar um novo usuário
    res.status(201).json(newUser); // Retornando o novo usuário com status 201
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};
