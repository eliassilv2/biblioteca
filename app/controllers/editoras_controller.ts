import Editora from '#models/editora'
import { HttpContext } from '@adonisjs/core/http'

export default class EditoraController {
  async index ({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Editora.query().paginate(page, perPage)
  }

  async show ({ params, response }: HttpContext) {
    const editora = await Editora.find(params.id)
    if (!editora) {
      return response.status(404).json({ message: 'Editora não encontrada' })
    }
    return response.status(200).json(editora)
  }

  async store ({ request, response }: HttpContext) {
    const data = request.only(['nome', 'pais'])
    const editora = await Editora.create(data)
    return response.status(201).json(editora)
  }

  async update ({ params, request, response }: HttpContext) {
    const editora = await Editora.findOrFail(params.id)
    const data = request.only(['nome', 'pais'])
    editora.merge(data)
    await editora.save()
    return response.status(200).json(editora)
  }

  async destroy ({ params, response }: HttpContext) {
    const editora = await Editora.findOrFail(params.id)
    await editora.delete()
    return response.status(204).json({ message: 'Editora deletada com sucesso' })
  }
}
