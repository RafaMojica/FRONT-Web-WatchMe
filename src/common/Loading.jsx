import React from "react";

function Loading() {
  return (
    <div id="contenedor">
      <div className="contenedor-loader">
        <div className="loader1"></div>
        <div className="loader2"></div>
        <div className="loader3"></div>
        <div className="loader4"></div>
      </div>
      <div className="cargando">Cargando...</div>
    </div>
  );
}

export default Loading;
