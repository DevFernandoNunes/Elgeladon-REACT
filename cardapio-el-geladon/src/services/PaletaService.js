import { Api } from "helpers/Api"; // Importar o helper que tem todos os dados

const parseResponse = (response) => response.json(); // Convertendo toda resposta que está vindo do backend em json

const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");

  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformPaleta);

export const PaletaService = {
  // Exportar o serviço
  getLista: () =>
    //Acionar o método http
    fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista), // fetch faz a requisição dos dados no backend
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseTransformItem),
  create: (paleta) =>
    fetch(Api.createPaleta(), {
      method: "POST",
      body: JSON.stringify(paleta),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseTransformItem),
  updtateById: (id, paleta) =>
    fetch(Api.updatePaletaById(id), {
      method: "PUT",
      body: JSON.stringify(paleta),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
};
