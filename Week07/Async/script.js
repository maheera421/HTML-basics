
/*function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}
function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
    
}

myCalculator(5, 5, myCallback);*/

/*function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}

let myPromise = new Promise(function (resolve, reject){
    let x = 0;
    if (x==0){
        resolve("Promise handled successfuly.")
    }
    else{
        reject("Promise failed.")
    }

})


myPromise.then(
    function(value)
    {
        myDisplayer(value)
    },
    function(error){
        myDisplayer(error)
    }
)*/

const urlGET = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/'
const sc = document.getElementById('demo');

const fetchData = () =>{
    fetch(urlGET, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}



