var x = {
    "taco": "bell",
    "burrito": 4,
    "beefy": ["cheese", "nachos"]
};
    console.log(x["taco"]);
//    

var y = {
    "boy": "friend",
    "girl": 80,
    "happy": ["birthday", "dear"]
};
    console.log(y.happy);
//

var z = {
    "GD": 69,
    "Young": "Bae",
    "Big": ["Bang", "Yo"]
};
    console.log(z["GD"]);

    // Functions with Arrays as arguments

    // function homeBoy(burger, king) {
    //     console.log(burger, king);
    // }

    // homeBoy("French", "Fries");


    //
// var ice = [2,4,6,8];

// var total = 0;

//     function cake(arg1, arg2) {
// for (var i = 0; i < ice.length; i++) {
//     total += ice[i]
//     console.log(ice[i]);
// }
//     }
//     console.log(total);

var ice = [2,4,6,8]
//
var total = 0;

for (var i = 0; i < ice.length; i++) {
    total += ice[i]
    console.log(ice[i]);
}
console.log(total);

// REVIEW WITH DAVID OR AUSTIN BRUH

// LAST QUESTION FROM HOMEWORK 07/13/20

var consoleArray = [1, 'a', 2, 'b', 3, 'c']

function consoleAnArray(myFirstArgument) {
    for(var i = 0; i < myFirstArgument.length; i++) {
        console.log(myFirstArgument[i])
    }
}

consoleAnArray(consoleArray);