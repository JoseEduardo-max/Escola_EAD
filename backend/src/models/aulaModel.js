const db = require("../config/db");

class AulaModel {
    static async getAll() {
        const [rows] = await db.query("SELECT * FROM aulas");
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query("SELECT * FROM aulas WHERE id = ?", [id]);
        return rows[0];
    }

    static async create({ modulo_id, titulo, descricao, video_url, ordem, duracao }) {
        const [result] = await db.query(
            "INSERT INTO aulas (modulo_id, titulo, descricao, video_url, ordem, duracao) VALUES (?, ?, ?, ?, ?, ?)",
            [modulo_id, titulo, descricao, video_url, ordem, duracao]
        );
        return { id: result.insertId, modulo_id, titulo, descricao, video_url, ordem, duracao };
    }

    static async update(id, { modulo_id, titulo, descricao, video_url, ordem, duracao }) {
        await db.query(
            "UPDATE aulas SET modulo_id = ?, titulo = ?, descricao = ?, video_url = ?, ordem = ?, duracao = ? WHERE id = ?",
            [modulo_id, titulo, descricao, video_url, ordem, duracao, id]
        );
        return { id, modulo_id, titulo, descricao, video_url, ordem, duracao };
    }

    static async remove(id) {
        await db.query("DELETE FROM aulas WHERE id = ?", [id]);
        return { message: "Aula removida com sucesso" };
    }
}

module.exports = AulaModel;
