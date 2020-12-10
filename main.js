// -------------------- Ejercicio 12 --------------------
function alg12() {
    let studentAmount = Number(document.querySelector("#alg12_numStudents").value);
    let subjectsAmount = Number(document.querySelector("#alg12_numSubjects").value);

    //alert(`studentAmount: ${studentAmount} | subjectsAmount ${subjectsAmount}`)
    for (i=1; i<=studentAmount; i++) {
        alert('Estudiante' + i)
        for (j=1; j<=subjectsAmount; j++) {
            alert('materia' + j)
        }

    }
}

// -------------------- Ejercicio 11 --------------------
let arrServiceType = [];
let arrTimeOfDay = [];
let arrCost = [];
let arrBuyersName = [];
let accumService1 = 0;
let accumService2 = 0;
let accumService3 = 0;
let accumService4 = 0;
let counterService1 = 0;
let counterService2 = 0;
let counterService3 = 0;
let counterService4 = 0;
let arrServiceType1 = [];
let arrTimeOfDayServiceType1 = [];
let counterServiceType1 = 0;
let arrServiceType2 = [];
let arrTimeOfDayServiceType2 = [];
let counterServiceType2 = 0;
let arrServiceType3 = [];
let arrTimeOfDayServiceType3 = [];
let counterServiceType3 = 0;
let arrServiceType4 = [];
let arrTimeOfDayServiceType4 = [];
let counterServiceType4 = 0;
let counterServiceTypeBigger = 0;
let nameByService1 = [];
let nameByService2 = [];
let nameByService3 = [];
let nameByService4 = [];

function alg11() {
    document.querySelector("#alg11Type").value = '';
    document.querySelector("#alg11TimeOfDay").value = '';
    document.querySelector("#alg11Cost").value = '';
    document.querySelector("#alg11BuyersName").value = '';
    
    let serviceType = document.querySelector("#alg11Type").value;
    let timeOfDay = document.querySelector("#alg11TimeOfDay").value;
    let cost = Number(document.querySelector("#alg11Cost").value);
    let buyersName = document.querySelector("#alg11BuyersName").value;

    arrServiceType.push(serviceType);
    arrTimeOfDay.push(timeOfDay);
    arrCost.push(cost);
    arrBuyersName.push(buyersName);

    // Valor producido por cada servicio
    arrServiceType.forEach((eachService,i)=> {
        switch (eachService) {
            case '1': 
                accumService1 += arrCost[i];
                counterService1++;
                break;
            case '2':
                accumService2 += arrCost[i];
                counterService2++;
                break;
            case '3':
                accumService3 += arrCost[i];
                counterService3++;
                break;
            case '4':
                accumService4 += arrCost[i];
                counterService4++;
                break;
        }
    })
    
    // Servicio que más veces se prestó
    
    arrServiceType.forEach((eachService, i)=> {
        switch(eachService) {
            case '1':
                arrServiceType1.push(eachService);
                arrTimeOfDayServiceType1.push(arrTimeOfDay[i]);
                nameByService1.push(arrBuyersName[i]);
                counterServiceType1++
                break;
            case '2':
                arrServiceType2.push(eachService);
                arrTimeOfDayServiceType2.push(arrTimeOfDay[i]);
                nameByService2.push(arrBuyersName[i]);
                counterServiceType2++
                break;
            case '3':
                arrServiceType3.push(eachService);
                arrTimeOfDayServiceType3.push(arrTimeOfDay[i]);
                nameByService3.push(arrBuyersName[i]);
                counterServiceType3++
                break;
            case '4':
                arrServiceType4.push(eachService);
                arrTimeOfDayServiceType4.push(arrTimeOfDay[i]);
                nameByService4.push(arrBuyersName[i]);
                counterServiceType4++
                break;
        }
    })
}

