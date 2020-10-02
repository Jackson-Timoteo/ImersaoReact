import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PagesDefault';
import useForm from '../../../hocks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();

  const { handleChange, values } = useForm({

  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Vídeo Cadastrado com Sucesso');
      }}

      >
        <FormField
          label="Titulo da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
      </form>

      <Button type="submit">
        Cadastrar:
      </Button>

      <Link to="/cadastro/categoria">
        Cadastro de novos Vídeos
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
