

const words:string[]=['COMPUTADORA','VEHICULO','YOGURT','CELULAR','CAMIONETA','REFRESCO','MOUSE','COCINA','VETERINARIO','CERVEZA','MONITOR','LAPICERO','UNIVERSIDAD','ESPEJO','DORMITORIO','CAMAROTE','LEOPARDO','AVIONETA','SALARIO','PELOTA'];
export function getRandomWord(){
       const randomIndex= Math.floor(Math.random()*words.length);

    return words[randomIndex];
}