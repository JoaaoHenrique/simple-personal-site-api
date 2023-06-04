const { pool } = require('../config/db');

exports.getInformacoes = async () => {
    const result = await pool.query('SELECT * FROM informacoes');
    return result.rows[0];
}

exports.createInformacoes = async (informacoes) => {
    const result = await pool.query(`
        INSERT INTO informacoes (id, nome, cargo, resumo, foto)
        VALUES (1, $1, $2, $3, $4)
        RETURNING *
    `,
    [informacoes.nome, informacoes.cargo, informacoes.resumo, informacoes.foto]);
    return result.rows[0];
}

exports.updateInformacoes = async (informacoes) => {
    const result = await pool.query(`
        UPDATE informacoes
        SET nome = $1, cargo = $2, resumo = $3, foto = $4
        WHERE id = 1
        RETURNING *
    `,
    [informacoes.nome, informacoes.cargo, informacoes.resumo, informacoes.foto]);
    return result.rows[0];
}

exports.deleteInformacoes = async () => {
    await pool.query('DELETE FROM informacoes WHERE id = 1');
}
