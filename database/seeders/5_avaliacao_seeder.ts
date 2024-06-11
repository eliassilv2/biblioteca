import Avaliacao from '#models/avaliacao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
     await Avaliacao.createMany([
      {livroId: 1, usuarioId: 1, avaliacao: 5, comentario: 'Gostei muito do livro'},
      {livroId: 2, usuarioId: 2, avaliacao: 4, comentario: 'recomendo!!'},
      {livroId: 3, usuarioId: 3, avaliacao: 3, comentario: 'top!'},
      {livroId: 4, usuarioId: 4, avaliacao: 2, comentario: 'legal'},
      {livroId: 5, usuarioId: 5, avaliacao: 1, comentario: 'não gostei desse livro'},
      {livroId: 6, usuarioId: 1, avaliacao: 5, comentario: 'muito bom, gostei'},
      {livroId: 7, usuarioId: 2, avaliacao: 4, comentario: 'maravilhoso'},
      {livroId: 8, usuarioId: 3, avaliacao: 3, comentario: 'até que gostei'},
      {livroId: 9, usuarioId: 4, avaliacao: 2, comentario: 'não sei se gostei...'},
      {livroId: 10, usuarioId: 5, avaliacao: 1, comentario: 'não recomendo, galera'}
    ])

  }
}