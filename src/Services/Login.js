import http from "./http-common";

class LoginService {

    Login(data) {
        return http.post(`/Login`, data);
    }
    Logout(data) {
        return http.post(`/Logout`, data);
    }

    ValidateToken() {
        return http.post(`/ValidateToken`, data);
    }

}

export default new LoginService();
