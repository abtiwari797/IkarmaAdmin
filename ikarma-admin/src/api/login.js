import axios from "axios";
const one='https://ffradcwr8a.execute-api.us-east-2.amazonaws.com/AdminDeploy'
const two='https://vzon91r3ib.execute-api.us-east-2.amazonaws.com'
const login = async (credentials) => {


  // console.log(" process env ", process)



  return await axios.post(one+"/userlogin", 
    {
      // "emailId": "qanvustech@gmail.com",
      // "password": "Faiz@1234",
          "emailId": "rohit@gooddolphin.com",
      "password": "Welcome1@",
      //    "emailId": "balkrishna.meena@gooddolphin.com",
      // "password": "TempPassword123!",
      "fcmId": "fMr1004APUy1sjHnKlklz7:APA91bGDwK-DpGT7VbcFZJJuAN9JXdTlva5ghRciB8sIvB6O0AIE0sJj7SbLkG3M6O__ec1sH0JAs8he5zZ-o9KkPwj5go-gOYNenLPSIK8jVTtsKs-BiyNHUYG_Qoj7glUhnZ-ZznSK",
      "model": "modelid",
      "deviceVersion": "17.5.1",
      "manufacturer": "manuf",
      "deviceType": "1",
      "deviceId": "deviceId"
  }
);

// const token = `eyJraWQiOiJnUmhSY2RFT0x2eDFGYXltV1pTejVzVzVsQlAxSURmQVk5cHBlYmVyN0hnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMTFiOTViMC03MGIxLTcwMTItMjhlZC0zYTU3Zjk4Nzk4ZGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9oUzhqR3gxbk0iLCJjbGllbnRfaWQiOiI3ODY5czBlM3FzamFsc2Q5a21oZXJtcHUzIiwib3JpZ2luX2p0aSI6ImY5OGIzNTUyLWY4ZmItNDk5Mi05ZTVmLWZhYTdlY2M2MjJmNyIsImV2ZW50X2lkIjoiMjE5Yzk3NzQtYzc1MS00NDNmLWI1MDAtYzYyMzFjN2FhN2NkIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTczMjAxOTA1OCwiZXhwIjoxNzMyMTA1NDU4LCJpYXQiOjE3MzIwMTkwNTgsImp0aSI6IjY3ZTQwYmEwLWY4ODEtNDM1YS04OGNiLWI4MGQ4NDU4YWU4MiIsInVzZXJuYW1lIjoiYWRtaW4ucm9oaXQifQ.RtUxtTHtQ9T4PrlkpY4h4U4e1JUudznNmeHHsiiXDYmfo0PuBFJUYRl-6whOwmBy4KbRImTj7LpAdRY1cclZWuFFAfPHut2RMcRYPvZPO-ni0nn9eGUzRUnX6utW1wzLsj6vY4rvYztt3EuBYveAjb2WpdINM1VVAuV6Q0mY_0ItHEKmafoFJYCl1PVsnzxvfKTGK6I2T0_7HlGhBbq1ZGvI2dqRHLCT-4hAJveYmGyyT75SFXODW95RoN6wUhv7xHSnCi_UYhvLgatrrFn_mlNjPgCxrsbo-FkYKULjnRAh_Vgo-jrZ1lA5ccu7g0zW6pEdvaQweVxluLEAYngP-Q`
   
// const values= {
//   company_name: "newCompany202",
//   city: 38729,
//   state: 1,
//   country: 70,
//   address1: "542",
//   address2: "aligajfdjs",
//   hr_email: "newCompanyHR202@gmail.com", //hr_email
//   hr_first_name: "HR200",
//   hr_last_name: "Last Name",
//   // "nomination_id": 92,
//   website_url: "www.qanvustech.com",
// }
// console.log(" create company ",values)

// const response = await axios.post(
//   "https://umbznza169.execute-api.us-east-2.amazonaws.com/nomination/addCompany",
//  values,
//   {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   }
// );


// const accessToken = responselogin?.data?.token.AccessToken;


// console.log(" access token  ",accessToken)

//   const response = await axios.get(
//     one+"/hr/home/list/company_id?pageSize=20&pageNumber=1",
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );
//   // Map the nominations data from response
//   console.log("Hr Nomination Result ",response)


// const responseList = await axios.get(
//   one+"/hr/eventlist",
//   {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   }
// );

// console.log("responseList",responseList)



};

export default login;




