import Avaliacao from '#models/avaliacao'
import { HttpContext } from '@adonisjs/core/http'

export default class AvaliacaosController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Avaliacao.query().preload('livro').preload('usuario').paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Avaliacao.query().where('id', params.id).preload('livro').preload('usuario').firstOrFail()
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['livroId', 'usuarioId', 'avaliacao', 'comentario'])
    return await Avaliacao.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const avaliacao = await Avaliacao.findOrFail(params.id)
    const dados = request.only(['livroId', 'usuarioId', 'avaliacao', 'comentario'])
    
    avaliacao.merge(dados)
    return await avaliacao.save()
  }

  async destroy({ params }: HttpContext) {
    const avaliacao = await Avaliacao.findOrFail(params.id)
    await avaliacao.delete()
    return { msg: 'Registro deletado com sucesso', avaliacao }
  }
}
