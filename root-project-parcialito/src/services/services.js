import { utils } from "../utils/utils.js";



export const services = {
    obtenerDatos: async (path) => {
        const data = JSON.stringify(await utils.leerJSON(path), null, 2);
        return data
    },

    descargar: async (data, path) => {
        const resultado = utils.crearArchivo(data, path);

        if (resultado) {
            res.json({ ok: true, message: resultado.message });

        } else {
            res.status(500).json({ ok: false, message: resultado.message });
        }
    },

    leer: async (target) => {
        const data = await fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8',
            }
        });
        return data
    }

}