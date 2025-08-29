const db = require("../config/db");

class ModuloModel {
    static async getAll() {
        const [rows] = await db.executar(`SELECT * FROM modulos`);
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.executar(`SELECT * FROM modulos WHERE id = ${id}`,);
        return rows[0];
    }

    static async create({ curso_id, titulo, ordem }) {

        const [result] = await db.executar(
            `INSERT INTO modulos (curso_id, titulo, ordem) VALUES (${curso_id}, ${titulo}, ${ordem})`)

        return { id: result.insertId, curso_id, titulo, ordem };
    }

    static async update(id, { curso_id, titulo, ordem }) {
        await db.executar(
            `UPDATE modulos SET curso_id = ${curso_id}, titulo = ${titulo}, ordem = ${ordem} WHERE id = ${id}`
        );
        return { id, curso_id, titulo, ordem };
    }

    static async remove(id) {
        await db.executar(`DELETE FROM modulos WHERE id = ${id}`,);
        return { message: "Módulo removido com sucesso" };
    }
}

module.exports = ModuloModel;
