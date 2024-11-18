import axios from "axios";

const login = async (credentials) => {
  return axios.post("https://vzon91r3ib.execute-api.us-east-2.amazonaws.com/userlogin", {
    emailId: credentials.email,
    password: credentials.password,
    "fcmId": "fMr1004APUy1sjHnKlklz7:APA91bGDwK-DpGT7VbcFZJJuAN9JXdTlva5ghRciB8sIvB6O0AIE0sJj7SbLkG3M6O__ec1sH0JAs8he5zZ-o9KkPwj5go-gOYNenLPSIK8jVTtsKs-BiyNHUYG_Qoj7glUhnZ-ZznSK",
    "model": "modelid",
    "deviceVersion": "17.5.1",
    "manufacturer": "manuf",
    "deviceType": "1",
    "deviceId": "deviceId"
  });
};

export default login;
