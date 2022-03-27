//pulsante genera
function myFunction() {
    let elementName = document.getElementById("inputName").value;
    document.getElementById("Passenger_name").innerHTML = elementName;
    let travel_Distance = document.getElementById("inputKm").value
    if (isNaN (travel_Distance) ) {
        alert('Inserisi un numero valido')   
    } else if (travel_Distance <= 0){
        alert('La distanza non puo essere inferiore a 0')
    }

    //età
    let eta = document.getElementById("FormControlSelect").value;

    const prezzo_per_km = 0.21;
    let prezzo_biglietto = travel_Distance * prezzo_per_km;

    // prezzo over 65
    const prezzo_over_65 = 0.4;

    // prezzo minorenni
    const prezzo_minorenni = 0.2;
    
    let biglietto;
    if (eta === 'Over 65') {
        biglietto = prezzo_biglietto - (prezzo_biglietto * prezzo_over_65);
    } else if (eta === 'Minorenne') {
        biglietto = prezzo_biglietto - (prezzo_biglietto * prezzo_minorenni);   
    } else {
        biglietto = prezzo_biglietto;
    }
    
    document.getElementById("ms_ticket-price").innerHTML = `${biglietto.toFixed(2)} &euro;`

    let sconto_eta;
    if (eta === 'Over 65') {
        sconto_eta = 'Sconto Over 65'
    } else if (eta === 'Minorenne') {
        sconto_eta = 'Sconto Minorenne'
    } else {
        sconto_eta = 'Prezzo pieno'
    }
    
    document.getElementById("age_discount").innerHTML = sconto_eta;

    let train_compartment =  Math.floor(Math.random() * 10);
    console.log(train_compartment)

    document.getElementById("train_section").innerHTML = train_compartment;

    let cp_code =  Math.floor(Math.random() * 100000) +10000;
    console.log(cp_code)
    document.getElementById("cp_code").innerHTML = cp_code;
}


function myChange(x) {
    x.classList.toggle("fa-angle-up");
  }