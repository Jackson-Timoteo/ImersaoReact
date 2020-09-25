/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PagesDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hocks/useForm';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresInicias);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://cloudflix1.herokuapp.com/categorias';

    fetch(URL_TP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    // }, 4 === 1000);
  }, [

  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

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
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar:
        </Button>
      </form>

      {categorias.length === 0
      && (
      <div>
        {/* teste */}
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria}${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
