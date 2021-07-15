
console.log("Hooyah");
chrome.runtime.onMessage.addListener(function(req,sender,res){
    console.log(req);
    if(req.sl == "login"){
        $.ajax({
            url: "http://localhost:4000/user/login",
            data: req.idpass,
            type: 'post',
            
            error: function(response){
                console.log('response: ', response);
            }
            
        })
    }
    if(req.sl == "signup"){
        $.ajax({
            url: "http://localhost:4000/signup",
            data: req.idpass,
            type: 'post',
            success: function(response){
                console.log('response: ', response);
            },
            error: function(response){
                console.log('response: ', response);
            }
            
        })
    }
});


