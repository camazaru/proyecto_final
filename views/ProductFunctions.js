$( document ).ready(function() {
    Init()
});
function Init()
{
    $(document).on("click",".btnAddProduct",AgregarProductoCarrito)
    $(document).on("click",".btnDetailProduct",DetalleProducto)
    $(document).on("change","#cbxCategory",CargarCategoria)
}


function AgregarProductoCarrito(){
    const Productoid = $(this).data("name")
    
    
    $.ajax({
    method: "GET",
    url: "/cart/637bb9f3f1a872a6e0f60e0e/"+Productoid,
    data: {},
    success: function (result) {
        console.log(result);
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