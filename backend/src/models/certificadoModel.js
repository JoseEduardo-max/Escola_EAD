const db = require("../config/db");

class CertificadoModel {
    static async getAll() {
        const [rows] = await db.query("SELECT * FROM certificados");
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query("SELECT * FROM certificados WHERE id = ?", [id]);
        return rows[0];
    }

    static async create({ aluno_id, curso_id, emitido_em, codigo_certificado }) {
        const [result] = await db.query(
            "INSERT INTO certificados (aluno_id, curso_id, emitido_em, codigo_certificado) VALUES (?, ?, ?, ?)",
            [aluno_id, curso_id, emitido_em, codigo_certificado]
        );
        return { id: result.insertId, aluno_id, curso_id, emitido_em, codigo_certificado };
    }

    static async update(id, { aluno_id, curso_id, emitido_em, codigo_certificado }) {
        await db.query(
            "UPDATE certificados SET aluno_id = ?, curso_id = ?, emitido_em = ?, codigo_certificado = ? WHERE id = ?",
            [aluno_id, curso_id, emitido_em, codigo_certificado, id]
        );
        return { id, aluno_id, curso_id, emitido_em, codigo_certificado };
    }

    static async remove(id) {
        await db.query("DELETE FROM certificados WHERE id = ?", [id]);
        return { message: "Certificado removido com sucesso" };
    }
}

module.exports = CertificadoModel;
