import Categoria from '#models/categoria'
import Livro from '#models/livro'
import { HttpContext } from '@adonisjs/core/http'

export default class LivrosController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Livro.query().preload('categorias').paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Livro.query().where('id', params.id).preload('categorias').firstOrFail()
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['titulo', 'autorId'])
    const livro = await Livro.create(dados)
    const categorias = request.input('categorias')
    
    if (categorias) {
      await livro.related('categorias').attach(categorias)
    }

    return livro
  }

  async update({ params, request }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    const dados = request.only(['titulo', 'autorId'])
    
    livro.merge(dados)
    await livro.save()

    const categorias = request.input('categorias')
    
    if (categorias) {
      await livro.related('categorias').sync(categorias)
    }

    return livro
  }

  async destroy({ params }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    await livro.delete()
    return { msg: 'Registro deletado com sucesso', livro }
  }

  async addCategoria({ params, request, response }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    const categoriaId = request.input('categoriaId')

    const categoria = await Categoria.findOrFail(categoriaId)
    await livro.related('categorias').attach([categoria.id])
    
    return response.status(200).json({ message: 'Categoria adicionada ao livro com sucesso' })
  }

  async removeCategoria({ params, request, response }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    const categoriaId = request.input('categoriaId')

    const categoria = await Categoria.findOrFail(categoriaId)
    await livro.related('categorias').detach([categoria.id])
    
    return response.status(200).json({ message: 'Categoria removida do livro com sucesso' })
  }
}
