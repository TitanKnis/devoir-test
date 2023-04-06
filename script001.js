
function nombre(){
    ch=document.getElementById("T1").value
    l=document.getElementById("r1").checked
    c=document.getElementById("r2").checked
    s=document.getElementById("r3").checked
    if(ch=="" || ch.length<5 || !(l || c || s)){
        alert("donner des valeurs valid")
    }
    else{
        nl=0
        nc=0
        ns=0
        for(i=0;i<ch.length;i++){
            chi=ch.charAt(i).toUpperCase()
            chj=ch.charAt(i)
            if(chi>="A" && chi<="Z"){
                nl+=1
            }
            else if(chj>="0" && chj<="9"){
                nc+=1
            }
            else{
                ns+=1
            }
        }
        if(l){
            alert(nl)
        }
        if(c){
            alert(nc)
        }
        if(s){
            alert(ns)
        }
    }
}
