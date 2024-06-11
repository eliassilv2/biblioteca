import Autor from '#models/autor'
import { HttpContext } from '@adonisjs/core/http'

export default class AutorsController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Autor.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Autor.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['nome'])
    return await Autor.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const autors = await Autor.findOrFail(params.id)
    const dados = request.only(['nome'])
    
    autors.merge(dados)
    return await autors.save()
  }

  async destroy({ params }: HttpContext) {
    const autors = await Autor.findOrFail(params.id)
    await autors.delete()
    return { msg: 'Registro deletado com sucesso', autors }
  }
}
