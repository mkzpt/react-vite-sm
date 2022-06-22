import React from "react";
import IconUI from "../components/IconUI";
import Loading from "../components/Loading";
import TextError from "../components/TextError";
import Cards from "../components/Cards";
import { TbLogout } from "react-icons/all";
import useAuth from "../context/useAuth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const { global, getUsers, logout } = useAuth();
  const { data, error, isLoading } = useQuery(["users"], getUsers);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="fs-3 text-light fw-bold user-select-none m-2">
            Bienvenido: {global.username}
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <div className="cursor-pointer" onClick={() => {
                  logout();
                  navigate("/", { replace: true });
                }}>
                  <IconUI size={30} color={"#FFF"}>
                    <TbLogout />
                  </IconUI>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="home_container">


        {isLoading ? 
          <Loading /> 
        : null}

        {error ? 
          <TextError message={error.message} />
        : null}

        {data ? 
          <div className="gallery">
            <Cards data={data} />
          </div>
        : null}


      </div>

    </>
  );
}