function alg11_print() {
    document.querySelector("#answerAlg11").innerHTML = `<h4>El valor total por cada tipo de servicio es:</h4>`;
    document.querySelector("#answerAlg11").innerHTML += `Servicio 1: $ ${accumService1} <br/> Servicio 2: $ ${accumService2} <br/> Servicio 3: $ ${accumService3} <br/> Servicio 4: $ ${accumService4}`;
    document.querySelector("#answerAlg11").innerHTML += `<h4>El número de veces que se prestó cada servicio fue de:</h4>`;
    document.querySelector("#answerAlg11").innerHTML += `Servicio 1: ${counterService1} veces <br/> Servicio 2: ${counterService2} veces <br/> Servicio 3: ${counterService3} veces <br/> Servicio 4: ${counterService4} veces`; 
    document.querySelector("#answerAlg11").innerHTML += `<h4>El servicio que más veces se prestó:</h4>`;

    document.querySelector("#answerAlg11").innerHTML += `<h4>Los nombres de los compradores por cada servicio son:</h4>`;
    document.querySelector("#answerAlg11").innerHTML += `Del servicio 1: ${nameByService1} <br/> Del servicio 2: ${nameByService2} <br/> Del servicio 3: ${nameByService3} <br/> Del servicio 4: ${nameByService4}`;



}
// -------------------- Ejercicio 10 --------------------
let arrId = [];
let arrName = [];
let arrCategory = [];
let arrCc = [];

function alg10() {
    let category = document.querySelector("#alg10Category").value;
    document.querySelector("#alg10Category").value = '';
    let cc = document.querySelector("#alg10Cc").value;
    document.querySelector("#alg10Cc").value = '';
    let name = '';
    let id = '';

    arrCategory.push(category);
    arrCc.push(cc);

    if (category != cc) {
        alert('Tu categoría y cilindraje deben coincidir')
    } else {
        name = prompt('Ingresa tu nombre');
        arrName.push(name);
        id = prompt('Ingresa tu ID');
        arrId.push(id);
    }
}

function alg10_print() {
    document.querySelector("#answerAlg10").innerHTML = `<h4>Los registrados por cada categoría son: </h4>`;

    arrName.forEach((eachName,i)=> {
        document.querySelector("#answerAlg10").innerHTML += `${eachName} Está registrado en la categoría ${arrCategory[i]} <br/>`;
    }) 

    document.querySelector("#answerAlg10").innerHTML += `<h4>El total de participantes aceptados es de:</h4>${arrName.length}`;
}

// -------------------- Ejercicio 9 --------------------
let arrAnacleto = [];
let accumAnacleto = 0;
let arrValloleidys = [];
let accumValloleidys = 0;
let arrTemistocles = [];
let accumTemistocles = 0;

