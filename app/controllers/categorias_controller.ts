import Categoria from '#models/categoria'
import Livro from '#models/livro'
import { HttpContext } from '@adonisjs/core/http'

export default class CategoriasController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Categoria.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Categoria.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['nome'])
    return await Categoria.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const categorias = await Categoria.findOrFail(params.id)
    const dados = request.only(['nome'])
    
    categorias.merge(dados)
    return await categorias.save()
  }

  async destroy({ params }: HttpContext) {
    const categorias = await Categoria.findOrFail(params.id)
    await categorias.delete()
    return { msg: 'Registro deletado com sucesso', categorias }
  }

  async addLivro({ params, request, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    const livroId = request.input('livroId')

    const livro = await Livro.findOrFail(livroId)
    await categoria.related('livros').attach([livro.id])
    
    return response.status(200).json({ message: 'Livro adicionado à categoria com sucesso' })
  }

  async removeLivro({ params, request, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    const livroId = request.input('livroId')

    const livro = await Livro.findOrFail(livroId)
    await categoria.related('livros').detach([livro.id])
    
    return response.status(200).json({ message: 'Livro removido da categoria com sucesso' })
  }
}
