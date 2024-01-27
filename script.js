var add = document.querySelectorAll("[id='addit']");
var less = document.querySelectorAll("[id='subst']");
var quant =document.querySelectorAll("[id='quant']");
var Totalitems=document.getElementById('Totalitems')
var Totalprice=document.getElementById('Totalprice')
var priceI=document.querySelectorAll("[id='priceI']")
var priceD=document.getElementById('priceD')
var die=document.querySelectorAll("[id='die']")
var del=document.querySelectorAll("[id='remove']")
var alltr=document.getElementById('alltr')
var heartchange=document.querySelectorAll("[id='heartchange']")


heartchange.forEach((el,i)=>{
    var  inti=true
    el.addEventListener('click',function(){
        if(inti===false){
            inti=true
            el.innerHTML='<i class="fa fa-heart "  id="heartchange" ></i>'
        }
        else if(inti===true)
        {
            inti=false
            el.innerHTML='❤'
        }
    })}
)
    
add.forEach((el,i)=>{
    var initial= Number(priceI[i].innerHTML)
    el.addEventListener('click', function() {
        quant[i].innerHTML++
        priceI[i].innerHTML=initial*Number(quant[i].innerHTML)
        Totalitems.innerHTML++
            
        var totalP=0
        priceI.forEach((el)=>{
            totalP=Number(el.innerHTML)+totalP
            return totalP}
        )
        Totalprice.innerHTML="$" + totalP 
        priceD.innerHTML="$"+(Number(Totalprice.innerHTML.slice(1))*0.9).toFixed(2) 
        })}
);
        
less.forEach((el,i)=>{
    var initial= Number(priceI[i].innerHTML)
    el.addEventListener('click', function() {
        if (quant[i].innerHTML > 1) {
            quant[i].innerHTML--;
            priceI[i].innerHTML=initial*Number(quant[i].innerHTML)
            Totalitems.innerHTML--
                
            Totalprice.innerHTML=Number(Totalprice.innerHTML)-initial
            priceD.innerHTML=(Number(Totalprice.innerHTML)*0.9)
        }
        else{
            window.alert("remove item instead")
        }
        })}
);
        
function upd() {
    for (let index = 0; index < die.length; index++) {
        var p=priceI[index].innerHTML
    }
    Totalprice.innerHTML= Totalprice.innerHTML.slice(1)-p
}
           
            
for (var i = 0; 0 < del.length; i++) {
    var button=del[i]
        button.addEventListener("click",function (event) {
            var btn=event.target
            btn.parentElement.parentElement.remove()
            upd()
        })
}