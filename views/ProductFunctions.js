$( document ).ready(function() {
    Init()
});
function Init()
{
    $(document).on("click",".btnAddProduct",AgregarProductoCarrito)
    $(document).on("click",".btnDeleteProduct",deleteProduct)
    $(document).on("click",".btnDetailProduct",DetalleProducto)
    $(document).on("change","#cbxCategory",CargarCategoria)
}


function AgregarProductoCarrito(){
    const Productoid = $(this).data("_id")
    
    
    $.ajax({
    method: "POST",
    url: `/cart/${auxiliar}/`+Productoid,
    data: {},
    success: function (result) {
       
    },
    dataType: "json"
    });  
}


/* ******************** No mover ******************** */ 

function deleteProduct(){
    const Productoid = $(this).data("_id")
    
  
    $.ajax({
    method: "DELETE",
    url: "/product/"+Productoid,
    success: function (result) {
       alert("Producto borrado de la base de datos")
       location. reload()
    },
    dataType: "json"
    });  
}



function DetalleProducto(){
    const Productoid = $(this).data("productoid")
    $.ajax({
    method: "GET",
    url: "/product/"+Productoid,
    data: {},
    success: function (result) {
        //console.log(result);
    },
    dataType: "json"
    });  
}

function CargarCategoria(){
    window.location.href = "Product/categoria/"+$(this).val()
}

function redireccionar(pagina) {
    location.href = pagina;
  }