import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const ProductDataForm = () => {
    const [formData, setFormData] = useState({
        id:'',
        produto:'',
        categoria:'',
        preco:''
    });
// eslint-disable-next-line no-unused-vars

    const [responseMessage, setResponseMessage] = useState('');
    //criar um objeto para busca de produtos pelo ID

    //Tratar o evento change dos campos do form
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //Tratar o salvar / grava dados
    const handleSave = (e) => {
        console.log('Salvar o dados do produto - chamar o endpoint');
    };

    const handleClear = () =>{
        setFormData({
            id:'',
            produto: '',
            categoria: '',
            preco: ''
        });
        setResponseMessage('');
// eslint-disable-next-line no-unused-vars
    };

    const handleSearch = async () =>{
        //Chamar o endpoint de busca de produto pel id
        //Carregar o form
    };
    return (
        <div className = "user-account-form">
            <h3>Cadastro de Produtos</h3>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label>Id:</label>
                    <input
                        type = "text"
                        name = "id"
                        value={formData.id}
                        onChange={handleChange}
                        required>
                    </input>
                    <label>Produto:</label>
                    <input
                        type = "text"
                        name = "produto"
                        value={formData.produto}
                        onChange={handleChange}
                        required>
                    </input>
                    <label>Categoria:</label>
                    <input
                        type = "text"
                        name = "categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required>
                    </input>
                    <label>Preço:</label>
                    <input
                        type = "text"
                        name = "preco"
                        value={formData.preco}
                        onChange={handleChange}
                        required>
                    </input>
                </div>
                <div>
                    <button type="submit" className = "btn btn-primary" onClick={handleSave}>Salvar</button>
                    <button type="button" className = "btn btn-secondary" onClick = {handleClear}>Limpar</button>
                </div>  
            </form>
        </div>
    );
};

export default ProductDataForm;