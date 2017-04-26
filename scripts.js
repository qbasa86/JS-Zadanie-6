var a = 0,
	h = 0,
	dane = false;
	
getTriangleArea(a, h);

function getTriangleArea(a, h) {
	while (dane === false) {
    a = prompt("Podaj wartość a");
    h = prompt("Podaj wartość h");
    
    if (a <= 0 || h <= 0) {
        alert("Proszę podać prawidłowe dane");
    } else {
    	var wynik = a*h/2;
        console.log(wynik);
		dane = true;
		return wynik;	
    }
}
}
