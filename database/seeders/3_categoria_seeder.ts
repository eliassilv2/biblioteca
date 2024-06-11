import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Categoria.createMany([
      {nome: 'Tragédia'},
      {nome: 'Aventura'},
      {nome: 'Literatura Clássica'},
      {nome: 'Romace'},
      {nome: 'Classico'}
    ])

  }
}