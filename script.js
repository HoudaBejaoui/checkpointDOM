// Selecting elements from the DOM
var add = document.querySelectorAll("[id='addit']");
var less = document.querySelectorAll("[id='subst']");
var quant = document.querySelectorAll("[id='quant']");
var Totalitems = document.getElementById('Totalitems');
var Totalprice = document.getElementById('Totalprice');
var priceI = document.querySelectorAll("[id='priceI']");
var priceD = document.getElementById('priceD');
var die = document.querySelectorAll("[id='die']");
var del = document.querySelectorAll("[id='remove']");
var alltr = document.getElementById('alltr');
var heartchange = document.querySelectorAll("[id='heartchange']");

// Event listener for heart icon changes
heartchange.forEach((el, i) => {
    var inti = true;
    el.addEventListener('click', function () {
        if (inti === false) {
            inti = true;
            el.innerHTML = '<i class="fa fa-heart "  id="heartchange" ></i>';
        } else if (inti === true) {
            inti = false;
            el.innerHTML = '❤';
        }
    });
});

// Event listener for increasing quantity and updating total prices
add.forEach((el, i) => {
    var initial = Number(priceI[i].innerHTML);
    el.addEventListener('click', function () {
        quant[i].innerHTML++;
        priceI[i].innerHTML = initial * Number(quant[i].innerHTML);
        Totalitems.innerHTML++;

        var totalP = 0;
        priceI.forEach((el) => {
            totalP = Number(el.innerHTML) + totalP;
            return totalP;
        });
        Totalprice.innerHTML = "$" + totalP;
        priceD.innerHTML = "$" + (Number(Totalprice.innerHTML.slice(1)) * 0.9).toFixed(2);
    });
});

// Event listener for decreasing quantity and updating total prices
less.forEach((el, i) => {
    var initial = Number(priceI[i].innerHTML);
    el.addEventListener('click', function () {
        if (quant[i].innerHTML > 1) {
            quant[i].innerHTML--;
            priceI[i].innerHTML = initial * Number(quant[i].innerHTML);
            Totalitems.innerHTML--;

            var totalP = 0;
            priceI.forEach((el) => {
                totalP = Number(el.innerHTML) + totalP;
                return totalP;
            });
            Totalprice.innerHTML = "$" + totalP;
            priceD.innerHTML = "$" + (Number(Totalprice.innerHTML.slice(1)) * 0.9).toFixed(2);
        } else {
            window.alert("Remove item instead");
        }
    });
});

// Function to update total prices and items after removing an item
function upd(t, i) {
    Totalprice.innerHTML = Number(Totalprice.innerHTML.replace("$", "")) - Number(t);
    Totalitems.innerHTML = Number(Totalitems.innerHTML) - Number(i);
    priceD.innerHTML = "$" + (Number(Totalprice.innerHTML.replace("$", "")) * 0.9).toFixed(2);
}

// Event listener for removing an item from the cart
for (var i = 0; i < del.length; i++) {
    var button = del[i];
    button.addEventListener("click", function (event) {
        var btn = event.target;
        console.log(btn.parentElement.parentElement);
        btn.parentElement.parentElement.remove();
        return upd(
            event.target.parentElement.parentElement.querySelector('#priceI').innerHTML,
            event.target.parentElement.parentElement.querySelector('#quant').innerHTML
        );
    });
}
