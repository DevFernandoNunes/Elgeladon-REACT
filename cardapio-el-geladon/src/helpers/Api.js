const PaletaContext = {
  paletaEndpoint: () => `${Api.baseUrl}/paletas`, // Endereço vindo da const Api
  paletaLista: () => `${PaletaContext.paletaEndpoint()}/all-paletas`, //Retorna todas as paletas da coleção
  paletaById: (id) => `${PaletaContext.paletaEndpoint()}/one-paleta/${id}`, // Retorna apenas uma paleta selecionada
  createPaleta: () => `${PaletaContext.paletaEndpoint()}/create-paleta`, // Cria uma pelata
  updatePaletaById: (id) =>
    `${PaletaContext.paletaEndpoint()}/update-paleta/${id}`, // Atualiza uma paleta
  deletePaletaById: (id) =>
    `${PaletaContext.paletaEndpoint()}/delete-paleta/${id}`, // Deleta um paleta
};

export const Api = {
  baseUrl: "https://projeto2-api-elgeladon-fernando-nunes.onrender.com", // Aqui vai a base da url da api
  ...PaletaContext, //Spred operator
};
