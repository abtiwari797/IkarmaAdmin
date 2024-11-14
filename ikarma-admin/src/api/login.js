import axios from "axios";

const login = async (credentials) => {
  return axios.post("https://vzon91r3ib.execute-api.us-east-2.amazonaws.com/userlogin", {
    emailId: credentials.email,
    password: credentials.password,
  });
};

export default login;
