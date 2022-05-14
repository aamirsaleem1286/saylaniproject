import axios from "axios";

const BASE_URL="http://localhost:4000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzM0MGQwM2U5YjJmNDhiMGQ1ZTkzMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzc5Njg3MiwiZXhwIjoxNjQ4MDU2MDcyfQ.056JbvvKyELArkXpx7_xUjQck7_hImyyRNafUcH0zRI";


export const publicRequest=axios.create({

    baseURL:BASE_URL
})
export const userRequest=axios.create({

    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})



// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// // const TOKEN =
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
//  TOKEN = currentUser?.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
//       header:{token:`Bearer ${TOKEN}`}})
