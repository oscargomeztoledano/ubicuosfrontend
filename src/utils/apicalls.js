import API from './api';
export  {
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
    return API.get('/aforobicicletas').then(res => res.data);
}
function getSingleAforoBicicletas(id){
    return API.get('/aforobicicletas/'+{id}).then(res => res.data);
}
function getAllAforoPersonas(){
    return API.get('/aforopersonas').then(res => res.data);
}
function getSingleAforoPersonas(id){
    return API.get('/aforopersonas/'+{id}).then(res => res.data);
}
function getAllBicicletasDisponibles(){
    return API.get('/bicicletasdisponibles').then(res => res.data);
}
function getSingleBicicletasDisponibles(id){
    return API.get('/bicicletasdisponibles/'+{id}).then(res => res.data);
}
function getAllContaminacionAcustica(){
    return API.get('/contaminacionacustica').then(res => res.data);
}
function getSingleContaminacionAcustica(id){
    return API.get('/contaminacionacustica/'+{id}).then(res => res.data);
}
function getAllContenedores(){
    return API.get('/contenedores').then(res => res.data);
}
function getSingleContenedores(id){
    return API.get('/contenedores/'+{id}).then(res => res.data);
}
function getAllInstalacionesFotovoltaicas(){
    return API.get('/instalacionesfotovoltaicas').then(res => res.data);
}
function getSingleInstalacionesFotovoltaicas(id){
    return API.get('/instalacionesfotovoltaicas/'+{id}).then(res => res.data);
}

