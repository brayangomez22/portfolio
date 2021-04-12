const Habilidad = require('../model/habilidad');

module.exports = {
    setHabilidad: async (req, res) => {
        try {
            const { titulo, porcentaje } = req.body;
            const habilidad = await new Habilidad({ titulo, porcentaje });
            habilidad.save();
            res.json({ message: "Habilidad guardada", data: habilidad });
        } catch (e) {
            res.json({ message: "Error de conexión", error: e });
        }
    },

    getHabilidades: async (req, res)=>{
        try {
            const habilidades = await Habilidad.find();
            res.json(habilidades); 
        } catch (e) {
            res.json({ message: "Error de conexión", error: e });
            
        }
    }
}