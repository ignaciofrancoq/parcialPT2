import { services } from "../services/services.js"

export const Controller = {
    obtener: async (req, res) => {
        const path = new URL('../db/json_file.json', import.meta.url);
        const datos = await services.obtenerDatos(path);

        console.log(datos);

        if (!datos) {
            res.status(404).json({
                payload: null,
                message: "No hay datos",
                ok: false,
            })
            return
        }

        res.status(200).json({
            message: `Mostrando datos`,
            payload: JSON.parse(datos),
            ok: true,
        })
    },

    readCsv: async (req, res) => {
        try {
            const target = 'https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv';


            const data = await services.leer(target);

            if (data) {
                return res.status(200).json({
                    message: `Archivo CSV guardado correctamente`,
                    payload: {},
                    ok: true,
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}