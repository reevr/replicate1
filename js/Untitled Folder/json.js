class json{
    constructor(url)
    {   
        this.request = new httpClient(url);
        this.response = null;
    }

    getMultiple()
    {
        var that = this;
        
         return new Promise(function(resolve,reject)
        {
           that.request.get().then(function(response){
            that.response = JSON.parse(response);
                resolve(that.response);
           },function()
            {
                reject("status : Unable to make  the request");
            });
        });
    }

    getSingle(id)
    {

        var that = this;
        return new Promise(function(resolve,reject)
        {
           that.request.get(id,null).then(function(response){
            that.response = JSON.parse(response);
                resolve(that.response);
           },function()
            {
                reject("status : Unable to make  the request");
            });
        });
    }

    search(searchString)
    {
        var that = this;
        return new Promise(function(resolve,reject)
        {
           that.request.get(null,searchString).then(function(response){
                that.response = JSON.parse(response);
                resolve(that.response);
           },function()
            {
                reject("status : Unable to make  the request");
            });
        });
    }

    create(dataInput)
    {
        var that = this;
        return new Promise(function(resolve,reject)
        {
           that.request.post(dataInput).then(function(response){
                that.response = JSON.parse(response);
                resolve(that.response);
           },function()
            {
                reject("status : Unable to make  the request");
            });
        });
    }

    edit(id,dataInput)
    {
        var that = this;
        return new Promise(function(resolve,reject)
        {
           that.request.put(dataInput,id).then(function(response){
                that.response = JSON.parse(response);
                resolve(that.response);
           },function()
            {
                reject("status : Unable to make  the request");
            });
        });
    }

    delete(id)
    {
        var that = this;
        return new Promise(function(resolve,reject)
        {
           that.request.delete(id).then(function(response){
                that.response = JSON.parse(response);
                resolve(that.response);
           },function()
            {
                reject("status : Unable to make  the request");
            });
        });
    }
    

}

