function redondearAlAlza(y) {
    return Math.ceil(y);
  }
  function redondearALaBaja(x) {
    return Math.floor(x);
  }
  function masProximo(y) {
    return Math.round(y);
  }
  function Aleatorio() {
    return Math.random();
  }
  function potencia(x, y) {
    return Math.pow(x, y);
  }
  function raizCuadrada(y) {
    return Math.sqrt(y);
  }
  function maximo(x, y) {
    return Math.max(x, y);
  }
  function minimo(x, y) {
    return Math.min(x, y);
  }

  const x = parseFloat(prompt("Ingrese X: "));
  const y = parseFloat(prompt("Ingrese Y: "));

  console.log("El número Y redondeado al alza", redondearAlAlza(y));
  console.log("El número X redondeado a la baja", redondearALaBaja(x));
  console.log("El entero más cercano de Y:", masProximo(y));
  console.log("Un valor aleatorio entre 0 y 1:", Aleatorio());
  console.log("El valor de X elevado a Y:", potencia(x, y));
  console.log("La raíz cuadrada de Y:", raizCuadrada(y));
  console.log("El máximo entre X e Y:", maximo(x, y),"El mínimo entre X e Y:", minimo(x, y));