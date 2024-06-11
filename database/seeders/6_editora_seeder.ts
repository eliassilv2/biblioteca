import Editora from '#models/editora'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Editora.createMany([
      {nome: 'Penguin Books', pais: 'Reino Unido'},
      {nome: 'HarperCollins', pais: 'Estados Unidos'},
      {nome: 'Companhia das Letras', pais: 'Brasil'},
      {nome: 'Rocco', pais: 'Brasil'},
      {nome: 'Editora Globo', pais: 'Brasil'}
    ])

  }
}