function alg9_register() {
    let name = document.querySelector("#alg9Name").value;
    let howManySales = 0;
    let salesCounter = 1;
    let saleTipe = '';
    let saleTotal = 0;
    let commisionPaymentMethod = 0;
    let commisionTotal = 0;
    
    //Anacleto
    if (name === '1') {
        saleTotal = 0;
        commisionPaymentMethod = 0;
        commisionTotal = 0;

        howManySales = Number(prompt('¿Cuantas ventas realizó Anacleto?'));
        while (salesCounter <= howManySales) {
            saleTipe = prompt(`¿Cuál es el tipo de venta? (1: contado; 2: cheque; 3: tarjeta). Ha ingresado ${salesCounter} ventas.`);
            salePrice = Number(prompt('¿Cúal fue el total a pagar?'));
            comissionGeneral = salePrice * 0.07;
            switch (saleTipe) {
                case '1':
                    commisionPaymentMethod = (salePrice * 0.15);
                    break;
                case '2':
                    commisionPaymentMethod = (salePrice * 0.10);
                    break;
                case '3':
                    commisionPaymentMethod = (salePrice * 0.05);
                    break;
            }
            commisionTotal = comissionGeneral + commisionPaymentMethod;
            arrAnacleto.push(commisionTotal);
            accumAnacleto += commisionTotal;
            salesCounter++;
        }

    } 
     
    // Valloleidys
    if (name === '2') {
        saleTotal = 0;
        commisionPaymentMethod = 0;
        commisionTotal = 0;

        howManySales = Number(prompt('¿Cuantas ventas realizó Valloleidys?'));
        while (salesCounter <= howManySales) {
            saleTipe = prompt(`¿Cuál es el tipo de venta? (1: contado; 2: cheque; 3: tarjeta). Ha ingresado ${salesCounter} ventas.`);
            salePrice = Number(prompt('¿Cúal fue el total a pagar?'));
            comissionGeneral = salePrice * 0.07;
            switch (saleTipe) {
                case '1':
                    commisionPaymentMethod = (salePrice * 0.15);
                    break;
                case '2':
                    commisionPaymentMethod = (salePrice * 0.10);
                    break;
                case '3':
                    commisionPaymentMethod = (salePrice * 0.05);
                    break;
            }
            commisionTotal = comissionGeneral + commisionPaymentMethod;
            arrValloleidys.push(commisionTotal);
            accumValloleidys += commisionTotal;
            salesCounter++;
        }

    }  
     

    // Temistocles
    if (name === '3') {
        saleTotal = 0;
        commisionPaymentMethod = 0;
        commisionTotal = 0;

        howManySales = Number(prompt('¿Cuantas ventas realizó Temistocles?'));
        while (salesCounter <= howManySales) {
            saleTipe = prompt(`¿Cuál es el tipo de venta? (1: contado; 2: cheque; 3: tarjeta). Ha ingresado ${salesCounter} ventas.`);
            salePrice = Number(prompt('¿Cúal fue el total a pagar?'));
            comissionGeneral = salePrice * 0.07;
            switch (saleTipe) {
                case '1':
                    commisionPaymentMethod = (salePrice * 0.15);
                    break;
                case '2':
                    commisionPaymentMethod = (salePrice * 0.10);
                    break;
                case '3':
                    commisionPaymentMethod = (salePrice * 0.05);
                    break;
            }
            commisionTotal = comissionGeneral + commisionPaymentMethod;
            arrTemistocles.push(commisionTotal);
            accumTemistocles += commisionTotal;
            salesCounter++;
        }

    }
}

function alg9_print() {
    document.querySelector("#answerAlg9").innerHTML = `<h4>A Anacleto se le debe pagar:</h4> $ ${accumAnacleto.toFixed()}`
    document.querySelector("#answerAlg9").innerHTML += `<h4>A Valloleidys se le debe pagar:</h4> $ ${accumValloleidys.toFixed()}`
    document.querySelector("#answerAlg9").innerHTML += `<h4>A Temistocles se le debe pagar:</h4> $ ${accumTemistocles.toFixed()}`

}
// -------------------- Ejercicio 8 --------------------
// Definición de variables para lectura de datos
let driversName = [];
let birthDay = [];
let gender = [];
let registration = [];


// Definición de variables para impresión de informes
let womenLessThan30 = [];
let regInMedName = [];
let regInMedAge = [];


function alg8() {
    driversName.push(document.querySelector("#alg8Name").value);
    birthDay.push(document.querySelector("#alg8Number").value);
    gender.push(document.querySelector("#alg8Gender").value);
    registration.push(document.querySelector("#alg8Register").value);
    alg8_delete();
}

function alg8_delete() {
    document.querySelector("#alg8Name").value = '';
    document.querySelector("#alg8Number").value = '';
    document.querySelector("#alg8Gender").value = '';
    document.querySelector("#alg8Register").value = '';
}

function alg8_print() {
    console.log(driversName);
    console.log(birthDay);
    console.log(gender);
    console.log(registration);
}

