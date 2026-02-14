import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'

export const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
            
    }
}