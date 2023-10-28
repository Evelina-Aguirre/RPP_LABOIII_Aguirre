export default class persona {

    constructor(id, nombre, apellido,edad) {
      if (id === "") {
       persona.ultimoId =  persona.ultimoId || 0 + 1;
        this.id = persona.ultimoId;
      } else {
        this.id = id;
      }
     
    
      this.nombre = nombre || Sin_nombre;
      this.apellido=apellido ||Sin_apellido;
      this.edad =edad;

    }


    toString() {
        return `nombre: ${this.nombre}, Apellido: ${this.apellido}, edad: ${this.edad}`;
    }
  
    
    
  }
  
export function actualizarIds(datos) {
    let maxId = 0;
    datos.forEach((element) => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
   persona.ultimoId = maxId;
  }
