import axios from "axios";
import Cookies from "js-cookie";
import { LOGIN_URL } from "../utils/apiURLs";

const login = async (email, password) => {
  const res = await axios.post(LOGIN_URL, {
    email,
    password,
  });
  const token = res.data.token;
  Cookies.set("userToken", token);
  return token;
};

export { login };
