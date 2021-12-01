import http from "./http-common";

class UsersService {

    signupUser(data) {
        return http.post(`/Users`, data);
    }

    getUsers() {
        return http.get(`/Users`);
    }
    getUser() {
        return http.get(`/User`);
    }
}

export default new UsersService();
