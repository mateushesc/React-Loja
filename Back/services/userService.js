// ./services/userService.js
const auth = require('../auth');

const db = require('../models');

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }

    async create(email, data_nasc, password){
        try{
            const newUser = await this.User.create({
                email:email,
                data_nasc:data_nasc,
                password:password
            });
            return newUser? newUser : null;
            
        }
        catch (error){
            throw error;
        }
    }

    //Método para retornar todos os usuários
    async findAll()
    {
        try{
            const AllUsers = await this.User.findAll();
            return AllUsers? AllUsers : null;
        }
        catch(error){
            throw error;
        }

    }

    //Método para retornar o usuário pelo id
    async findById(id){
        try{
            const User = await this.User.findByPk(id);
            return User? User: null;
        }
        catch(error){
            throw error;
        }

    }

    //Método para login
    async login(email, password){
        try{
            const User = await this.User.findOne({
                where : {email}
            });
            //Se o usuário existe, ver se a senha está ok
            if(User){ 
               // preencher depois, porque a senha precisa ser criptografada 
               //Gerar o token do user
                const token = await auth.generateToken(User);
                User.dataValues.Token = token;
                User.dataValues.password = '';
            }
            return User? User:null;
        }
        catch(error){
            throw error;
        }

    }
}

module.exports = UserService;