// auth.js jasopn
const jwt = require('jsonwebtoken');
const secret = '123'; //Ponto de vulnerabilidade porque a chave secreta não acessível
//Recomenda-se gravar em variáveis de ambiente do sistema operacional

//Método para gerar o token jwt
async function generateToken(user){
    const id = user.id;
    const email = user.email;
    const token = jwt.sign({id,email},secret, {expiresIn:'1h'});
    return token;
}

//método para verificar a validade do token jwt
async function verifyToken(req, res, next){
    //Extrair o cabeçalho (header) que contem o token jwt
    const authheader =req.headers['authorization'];
    if(!authheader){
        return res.status(401).json({Message:'Token não informado'});
    }
    //Extrair o token jwt
    const token = authheader.split(' ')[1];//Separar pelo espaço para ignorar a palavra 'Bearer'
    if(!token){
        return res.status(401).json({message:'Token não informado'});
    }
    //Verificar a validade
    jwt.verify(token, secret,(err, decoded)=>{
        if (err){
            //Caso ocorra erro
            return res.status(401).json({Message:'Token inválido'});
        }
        req.user = decoded;//Esta linha é opcional
        next();
    });
}

module.exports = {generateToken, verifyToken} ;














