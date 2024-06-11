import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'avaliacaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('livro_id').unsigned().references('id').inTable('livros');
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios');
      table.integer('avaliacao').notNullable();
      table.string('comentario', 255);

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}