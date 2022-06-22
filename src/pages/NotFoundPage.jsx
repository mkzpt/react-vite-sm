import React from "react";
import { TbError404 } from "react-icons/all";
import IconUI from "../components/IconUI";

export default function NotFoundPage() {
  return (
    <div className="login_container flex-column">
      <IconUI size={200} color={"#FFF"}>
        <TbError404 />
      </IconUI>

      <div className="fs-1 text-light fw-bold user-select-none mt-3">
        Página no encontrada
      </div>

      <div className="fs-5 text-light user-select-none mt-2">
        Lo sentimos, pero la página que busca no existe o no se puede encontrar.
      </div>
    </div>
  );
}
