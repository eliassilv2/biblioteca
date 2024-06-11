import Usuario from '#models/usuario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
  
    await Usuario.createMany([
      {nomeUsuario: 'Elias Silva', email: 'elias@gmail.com', senha: '123456'},
      {nomeUsuario: 'João', email: 'joao@gmail.com', senha: 'joao123'},
      {nomeUsuario: 'Ana', email: 'ana@gmail.com', senha: 'ana123'},
      {nomeUsuario: 'Maria', email: 'maria@gmail.com', senha: 'maria123'},
      {nomeUsuario: 'Marcelo', email: 'marcelo@gmail.com', senha: 'marcelo123'},
    ])
    
  }
}