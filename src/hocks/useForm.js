import { useState } from 'react';

function useForm(valoresInicias) {
  const [values, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: ' valor'
    });
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(() => { getAttribute('name'); }, value);
  }

  function clearForm() {
    setValues(valoresInicias);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
