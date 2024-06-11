import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.js'
import Avaliacao from './avaliacao.js'
import Autor from './autor.js'
import Editora from './editora.js'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo: string

  @column()
  declare autorId: number

  @column()
  declare editoraId: number

  @column()
  declare categoriaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Autor)
  declare autor: BelongsTo<typeof Autor>

  @hasMany(() => Avaliacao)
  declare avaliacao: HasMany<typeof Avaliacao>

  @manyToMany(() => Categoria, {
    pivotTable: 'categoria_livros',
  })
  declare categorias: ManyToMany<typeof Categoria>

  @belongsTo(() => Editora)
  declare editora: BelongsTo<typeof Editora>
}