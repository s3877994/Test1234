var solanthu = 3;
function Kiemtraso(){
    var Luckynumber = document.getElementById("luckynumber").value;
    if (Luckynumber == "10"){
        alert("Dung roi")
    }
    else{
    solanthu --;
    alert ("Con "+solanthu+" lan thu. Vui long nhap lai")
    if (solanthu ==0){
        document.getElementById("luckynumber").disabled = true;
        return false;
        }
    }
}
