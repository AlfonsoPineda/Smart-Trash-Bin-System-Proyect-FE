import http from "./http-common";

class ContainersService {

    addContainer(data) {
        return http.post(`/Containers`, data);
    }

    getContainers() {
        return http.get(`/Containers`);
    }
    getContainer(data) {
        return http.post(`/Container`, data);
    }
    updateContainer() {
        return http.post(`/Container`);
    }

}

export default new ContainersService();
