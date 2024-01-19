//封装高阶组件
//有token正常跳转，没有token回到登陆

import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const token = getToken();

  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} replace />;
  }
};
