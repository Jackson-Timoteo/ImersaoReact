import config from '../config';

const URL_CATEGORIES = `${config.URL_BE_TP}/categoria?_embed=videos`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível carregar os dados:(');
    });
}

export default {
  getAllWithVideos,
};
