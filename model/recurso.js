//  Recurso model
var mongoose = require("mongoose");

var comentarios = new mongoose.Schema({
  _id: Number,
  id_coment: Number,
  id_utilizador: String,
  nome_utilizador: String,
  data: Date,
  descricao: String,
});

comentarios.add({ comentarios: [comentarios] }); //replies do proprio comentario (tem que ser aqui senao morre)

var recursoSchema = new mongoose.Schema({
  tipo: String,
  descricao: String,
  titulo: String,
  dataCriacao: Date,
  dataRegisto: Date,
  visibilidade: String,
  numDowns: Number,
  autor: [String],
  produtor: String,
  pontuacao: Number,
  numPontuacoes: Number,
  comentarios: [comentarios], //replies
  tags: [String],
});

module.exports = mongoose.model("recursos", recursoSchema);
