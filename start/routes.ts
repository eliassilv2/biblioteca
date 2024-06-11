/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AutorsController from '#controllers/autors_controller';
import AvaliacaosController from '#controllers/avaliacaos_controller';
import CategoriasController from '#controllers/categorias_controller';
import EditoraController from '#controllers/editoras_controller';
import LivrosController from '#controllers/livros_controller';
import UsuariosController from '#controllers/usuarios_controller';
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// start/routes.js

router.resource('/autors', AutorsController).apiOnly();
router.resource('/livros', LivrosController).apiOnly();
router.resource('/categorias', CategoriasController).apiOnly();
router.resource('/avaliacaos', AvaliacaosController).apiOnly();
router.resource('/usuarios', UsuariosController).apiOnly();
router.resource('/editoras', EditoraController).apiOnly();

router.post('livros/:id/categorias', 'LivrosController.addCategoria')
router.delete('livros/:id/categorias', 'LivrosController.removeCategoria')

router.post('categorias/:id/livros', 'CategoriasController.addLivro')
router.delete('categorias/:id/livros', 'CategoriasController.removeLivro')