import axios from "axios";
import config from "../config";

export default axios.create({
    baseURL: config.baseURL_API // Referencia a la url de la API
});