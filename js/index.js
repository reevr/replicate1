
var page = new Product('http://localhost:3000/products/');

page.show_all();

$("body").on("click",".close",function()
{
    var id = $(this).parent().parent().find("#id").val();
    page.delete(id);
    

});

