class task
{
    constructor(html,url)
    {
        this.html = html;
        this.json = new json(url);
        this.list = [];
    }
    
    findVar()
    {
        var i,j,variable;
        for(i=0;i<this.html.length;i++)
            {
                if (this.html[i] + this.html[i+1] == "{{")
                { 
                    for (j=i+2;j<this.html.length;j++)
                        {
                            if (this.html[j] + this.html[j+1] == "}}")
                            {
                                break;
                            }
                           
                        }
                        
                        variable = $.trim(this.html.substring(i+2,j));
                                        
                            if (this.list.indexOf(variable))
                            this.list.push(variable);  
                                           
                }
            }
            
            console.log(this.list);
    }

    loadlist(parent)
    {
        var that= this;
        
        parent.innerHTML ="" ;
        this.json.getMultiple().then(function(response)
        {
            that.findVar();
            var i,j;
            
            that.html.replace("{{id}}","11111111111111111111");
            console.log(that.html);

            /*

                        for (i=0;i<response.length;i++)
                        {
                            var html = that.html;
                            for (j in response[i])
                               {
                                   console.log(response[i][j]);
                                    html.replace("id","sdcsd");
                                }
                            parent.innerHTML += html;   
                        }*/
                   

        });
    }
}


var a =  new task(`<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 item">
<div class="container-fluid box">
    <div class="row">
        <div class="col-md-12 image">
                <div class="btn btn-default price"> {{id}}   </div>
                
                <img src="images/thumb.jpg"/>
{{id}}
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
</div>
`,"http://localhost:3000/products");


var parent = document.getElementsByClassName("thirdrow")[0];
//a.loadlist(parent);