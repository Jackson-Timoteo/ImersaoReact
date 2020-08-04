import React from 'react';
import PageDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
      <PageDefault>
         <h1>Cadastro de Vídeos</h1>

         <Link to="/cadastro/categoria">
            Cadastro de Categorias
         </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;