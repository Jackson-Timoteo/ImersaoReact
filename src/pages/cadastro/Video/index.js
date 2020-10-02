import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PagesDefault';
import useForm from '../../../hocks/useForm';
import FormField from '../../../components/FormField';

function CadastroVideo() {
  const { handleChange, values } = useForm({

  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <form>
        <FormField
          label="Titulo da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
      </form>

      <Link to="/cadastro/categoria">
        Cadastro de novos Vídeos
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
