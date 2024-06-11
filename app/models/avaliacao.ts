import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Livro from './livro.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'

export default class Avaliacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare livroId: number

  @column()
  declare usuarioId: number

  @column()
  declare avaliacao: number

  @column()
  declare comentario: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Livro)
  declare livro: BelongsTo<typeof Livro>

  @belongsTo(() => Usuario)
  declare usuario: BelongsTo<typeof Usuario>
}