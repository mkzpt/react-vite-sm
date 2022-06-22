import axios from "axios";


export const services = (method, service = undefined) => {

    switch (method) {
        case "GET":

            let url = service;

            return axios.get(url).then((r) => {
                return response(r)
            }).catch((err) => {
                return response(err.response);
            });

        default:
            break;
    }
}



const response = (r) => {
    if (r === undefined) {
        return false;
    }

    if (r.status === 401) {
        window.localStorage.clear();
        window.location.replace('/');
        return false
    }

    if (r.status === 200 || r.status === 201) {
        return { status: r.status, data: r.data }
    }
    return { status: r.status, errors: r.data.error }
} 