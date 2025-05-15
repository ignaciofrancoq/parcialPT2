import fs from 'fs/promises';

export const utils = {
  async leerJSON(ruta) {
    try {
      const contenido = await fs.readFile(ruta, 'utf8');
      return JSON.parse(contenido);
    } catch (error) {
      console.error('Error leyendo el archivo JSON:', error);
      return null;
    }
  },
  async crearArchivo(data, path) {
    try {
      await fs.writeFile(path, data, 'utf8');
      console.log('Archivo creado correctamente');
    } catch (error) {
      console.error('Error al crear el archivo:', error);
    }
  }
};
