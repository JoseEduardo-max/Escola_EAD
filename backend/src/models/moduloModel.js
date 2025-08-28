const db = require("../config/db");

class ModuloModel {
    static async getAll() {
        const [rows] = await db.query("SELECT * FROM modulos");
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query("SELECT * FROM modulos WHERE id = ?", [id]);
        return rows[0];
    }

    static async create({ curso_id, titulo, ordem }) {
        const [result] = await db.query(
            `INSERT INTO modulos (curso_id, titulo, ordem) VALUES (${curso_id}, ${titulo}, ${ordem})`,
        
        );
        return { id: result.insertId, curso_id, titulo, ordem };
    }

    static async update(id, { curso_id, titulo, ordem }) {
        await db.query(
            "UPDATE modulos SET curso_id = ?, titulo = ?, ordem = ? WHERE id = ?",
            [curso_id, titulo, ordem, id]
        );
        return { id, curso_id, titulo, ordem };
    }

    static async remove(id) {
        await db.query("DELETE FROM modulos WHERE id = ?", [id]);
        return { message: "Módulo removido com sucesso" };
    }
}

module.exports = ModuloModel;
