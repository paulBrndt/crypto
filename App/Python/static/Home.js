

//js function, to update botton of the app
function showText() {
        

            const selectElement = document.getElementById("options");
            const outputDiv1 = document.getElementById("outputDiv1");
            const outputDiv2 = document.getElementById("outputDiv2");
            const outputDiv3 = document.getElementById("outputDiv3");
            const pleaseChoose = document.getElementById("pleaseChoose");
            const selectedValue = selectElement.value;

            if (selectedValue === "1") {
                outputDiv1.style.display = "block"; 
                outputDiv2.style.display = "none";
                outputDiv3.style.display = "none";      // Zeige das zugehörige Dropdown Menü und verstecke Falsche

                pleaseChoose.style.display = "none";       //Verstecke den Text

            } else if (selectedValue === "2") {
                outputDiv1.style.display = "none"; 
                outputDiv2.style.display = "block";
                outputDiv3.style.display = "none";      // Zeige das zugehörige Dropdown Menü und verstecke Falsche

                pleaseChoose.style.display = "none"       //Verstecke den Text

            } else if (selectedValue == "3"){
                outputDiv1.style.display = "none"; 
                outputDiv2.style.display = "none";
                outputDiv3.style.display = "block";      // Zeige das zugehörige Dropdown Menü und verstecke Falsche

                pleaseChoose.style.display = "none"       //Verstecke den Text

            }else{
                outputDiv1.style.display = "none"; 
                outputDiv2.style.display = "none";
                outputDiv3.style.display = "none";        // Verstecke die falschen Dropdown Menüs

                pleaseChoose.style.display = "block"        //Zeige den Text
            }
}
function encrypter() {
    const inputElement1 = document.getElementById("encrypt");
    const outputDiv4 = document.getElementById("outputDiv4");
    const inputValue1 = inputElement1.value;

    fetch('/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputValue1 })
    })
    .then(response => response.json())
    .then(data => {
        outputDiv4.style.display = "block";
        outputDiv4.innerHTML = data.result;
    })
    .catch(error => {
        outputDiv4.style.display = "block";
        outputDiv4.innerHTML = "Fehler: " + error;
    });
}