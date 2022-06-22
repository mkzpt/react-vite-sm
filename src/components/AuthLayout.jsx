import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/useAuth";

const AuthLayout = () => {
  const { global, setGlobal } = useAuth();
  let isAuth = global.username ? true : false;

  // let token = window.localStorage.getItem('username');
  // if(token){
  //   setGlobal({...global, username: token});
  // }
  // return isAuth || token ? <Outlet /> : <Navigate to="/" />;

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default AuthLayout;
