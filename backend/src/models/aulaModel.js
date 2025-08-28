const db = require("../config/db");

class AulaModel {
    static async getAll() {
        const [rows] = await db.executar("SELECT * FROM aulas");
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.executar("SELECT * FROM aulas WHERE id = ?", [id]);
        return rows[0];
    }

    static async create({ modulo_id, titulo, descricao, video_url, ordem, duracao }) {
        const [result] = await db.executar(

            `INSERT INTO aulas (modulo_id, titulo, descricao, video_url, ordem, duracao) VALUES ('${modulo_id}', '${titulo}', '${descricao}', '${video_url}', '${ordem}', '${duracao}')`)

        return { id: result.insertId, modulo_id, titulo, descricao, video_url, ordem, duracao };
    }

    static async update(id, { modulo_id, titulo, descricao, video_url, ordem, duracao }) {
        await db.executar(

            `UPDATE aulas SET (modulo_id = ${modulo_id}, titulo = ${titulo}, descricao = ${descricao}, video_url = ${video_url}, ordem = ${ordem}, duracao = ${duracao} WHERE id = ${id})`,
            

        );
        return { id, modulo_id, titulo, descricao, video_url, ordem, duracao };
    }

    static async remove(id) {
        await db.executar("DELETE FROM aulas WHERE id = ?", [id]);
        return { message: "Aula removida com sucesso" };
    }
}

module.exports = AulaModel;
