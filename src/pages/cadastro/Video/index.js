import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PagesDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <Link to="/cadastro/categoria">
        Cadastro de novos Vídeos
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
