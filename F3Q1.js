const car={
    name:"Mahindra bolero",
    model:'Neo N10',
    year:2022
}

function carDetails(){
    for(let carr in car){
        console.log(`${carr} : ${car[carr]}`)
    }
}
carDetails(car)