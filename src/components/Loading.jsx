import React from "react";

const Loading = () => {
  return (
    <div className="overlay-loading d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-light" style={{width: 50, height: 50}} />
      <div className="fs-5 text-light user-select-none mt-3">Cargando…</div>
    </div>
  );
};

export default Loading;