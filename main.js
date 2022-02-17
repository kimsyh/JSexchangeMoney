let currencyRatio = {
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22972.50
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.4
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1
    },

}


let fromCurrency = 'USD';
let toCurrency = 'USD';

document.querySelectorAll("#from-currency-list a").forEach((menu) => 
    menu.addEventListener("click", function(){
        document.getElementById("from-btn").textContent = this.textContent;
        fromCurrency = this.textContent;
        convert()
    })

);


document.querySelectorAll("#to-currency-list a").forEach((menu) => 
    menu.addEventListener("click", function(){
        document.getElementById("to-btn").textContent = this.textContent;
        toCurrency = this.textContent;
        convertRe()
    })

);

function convert(){
    let amount = document.getElementById("from-input").value;
    let covertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

    console.log("환전결과1" + covertedAmount);
    document.getElementById("to-input").value =covertedAmount
}

function convertRe(){
    let amount = document.getElementById("to-input").value;
    let covertedAmount = amount / currencyRatio[toCurrency][fromCurrency];

    console.log("환전결과2" + covertedAmount);
    document.getElementById("from-input").value =covertedAmount
}

