import config from '../config';

const URL_CATEGORIES = `${config.URL_BE_TP}/categorias`;

function getAllWithVideos() {
  return fetch(URL - URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();

      return resposta;
    });
}

export default {
  getAllWithVideos,
};