function alg8_printResults() {
    document.querySelector("#alg8Name").value = '';
    document.querySelector("#alg8Number").value = '';
    document.querySelector("#alg8Gender").value = '';
    document.querySelector("#alg8Register").value = '';

    // Punto a) womenLessThan30
    let age = 0;

    let currentYear = new Date().getFullYear();
    gender.forEach((oneGender, i) => {
        if (oneGender === '1') {
            age = currentYear - Number(birthDay[i]);
            if (age < 30) {
                womenLessThan30.push(driversName[i]);
                document.querySelector("#answerAlg8").innerHTML = `<h4>a) Las mujeres menores de 30 años son:</h4> ${womenLessThan30} <br/>`
            }
        }
    })
    // Punto b) Nombres y edades carros registrados Medellín
    document.querySelector("#answerAlg8").innerHTML += `<h4>b) Los carros que están registrados en Medellín le pertenecen a:</h4>`
    registration.forEach((oneRegistration, i) => {
        if (oneRegistration === '1') {
            age = currentYear - Number(birthDay[i]);
            regInMedName.push(driversName[i]);
            regInMedAge.push(age);
        }
    })

    regInMedName.forEach((oneName, i) => {
        document.querySelector("#answerAlg8").innerHTML += `${oneName}, de ${regInMedAge[i]} años.<br/>`
    })

    // Punto c) c.	Porcentaje de conductores menores de 25 años.
    document.querySelector("#answerAlg8").innerHTML += `<h4>El Porcentaje de conductores menores de 25 años es de:</h4>`

    let driversCounterLess25 = 0;
    let driversLess25Percentage = 0;

    birthDay.forEach((oneYear) => {
        age = currentYear - Number(oneYear);
        if (age < 25) {
            driversCounterLess25++;
        }
    })
    driversLess25Percentage = driversCounterLess25 * 100 / birthDay.length;
    document.querySelector("#answerAlg8").innerHTML += `${driversLess25Percentage.toFixed(1)}%`

    // Punto d) Porcentaje de conductores del sexo femenino.
    document.querySelector("#answerAlg8").innerHTML += `<h4>El Porcentaje de conductores del sexo femenino es de:</h4>`
    let driversCounterWomen = 0;
    let driversLess25WomenPercentage = 0;

    gender.forEach((oneGender) => {
        if (oneGender === '1') {
            driversCounterWomen++;
        }
    })
    driversLess25WomenPercentage = driversCounterWomen * 100 / gender.length;
    document.querySelector("#answerAlg8").innerHTML += `${driversLess25WomenPercentage.toFixed(1)}%`

    // Punto e) Porcentaje de conductores masculinos con edades entre 12 y 30 años.
    document.querySelector("#answerAlg8").innerHTML += `<h4>El Porcentaje de conductores masculinos con edades entre 12 y 30 años es de:</h4>`
    let driversCounterMenLessThan30 = 0;
    let driversCounterMenLessThan30Percentage = 0;

    gender.forEach((oneGender) => {
        age = currentYear - Number(birthDay[i]);
        if (oneGender === '2' && age >= 12 && age <= 30) {
            driversCounterMenLessThan30++;
            console.log(driversCounterMenLessThan30)
        }
    })
    driversCounterMenLessThan30Percentage = driversCounterMenLessThan30 * 100 / gender.length;
    document.querySelector("#answerAlg8").innerHTML += `${driversCounterMenLessThan30Percentage.toFixed(1)}%`

    // Punto f) Porcentaje de conductores cuyos carros están registrados fuera de Medellín.
    document.querySelector("#answerAlg8").innerHTML += `<h4>El Porcentaje de conductores cuyos carros están registrados fuera de Medellín es de:</h4>`
    let registrationOutsideMedCounter = 0;
    let registrationOutsideMedPercen = 0;

    registration.forEach((oneRegistration) => {
        if (oneRegistration === '2')
            registrationOutsideMedCounter++;
    })
    registrationOutsideMedPercen = registrationOutsideMedCounter * 100 / registration.length;
    document.querySelector("#answerAlg8").innerHTML += `${registrationOutsideMedPercen.toFixed(1)}%`

}

