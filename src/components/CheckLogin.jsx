import axios from "axios";
import { useEffect, useState } from "react";

async function getUser(token) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    const user = res.data;
    return { user };
  } catch (error) {
    return { error };
  }
}
export async function CheckLogin() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [userData, setUserData] = useState();

  const token = await sessionStorage.getItem("access-token");
  if (token) {
    try {
      const { user, error } = await getUser(token);
      if (error) throw new Error(error)
      setCheckLogin(true);
      setUserData(user)
    } catch (error) {
      return { error }
    }
  }
  setAuthToken(token)

  return { userData, authToken, checkLogin }
}
