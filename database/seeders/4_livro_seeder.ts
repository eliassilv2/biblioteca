import Editora from '#models/editora'
import Livro from '#models/livro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    const editoras = await Editora.createMany([
      { nome: 'Penguin Books', pais: 'Reino Unido' },
      { nome: 'HarperCollins', pais: 'Estados Unidos' },
      { nome: 'Companhia das Letras', pais: 'Brasil' },
      { nome: 'Rocco', pais: 'Brasil' },
      { nome: 'Editora Globo', pais: 'Brasil' },
    ])

     await Livro.createMany([
      {titulo: 'Hamlet', categoriaId: 1 ,  autorId: 1, editoraId: editoras[0].id},
      {titulo: 'Romeu e Julieta', categoriaId: 1, autorId: 1, editoraId: editoras[0].id},
      {titulo: 'Dom Quixote', autorId: 2, editoraId: editoras[1].id},
      {titulo: 'A Galateia', autorId: 2, editoraId: editoras[1].id},
      {titulo: 'Mrs. Dalloway', autorId: 3, editoraId: editoras[2].id},
      {titulo: 'Orlando', autorId: 3, editoraId: editoras[2].id},
      {titulo: 'Dom Casmurro', autorId: 4, editoraId: editoras[3].id},
      {titulo: 'Memórias Póstumas de Brás Cubas', autorId: 4, editoraId: editoras[3].id},
      {titulo: 'Oliver Twist', autorId: 5, editoraId: editoras[4].id},
      {titulo: 'David Copperfild', autorId: 5, editoraId: editoras[4].id}
    ])
  }
}