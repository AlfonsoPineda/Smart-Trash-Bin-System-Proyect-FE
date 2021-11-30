import http from "./http-common";

class ContainersService {

    addContainer(data) {
        return http.post(`/Containers`, data);
    }

    getContainers() {
        return http.get(`/Containers`);
    }

}

export default new ContainersService();
