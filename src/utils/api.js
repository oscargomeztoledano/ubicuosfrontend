import axios from "axios";
import config from "../config";

export default axios.create({
    URL: config.api // Referencia a la url de la API
});