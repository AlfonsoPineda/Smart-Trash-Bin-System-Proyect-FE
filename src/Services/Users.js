import http from "./http-common";

class UsersService {

    signupUser() {
        return http.post(`/Users`, data);
    }

    getUsers() {
        return http.get(`/Users`);
    }

}

export default new UsersService();
