function saveData()
{
    var data=document.getElementById("username").value;
    // sessionStorage.setItem("dataKey",data);
    localStorage.setItem("dataKey",data);
}

function getData()
{
    alert('Data is:'+localStorage.getItem("dataKey"));
}