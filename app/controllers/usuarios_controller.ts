import Usuario from '#models/usuario'
import { HttpContext } from '@adonisjs/core/http'

export default class UsuariosController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Usuario.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Usuario.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['nomeUsuario', 'email', 'senha'])
    return await Usuario.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const usuario = await Usuario.findOrFail(params.id)
    const dados = request.only(['nomeUsuario', 'email', 'senha'])
    
    usuario.merge(dados)
    return await usuario.save()
  }

  async destroy({ params }: HttpContext) {
    const usuario = await Usuario.findOrFail(params.id)
    await usuario.delete()
    return { msg: 'Registro deletado com sucesso', usuario }
  }
}
