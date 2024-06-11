import Categoria from '#models/categoria'
import Livro from '#models/livro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const livros = await Livro.all()
    const categorias = await Categoria.all()

    await livros[0].related('categorias').attach([categorias[0].id, categorias[1].id])
    await livros[1].related('categorias').attach([categorias[2].id, categorias[3].id])
  }
}