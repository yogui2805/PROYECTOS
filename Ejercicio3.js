let dias=new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
//Imprimir array

//sara:visto no funcionaba pero en consola si

for(let contador=0;contador<dias.lenght;contador++)
    {
    document.write(dias[1]);
    };



//Imprimir de forma inversa

dias.reverse();

//Busca el Domingo en el array, si aparece muestra el valor e indica en que celda aparece

document.write(dias[0] + "<br><br>");


//Numero de celdas totales

document.write(dias.length)