// -------------------- Ejercicio 7 --------------------
let arrAlg7 = [];

for (i = 0; i < 20; i++) {
    arrAlg7[i] = Math.round(Math.random() * (100 + 1), 1);
    document.querySelector("#answerAlg7_1").innerHTML += `${arrAlg7[i]} `
}

function alg7() {
    let numberSearched = 0;

    numberSearched = Number(document.querySelector("#alg7Number").value);

    for (i = 0; i < arrAlg7.length; i++) {
        if (numberSearched === arrAlg7[i]) {
            document.querySelector("#answerAlg7_2").innerHTML = `El número ${arrAlg7[i]} se encontró en la posición ${arrAlg7.indexOf(numberSearched)}`
        }
    }
}

// -------------------- Ejercicio 6 --------------------
function alg6() {
    let arrName = [];
    let arrAge = [];

    for (i = 0; i < 3; i++) {
        arrName[i] = prompt('Ingresa 10 nombres');
    }
    for (i = 0; i < 3; i++) {
        arrAge[i] = Number(prompt('Ingresa las edades para cada uno de los 10 nombres'));
    }
    for (i = 0; i < 3; i++) {
        document.querySelector("#answerAlg6").innerHTML += `${arrName[i]} tiene ${arrAge[i]} años </br>`;
    }
}

// -------------------- Ejercicio 5 --------------------
function alg5() {
    let arr1 = [];
    let sum = 0;
    let average = 0;

    for (i = 0; i < 10; i++) {
        arr1[i] = Number(prompt('Ingresa 10 números'));
        sum += arr1[i];
        average = sum / arr1.length;
    }
    document.querySelector('#answerAlg5').innerHTML = `El primedio es: ${average.toFixed(2)}`;
}

// -------------------- Ejercicio 4 --------------------
function alg4() {
    let arr1 = [];
    let arr2 = [];

    for (i = 0; i < 5; i++) {
        arr1[i] = Number(prompt('Ingresa 5 números'));
    }

    for (i = 0; i < 5; i++) {
        arr2[i] = arr1[i] * 2;
    }
    document.querySelector('#answerAlg4').innerHTML = `Los números ingresados, multiplicados por 2 son: ${arr2}`;
}

// -------------------- Ejercicio 3 --------------------
function alg3() {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for (i = 0; i < 5; i++) {
        arr1[i] = Number(prompt('Ingresa 10 números'));
        console.log(arr1)
    }
    for (i = 0; i < 5; i++) {
        arr2[i] = Number(prompt('Ingresa 10 números'));
        console.log(arr2)
    }
    arr3 = arr1.concat(arr2);
    document.querySelector('#answerAlg3').innerHTML = `Los números ingresados son: ${arr3}`;
}

// -------------------- Ejercicio 2 --------------------

let alg2Counter = 0;
let alg2BiggestNum = 0;

let arrAlg2 = []

for (let i = 0; i < 100; i++) {
    arrAlg2[i] = Math.round(Math.random() * (99), 1);
    document.querySelector('#answerAlg2_1').innerHTML += `${arrAlg2[i]} `;
}

//Número mayor
for (let i = 0; i < arrAlg2.length; i++) {
    if (arrAlg2[i] > alg2BiggestNum) {
        alg2BiggestNum = arrAlg2[i];
    }
}

//Cantidad Número mayor
for (let i = 0; i < arrAlg2.length; i++) {
    if (arrAlg2[i] === alg2BiggestNum) {
        alg2Counter++;
    }
}

document.querySelector('#answerAlg2_2').innerHTML += `El número mayor es: ${alg2BiggestNum} y se repite ${alg2Counter} veces`;

// -------------------- Ejercicio 1 --------------------
let arrAlg1 = [];

for (let i = 0; i < 100; i++) {
    arrAlg1[i] = Math.round(Math.random() * (100 + 1), 1);
    document.querySelector('#answerAlg1').innerHTML += `${arrAlg1[i]} `;
}