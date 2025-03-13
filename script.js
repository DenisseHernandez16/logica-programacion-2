let temp = prompt("¿Cuál es la temperatura que quieres convertir? ");
temp = Number(temp); // Convierte el valor a número

while (isNaN(temp)) {
  console.log("Error: Ingresa un número válido.");
  temp = prompt("¿Cuál es la temperatura que quieres convertir? ");
  temp = Number(temp); // Convierte el valor a número
}

  fahrenheit = (temp * 9/5) +32 ;
  kelvin = (temp + 273.15);
  
  console.log("Esta es tu temperatura en: " + temp.toFixed(2) + "°C" );
  console.log("--------------------------------------------");
  console.log("Esta es tu temperatura convertida en: " + fahrenheit.toFixed(2) + "°F");
  console.log("--------------------------------------------");
  console.log("Esta es tu temperatura convertida en: "+ kelvin.toFixed(2) + "°K");


