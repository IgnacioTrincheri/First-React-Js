const ProductosApi = [{
    name: "Remera Lisa",
    type:"Remera",
    color: "Blanca",
    image: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
    size: "s-m-l"
},
{
    name: "Remera Lisa",
    type:"Remera",
    color: "Negro",
    image: "https://cuestablanca.vteximg.com.br/arquivos/ids/360393-1000-1500/remera-manga-corta-negro-4.jpg?v=637801799411900000",
    size: "s-m-l"
}, {
    name: "Remera Lisa",
    type:"Remera",
    color: "rojo",
    image: "https://http2.mlstatic.com/D_NQ_NP_629947-MLA48096395323_112021-Y.webp",
    size: "l-xl"
}, {
    name: "Remera Piqué",
    type:"Chomba",
    color: "Blanca",
    image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/110/871/products/chomba-blanca1-dbb1dd3532e91bc3fb16029413060169-1024-1024.jpg",
    size: "s-m-l"
}, {
    name: "Remera Piqué",
    type:"Chomba",
    color: "Negra",
    image: "https://http2.mlstatic.com/D_NQ_NP_603635-MLA46794058134_072021-W.jpg",
    size: "s-m-l"
}, {
    name: "Remera Piqué",
    type:"Chomba",
    color: "Azul",
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/073/633/products/b135ead9-a48d-4b2b-8534-c54523960ce9-e7c4c4369efa86254816395168488937-1024-1024.jpeg",
    size: "s-m-l"
}, {
    name: "Camiseta Oficial Selección Argentina 2022",
    type:"Seleccion",
    color: "Celeste y Blanca",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg",
    size: "s-m-l"
}, {
    name: "Camiseta Suplente Selección Argentina 2022",
    type:"Seleccion",
    color: "Violeta",
    image: "https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v3925886948759474626/products/HB9220_FR_Torso_eCom.jpg",
    size: "s-m-l"
}, {
    name: "Camisa Leñador",
    type:"Camisa",
    color: "Roja y Negra",
    image: "https://http2.mlstatic.com/D_NQ_NP_733987-MLC51791780721_102022-W.jpg",
    size: "s-m-l-xl-xxl"
}, {
    name: "Camisa Lisa",
    type:"Camisa",
    color: "Celeste",
    image: "https://http2.mlstatic.com/D_NQ_NP_692236-MLA50575290268_072022-W.jpg",
    size: "m-l"
}, {
    name: "Camisa Lisa",
    type:"Camisa",
    color: "Salmón",
    image: "https://calvinchile.vteximg.com.br/arquivos/ids/315306-470-620/label-1.jpg?v=637901716858430000",
    size: "s-m"
}, {
    name: "Camisa Lisa",
    type:"Camisa",
    color: "Blanca",
    image: "https://http2.mlstatic.com/D_NQ_NP_707988-MLA31132652426_062019-W.jpg",
    size: "s-m-l-xl"
}

]

export const getProductoById = (id) => {
    return ProductosApi[id];
}




export default ProductosApi