import axios from "axios";
import config from "../config";

export default axios.create({
    baseURL: "http://localhost:5000"// Referencia a la url de la API
});