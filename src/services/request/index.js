import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class ZzkRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.request.use((res) => {
            return res.data
        })
    }

    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}


export default new ZzkRequest(BASE_URL, TIMEOUT)