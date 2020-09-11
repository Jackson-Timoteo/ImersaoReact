import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PagesDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: ' valor'
    })
  }

  function handleChange(infosDoEvento){

    const { getAttribute, value } = infosDoEvento.target; 
      setValue(() => {getAttribute('name')}, value);
  }

   return (
     <PageDefault>
       <h1>
          Cadastro de Categoria: {values.nome} 
        </h1>
 
       <form onSubmit={function handleSubmit(infosDoEvento){
         infosDoEvento.preventDefault();
         setCategorias([
            ...categorias,
            values
         ]);

         setValues(valoresInicias)
       }}>

      <FormField
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />
  
  
          <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.descricao}
                nome="descrição"
                onChange={handleChange}
              />
            </label>
          </div>

          <FormField
            label='Cor'
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

         <Button>
           Cadastrar:
         </Button>
       </form>

       <ul>
         {categorias.map((categoria, indice) => {
           return (
             <li key={`${categoria}${indice}`}>
                {categoria.nome}

             </li>
           )
         })}
       </ul>
 
       <Link to="/">
         Ir para home
       </Link>
     </PageDefault>
   )
 }
 
 export default CadastroCategoria; 