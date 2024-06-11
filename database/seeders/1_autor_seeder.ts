import Autor from '#models/autor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Autor.createMany([
      { nome: 'William Shakespeare' },
      { nome: 'Miguel de Cervantes' },
      { nome: 'Virginia Woolf' },
      { nome: 'Machado de Assis' },
      { nome: 'Charles Dickens' }
    ]) 
  }
}