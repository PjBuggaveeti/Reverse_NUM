var frm = document.getElementById("form");
frm.onsubmit=function(){
    var original=document.getElementById("num").value;
    var ans=document.getElementById("result");
    var i, rev=0;
    while(original!=0){
        rev=(rev*10)+(original%10);
        original=parseInt(original/10);
    } 
    ans.innerHTML="Number after reversing is "+rev;
    return false;
}