// {
//   "message": "Successfully logged in",
//   "token": {
//       "AccessToken": "eyJraWQiOiJnUmhSY2RFT0x2eDFGYXltV1pTejVzVzVsQlAxSURmQVk5cHBlYmVyN0hnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMTFiOTViMC03MGIxLTcwMTItMjhlZC0zYTU3Zjk4Nzk4ZGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9oUzhqR3gxbk0iLCJjbGllbnRfaWQiOiI3ODY5czBlM3FzamFsc2Q5a21oZXJtcHUzIiwib3JpZ2luX2p0aSI6IjI3MDAzZWIxLWQ5N2YtNGI0Ny04YjEzLTIxYWQwYzk1ZTZiNSIsImV2ZW50X2lkIjoiMDljYzQxNzUtYTdlNC00NGFjLTgwOTctNWZlNjk3NDg0NWY3IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTczMjAxODg0NywiZXhwIjoxNzMyMTA1MjQ3LCJpYXQiOjE3MzIwMTg4NDcsImp0aSI6IjMwZjViN2MyLTQ3NjMtNDAxMi1iNjdmLTQxY2JkNjU3YTkzNyIsInVzZXJuYW1lIjoiYWRtaW4ucm9oaXQifQ.OBVEoPO_s6aBMpX49dez_J7XgzEMSA_gbGONcrY8Do6UY2sktWDcrp4YUbz4-Rhxs2S60ytWYairmyDUYxMKUWZEwfE6KhcGugW2WsQudYsm6_NbWcCyfzqr77u8uZkygMIHFOBZfZVwMbneTRANgieuFMCy2S0atoQEV196WSos4JYEv3u8YtcN8ZvHrAjutdyfUVfWXo8yQPCVViYWDrZxMvuWlBZUTb2lLq1BvXSJBHQo_h5Qnk1PPTwmd76edRrQ2efjZZzk6yDwMonzjUqGfmnEp7NNCv61bcAyDcT6JJxsIPeQULWQLmCaAeYle2WZMCnI2D6y-iG7hMlrYA",
//       "RefreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.VhVqCANokDLlbaTLvGKSAIdLtLj2N5vRIOiHUXWhYqEq-Eps-Zi2ZhZxu_qVdkMS5QGUdUmDZaRJdyGA3oJNfvI2rKfdGqFY9w3lh0qbm5UDuc_Ehe85coR8PvEEYhnmABjtNKZPxEKvz6i1bnWmNANIlPA82iMCMMNhv5rkntaSE1uvn76z4mdAE3ElDUKWRWIBsak44L-iqwd-Mey1it0IXVK-BwTGsJZAEKDpcA3JgENZA6npSegau2n2e1PkURTx1S7Je26czwgMwxOflSpWj1I9NWV0d7ug89r_9fX2khkKrARInkzFk_okHT2VXukewrL7VGXkfkU1L0LOQg.8YoYsPuG6M1B3E40.yFzld0Gx8rxc0rgQkWwpx1fmK_EWzknt1ZirEE1w5DwtYic7LcbjTV4CQ1L9d1QEzyem_SniVd3fwCipiUxO223SrG7A-Oy7s4z_uS0SUDzxjH0dgH8umcFbMlBk50CJiLuEE4faEuYAALagooN-gr0OPL-Q1F310FaM3fSY5dSttQYiZVW19rVZpZ-q3q0yzgRVe-J93eC9GhQWSpGgDB28dikPcPlppfZy4spSoj1JxUV7WOUqA-AyGLPXB1mxZnqzodrK-aH7wCawIslKe8VgrhYsZZeoLQLWqF_FtfKvvkYdTmaRvxBlU4mxhiWaPJKJ_hfZMfbMWF1pngw7usnHybl6_FIroDDbOsOGkDNSRobWwYsWWCTrc_2J70NEmIbDx9bFNp7zhUIbhVZxJQzoPGyH8bu08IqkvCHTvlAwbPfC1IvvHPmAsPyJdxBnc_tCXK9fG_AABLir0i9-fKQPOq2MQuIAanBtUKzYXFINjc-KCRX9s_qdbqj0eg_bjMNaTE0YlaKoSOaHudFb9IBZZJtqmM2FY5ZRnbBWZIEeUnpamdoU7GRMqRd9_nomq3s-kYcyC33dvNiNfhHCDx2lsyr6g0wCFpjwTXxNmnalyaujF5RCu0XhjMpbNF2pXH51vvC58PHGHV1Wxf6OJ1qbmxDQ_i-SOuhdJftQpijs-2okFI4IY1RgFXWbDSrmcyPdVB0VF45f7s9DiPflqKpeMNt9aSUKrhGrN9s6ooWoeu8ByjGf-t3oWUR0sMKSemdMiU6LuRjxp024_BaRzi4IhLp5bybiBwPe-PUYifC5kDmMZoDo0-Uj97GQz0uRPZfLINK11FaADKrdK8KG6yKLG__KVbGIe4GaWMK0zTyvX5PDZ-oYL6K2edjS4krQNXpjI1uvyrge-sAhZYzUzyYPCpXzv3BbRLi3VFYifqJhdywZQVsmgF32XFTCK1dcmKLCssvxJcHd_0XBX2cPX-tanZHrOJplAk8kBIPFdXj2qs8hE11X2FKWREHGhaQHEaz3nHztraBAXF4nGJhtp3AydQxi9fVccWlOuOl5a0yvpQfMglJyFL9WYocwvOIRjLumlFgggrbc04cSZPa0q7-nSTSakmkbVLfn3Z7BQPavlccKbfV7aCQxiluWw1-wp4Y_qb1bNyJq7Ybxwe-_nypXuf21sM8LDkXAtlTcdpaVI96ChYpmY5asJEjYVEbCYI6sScR_vcy1LG3dFItTjvDC_G1SEdXx1mUl-4cHKwEIvSwOkLnVJP1z9HlNYqEiaGRsJXu0rgFzsg.9Wul_zTFsWIMNgvPrU9qoQ"
//   },
//   "resCode": 1
// }