
function AgregarProductoCarrito(){

    const productId = $(_id).data("productId")
    console.log(productId)
    $.ajax({
    method: "GET",
    url: "/cart/637bb9f3f1a872a6e0f60e0e/"+productId,
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