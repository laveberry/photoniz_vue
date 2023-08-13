//api user.js
import { request } from "./index";

export const callLogin = (data) => {
    console.log("로그인 호출 ", data);
    return request.post(`/v1/user/signIn`, data)
            .then(res => {
                alert("api 로그인 성공");
                console.log("login res", res);
            }).catch(err => {
                alert("api 로그인 실패 " + err);
            })

};
