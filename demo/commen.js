var content = {};

if(typeof(Storage)!=="undefined"){
    function submitData(){
        content.user = document.getElementById("user").value;
        content.pwd = document.getElementById("passwd").value;
        localStorage.setItem("content", JSON.stringify(content));
    }


    function getData(){
        content = JSON.parse(localStorage.getItem("content"));
        console.log(content)
        document.getElementById("username").value = content.user
        document.getElementById("pwd").value = content.pwd
    }
}else{
    document.getElementById("result").innerHTML = "抱歉！您的浏览器不支持 Web Storage ...";
}

