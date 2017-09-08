

class Product{
    constructor(url)
    {
        this.data;
       this.request;
       this.url = url;
    }

    search(str)
    {
        this.request = new httpClient(this.url);
        this.request.search(null,str).then(function(response)
        {
                response = JSON.parse(response);
            document.getElementsByClassName('list')[0].childNodes[1].innerHTML = "";
           
            for (i=0;i<response.length;i++)
                {
                    var alt = (Math.floor((Math.random() * 10) + 1)%3==0?"alt-div":"");
                    var html = `<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 item">
                    <div class="container-fluid box">
                        <div class="row">
                            <div class="col-md-12 image">
                                    <div class="btn btn-default price">$1200</div>  <img src="images/thumb.jpg"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 desc">
                                <h4>
                                    wcfwfwfwefwfewfwe
                                </h4>
                                <h6>
                                     Tue 2017 ,19
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>`;

                 
                if (response[i].name != undefined)
                    {
                        document.getElementsByClassName('list')[0].childNodes[1].innerHTML+=html;
                    }  
                }
                if (response.length == 0)
                    document.getElementsByClassName('list')[0].childNodes[1].innerHTML = "    <h1> No products available</h1>    ";
        });
    }

    show_all()
    {

        this.request = new httpClient(this.url);
        this.request.getMultiple().then(function(response)
        { 
            if(response.length ==0)
                document.getElementsByClassName('thirdrow')[0].innerHTML = "<h1> No items </h1>";
            else
                document.getElementsByClassName('thirdrow')[0].innerHTML = "";
             var i;
            for (i=0;i<response.length;i++)
                {

                console.log(response[i].id);
                    var html = `<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 item">
                    <div class="container-fluid box">
                        <div class="row">
                            <div class="col-md-12 image">
                                    <div class="btn btn-default price">$` + response[i].price + `</div>
                                    <div class="btn btn-default close">Delete</div>
                                    <div class="btn btn-primary edit"><span class="glyphicon glyphicon-edit"></span></div>
                                    <input id="id" type="hidden" value="` + response[i].id +`"/>
                                    <img src="images/thumb.jpg"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 desc">
                                <h4>
                                    ` + response[i].description + `
                                </h4>
                                <h6>
                                     `+ response[i].name +`
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>`;

                 if (response[i].name != undefined)
                    {
                        document.getElementsByClassName('thirdrow')[0].innerHTML+=html;
                    }
                   
                }
                
        });
    }

    show_one(id)
    {
        this.request = new httpClient(this.url);
        this.request.getSingle(id,"").then(function(response)
        {
            response = JSON.parse(response);
            
            document.getElementById("pname").innerHTML=response.name;
            document.getElementById("pdesc").innerHTML=response.description;
            document.getElementById("showid").value=response.id;            
            
        }
                
        );
    }

    
    create(data)
    {
        this.request = new httpClient(this.url);
        this.request.post(data).then(function(response)
        {
             window.location = "../index/index.html";
        },function(response)
        {
            window.location = "../index/index.html";
        }); 
    }

    edit(data,id)
    {
        this.request = new httpClient(this.url);
        this.request.put(data,id).then(function(response)
        {
            window.location = "../index/index.html";
        },function()
        {
            window.location = "../index/index.html";
        }); 
    }

    delete(id)
    {
        this.request = new httpClient(this.url);
        
        this.request.deletedata(id).then(function(response)
        {
           page.show_all();
        },function(response)
        {
            console.log(response);
           ///page.show_all();
        }); 
    }

    loadeditdata(id)
    {
        this.request = new httpClient(this.url);
        this.request.get(id).then(function(response)
        {
            response = JSON.parse(response);
            console.log(response);
            $("form #inputName").val(response.name);
            $("form #inputDescription").val(response.description);
            $("form #inputCategory").val(response.category);
        }); 
    }

    loadcategorydata(str)
    {
        this.request = new httpClient(this.url);
        this.request.get().then(function(response)
        {
            var i;
            var list = [];
            response = JSON.parse(response);
            for (i=1;i<response.length;i++)
                {
                    
                    if (response[i].category.indexOf(str)!= -1)
                        {
                            list.push(response[i].category);
                        }
                }


        $(".category-list").html("");
                for (i=0;i<list.length;i++)
                    {
                        $(".category-list").append("<li>"+ list[i] +"</li>");
                    }
                    if (str == "")
                        $(".category-list").html("");

        }); 
    }


}
