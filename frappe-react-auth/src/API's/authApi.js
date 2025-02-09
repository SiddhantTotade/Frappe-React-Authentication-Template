import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/method/login`,
      {
        user: email,
        password: password,
      },
      { withCredentials: true },
    );

    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

export const logout = async () => {
  try {
    await axios.get(`${BASE_URL}/api/method/logout`, { withCredentials: true });
  } catch (err) {
    console.log("Logout Failed with error : ", err);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/method/frappe.auth.get_logged_user`,
      { withCredentials: true },
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
