class task {
    constructor(url){
        this.json = new json(url);
        this.response = null;
        this.html="";
    }

    loadlist()
    {
        this.json.getMultiple().then(function(response)
        {
            
        });
    }
}