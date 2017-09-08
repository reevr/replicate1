class httpClient
{
    constructor(url)
    {
        if (url.slice(-1) != "/")
            url += "/";
    
        this.initial_url = url;
        this.url = url;
        this.http;
        this.method;
        this.data;
    }

    reset_url()
    {
        this.url = this.initial_url;
    }

    get(id=null,q=null)
    {
        this.http = new XMLHttpRequest();
        this.http.withCredentials = true;
        var that = this;
             
        that.method = "get";
        if (id == null)
            {
                if (q!=null)
                   this.url += "?q="+q;

            }
        else
            this.url += id;

        return new Promise(function(resolve,reject){
            that.http.open(that.method,that.url);
            that.http.setRequestHeader("content-type","application");
            that.http.onload = function()
            {
                if (1 || that.http.status == 200)
                    {
                        resolve(that.http.response);
                    }
                else
                    {
                        reject(that.http.statusText);                                
                    }
            };

            that.http.onerror = function()
            {
                    reject("Netwrok error");
            }

            that.http.send();
            that.reset_url();   
        });
    }

    post(data)
    {
        this.http = new XMLHttpRequest();
        this.http.withCredentials = true;

            this.method = "POST";
            var that = this;
            data = JSON.stringify(data);
        return new Promise(function(resolve,reject){
            that.http.open(that.method,that.url);
            that.http.setRequestHeader("content-type","application/json");
            that.http.onload = function()
            {
                if (that.http.status == 200)
                    {
                        
                        resolve(that.http.response);
                    }
                else
                    {
                        reject(that.http.statusText);                                
                    }
            };

            that.http.onerror = function()
            {
                    reject("Netwrok error");
            }

            that.http.send(data);
            that.reset_url();
        });
    }
    
        put(data,id)
        {
            this.http = new XMLHttpRequest();
            this.http.withCredentials = true;
                this.url += id;
                this.method = "put";
                var that = this;
                data = JSON.stringify(data);
            return new Promise(function(resolve,reject){
                that.http.open(that.method,that.url);
                that.http.setRequestHeader("content-type","application/json");
                that.http.onload = function()
                {
                    if (that.http.status == 200)
                        {
                            resolve(that.http.response);
                        }
                    else
                        {
                            reject(that.http.statusText);                                
                        }
                };
    
                that.http.onerror = function()
                {
                        reject("Netwrok error");
                }
    
                that.http.send(data);
                that.reset_url();
            });
        }

        deletedata(id)
        {
            this.http = new XMLHttpRequest();
            this.http.withCredentials = true;
                this.url += id;
                this.method = "delete";
                var that = this;
            return new Promise(function(resolve,reject){
                that.http.open(that.method,that.url);
                that.http.setRequestHeader("content-type","application/json");
                that.http.onload = function()
                {
                    if (1 || that.http.status == 200)
                        {
                    
                            resolve(that.http.response);
                        }
                    else
                        {
                            reject('that.http.statusText');                                
                        }
                };
    
                that.http.onerror = function()
                {
                        reject("Netwrok error");
                }
    
                that.http.send();
                that.reset_url();
            });
        }

        getMultiple()
        {
            
            var that = this;
            
             return new Promise(function(resolve,reject)
            {
               that.get().then(function(response){
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
               that.get(id,null).then(function(response){
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
               that.get(null,searchString).then(function(response){
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
               that.post(dataInput).then(function(response){
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
               that.put(dataInput,id).then(function(response){
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
               that.deletedata(id).then(function(response){
                    that.response = JSON.parse(response);
                    resolve(that.response);
               },function()
                {
                    reject("status : Unable to make  the request");
                });
            });
        }

}

