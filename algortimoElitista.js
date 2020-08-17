let Poblacion = [];
let Fitness = 0;
let FuturosPapas = [];
let generacion = 1;

// llamamos funcion para iniciar todo
PoblacionCrear();

function PoblacionCrear() {
  let gen;
  for (let j = 0; j < 100; j++) {
    Poblacion[j] = [];
    for (let x = 0; x < 10; x++) {
      gen = Math.floor(Math.random() * 2);
      Poblacion[j].push(gen);
    }
  }
  console.log(Poblacion);
}

function FitnessDeCadaUnoDePob(Poblacion) {
  Poblacion.forEach(FitnessP);
  Poblacion = FuturosPapas;
  console.log(`Medida poblacion: ${Poblacion.length}`);
  FuturosPapas = [];
  //console.log(Poblacion);
  kidsFactory(Poblacion);
}

function FitnessP(pers) {
  Fitness = 0;
  pers.forEach(ContarLosGenesDeCadaPob);
  // console.log('La Fitness de la  persona que enviaremos a test es:' + Fitness);
  Test(pers);
}

function Test(persona) {
  if (Fitness > 7) {
    FuturosPapas.push(persona);
  }
}

function ContarLosGenesDeCadaPob(item) {
  if (item == 1) {
    Fitness++;
  }
}

function kidsFactory(Poblacion) {
  let HijoNuevo = [];
  let papas = [...Poblacion];
  while (Poblacion.length < 100) {
    for (let i = 0; i < papas.length - 1; i++) {
      papa1 = papas[i];
      papa2 = papas[i + 1];
      HijoNuevo.push(
        papa1[0],
        papa1[1],
        papa1[2],
        papa2[3],
        papa2[4],
        papa2[5],
        papa2[6],
        papa1[7],
        papa1[8],
        papa1[9]
      );
      let opurtunidades = Math.floor(Math.random() * 100);
      if (opurtunidades == 69) {
        let Gen = Math.floor(Math.random() * 10);
        if (HijoNuevo[Gen] == 0) {
          HijoNuevo[Gen] = 1;
        } else {
          HijoNuevo[Gen] = 0;
        }
      }
      console.log("Hijo nuevo:" + HijoNuevo);

      Poblacion.push(HijoNuevo);
      HijoNuevo = [];
      if (Poblacion.length > 99) {
        console.log("lleno");
        console.log("El array de poblacion es: ");
        console.log(Poblacion);
        generacion++;
        console.log("---------------------------------------------------");
        console.log("Generacion: " + generacion);
        return;
      }
    }
  }
}

function Optimization(Poblacion) {
  if (generacion > 99) {
    console.log("Se cumpleron las 100 generaciones aqui :D");
    console.log(Poblacion);
    console.log("---------------------------------------------------");

    return;
  } else {
    groupFitness(Poblacion);
  }
}

let FitnessIndividual = 0;
function groupFitness(Poblacion) {
  Poblacion.forEach(personaFitness);
  console.log(FitnessIndividual);
  if (FitnessIndividual < 100) {
    FitnessIndividual = 0;
    Repetir();
  } else {
    console.log("optimizacion maxima");
    console.log(Poblacion);
  }
}

function personaFitness(persona) {
  Fitness = 0;
  persona.forEach(ContarLosGenesDeCadaPob);
  // console.log("la Fitness de cada poblacion es: " + Fitness);
  FitInvididualOp(Fitness);
}

function FitInvididualOp(fitnessInd) {
  if (fitnessInd >= 7) {
    FitnessIndividual++;
  }
}

Repetir();
function Repetir() {
  FitnessDeCadaUnoDePob(Poblacion);
  Optimization(Poblacion);
}
