class DisciplinaModel {
    constructor(_id, nome, curso, capacidade) {
        this._id = _id
        this.nome = nome;
        this.curso = curso
        this.capacidade = capacidade
    }
}
module.exports = DisciplinaModel