const oneAway = (first, second) => {
    let sizeFirst 	= first.length;
    let sizeSecond 	= second.length;

    // Corner case and simplest one difference between arg1 and arg2 must not exceed 1.
    if (Math.abs(sizeFirst - sizeSecond) > 1) {
        return false;
    }

    let s1 = sizeFirst < sizeSecond ? first : second; // Shortest one
    let s2 = sizeFirst < sizeSecond ? second : first; // Largest one
    
    let pointer1 = 0;
    let pointer2 = 0;
    
    let foundDifference = false;

    // Mientras tengamos espacios a donde mover piezas seguimos.
    while (pointer1 < s1.length && pointer2 < s2.length) {	
        // Verificamos si la posición es diferente la letra.
        if (s1.charAt(pointer1) != s2.charAt(pointer2)) {
        	// Diferencia encontrada.
            console.log("Difference found")
            // Si no es la primera mandamos un continuar.
            if (foundDifference) {
                return false;
            }
            // Cambiamos el valor de la diferencia a true.
            foundDifference = true;

            // Si los dos string son de igual tamaño eso significa
            if (s1.length == s2.length) {
                pointer1++;
            }
        } 
        // Movemos posición del menor.
        else {
            pointer1++;
        }
        // Movemos posición del mayor.
        	pointer2++;
    }
    return true;
};


var app = oneAway("aka", "baka");
console.log(app)