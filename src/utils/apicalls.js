import baseURL from './api';
export {
    getAllAforoBicicletas, 
    getSingleAforoBicicletas, 
    getAllAforoPersonas, 
    getSingleAforoPersonas, 
    getAllBicicletasDisponibles, 
    getSingleBicicletasDisponibles, 
    getAllContaminacionAcustica, 
    getSingleContaminacionAcustica, 
    getAllContenedores, 
    getSingleContenedores, 
    getAllInstalacionesFotovoltaicas,
    getSingleInstalacionesFotovoltaicas
};
function getAllAforoBicicletas(){
    return baseURL.get('/aforobicicletas').then(res => res.data);
}
function getSingleAforoBicicletas(id){
    return baseURL.get('/aforobicicletas/'+{id}).then(res => res.data);
}
function getAllAforoPersonas(){
    return baseURL.get('/aforopersonas').then(res => res.data);
}
function getSingleAforoPersonas(id){
    return baseURL.get('/aforopersonas/'+{id}).then(res => res.data);
}
function getAllBicicletasDisponibles(){
    return baseURL.get('/bicicletasdisponibles').then(res => res.data);
}
function getSingleBicicletasDisponibles(id){
    return baseURL.get('/bicicletasdisponibles/'+{id}).then(res => res.data);
}
function getAllContaminacionAcustica(){
    return baseURL.get('/contaminacionacustica').then(res => res.data);
}
function getSingleContaminacionAcustica(id){
    return baseURL.get('/contaminacionacustica/'+{id}).then(res => res.data);
}
function getAllContenedores(){
    return baseURL.get('/contenedores').then(res => res.data);
}
function getSingleContenedores(id){
    return baseURL.get('/contenedores/'+{id}).then(res => res.data);
}
function getAllInstalacionesFotovoltaicas(){
    return baseURL.get('/instalacionesfotovoltaicas').then(res => res.data);
}
function getSingleInstalacionesFotovoltaicas(id){
    return baseURL.get('/instalacionesfotovoltaicas/'+{id}).then(res => res.data);
}

