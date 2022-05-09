import "./PaletaListaItem.css";
import { ActionMode } from "constants/index";

function PaletaListaItem({
  paleta,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge"> {quantidadeSelecionada} </span>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return <span className="PaletaListaItem__tag"> {mode} </span>;
  };

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  return (
    <div
      className={`PaletaListaItem ${
        mode !== ActionMode.NORMAL && "PaletaListaItem--disable"
      }`}
    >
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
        <div className="PaletaListaItem__preco">{paleta.preco.toFixed(2)}</div>
        <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  );
}

export default PaletaListaItem;
