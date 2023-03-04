// qutoes
let quotes = ["When you're suffering you are on the road to succes",
"We all die Alone", "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney", "“So remember Me; I will remember you. And be grateful to Me and do not deny Me.” Surah Baqarah Verse 152"
,"Indeed we belong to Allah, and indeed to Him we will return” Ayat 156"
];


// Selecting the elements

let field1 = document.querySelector("#box");



document.getElementById('red').addEventListener('click', function()
{
    document.getElementById('box').style.background="red";
    
    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random]);
    field1.innerHTML = quotes[random];
}
)






document.getElementById('yellow').addEventListener('click', function()
{
    document.getElementById('box').style.background="yellow";
    
    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random]);
    field1.innerHTML = quotes[random];

    

}

 )

document.getElementById('green').addEventListener('click', function() 
{
    document.getElementById('box').style.background="green";
    
    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random]);
    field1.innerHTML = quotes[random];
    
})


document.getElementById("blue").addEventListener('click', function() {
    document.getElementById('box').style.background="blue";
    
    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random]);
    field1.innerHTML = quotes[random];
    
})


function convert() {
    const weight = document.getElementById("input").value;
    const unit = document.getElementById("unit").value;
    let result;

    if(unit == "kg") {
        result = weight*2.4 +"kg";
    }
    else if (unit == "lb") {
        result = weight*0.4 + "lb";
    }
    document.getElementById("output").innerHTML = result;
}


function task3() {
    var input2 = document.getElementById("input_array").value;
    var numbers = input2.split(",");
    //console.log(numbers);

    var max = -Infinity;
    var min = Infinity;
    var sum = 0;

    for(var i = 0; i<numbers.length; i++) {
        number =  parseFloat(numbers[i]);

        sum = sum + number;

        if(number > max) {
            max = number;
        }

        if (number < min) {
            min =  number;
        }
        
    }
    var avg = sum/numbers.length;

    document.getElementById("sum").innerText = "Sum: "+sum;
    document.getElementById("avg").innerText = "Average: "+avg;
    document.getElementById("max").innerText = "Max: "+max;
    document.getElementById("min").innerText = "Min: "+min;

}




