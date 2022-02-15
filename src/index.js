export function isAdult(num){ 

        if (num >= 18) { return "Mayor de edad";}          

        return "Menor de edad";     
}

export function examGrade(num){  

        if (num < 3) { return "Nota: " + num + " - La calificación es MUY DEFICIENTE"; }
        if (num < 5) { return "Nota: " + num + " - La calificación es INSUFICIENTE"; }  
        if (num < 6) { return "Nota: " + num + " - La calificación es SUFICIENTE"; }  
        if (num < 7) { return "Nota: " + num + " - La calificación es BIEN"; }   
        if (num < 9) { return "Nota: " + num + " - La calificación es NOTABLE"; }   
        if (num <= 10) { return "Nota: " + num + " - La calificación es SOBRESALIENTE"; }                    

}

/* module.exports = isAdult;
module.exports = examGrade; */