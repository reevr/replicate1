$(document).ready(function()
{
        var mode;
        var page = new Product('http://localhost:3000/products/');

        page.show_all();

        $("body").on("click",".delete",function()
        {
        var id = $(this).parent().parent().find("#id").val();
        page.delete(id);
        });


        $("body").on("click",".edit",function()
        {
            mode = 2;
        var id = $(this).parent().parent().find("#id").val();
            $("form #id").val(id);
        page.loadeditdata(id);

        $(".edit-create").fadeIn();
        });

        $(".edit-create .close").click(function()
        {
        $(".edit-create").fadeOut();
        });

        $(".edit-create #submit").click(function(){
            
            var name =   $("form #inputName").val();
             var desc =   $("form #inputDescription").val();
              var price =  $("form #inputPrice").val();
            
            if (mode  == 2)
                {
                    var id = $("form #id").val();
                    page.edit({"name" : name,"desc" : desc,"price" : price},id);
                }
            else
                {   
                    page.create({"name" : name,"desc" : desc,"price" : price});
                }
                $(".edit-create").fadeOut();
        });

        $(".add").click(function()
        {
            mode = 1;
            $("form #inputName").val("");
            $("form #inputDescription").val("");
            $("form #inputPrice").val("");
            $(".edit-create").fadeIn(); 
        });

        $("#inputSearch").keyup(function()
        {
            val = $(this).val();
            
            page.search(val);
        });


});