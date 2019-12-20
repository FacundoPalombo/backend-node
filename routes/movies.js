const express = require('express')
const { MoviesService } = require('../services/movies')

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies')

const { validationHandler } = require('../utils/middlewares/validationHandler')

const moviesService = new MoviesService()
function moviesApi(app) {
  const router = express.Router()
  app.use('/api/movies', router)

  router.get('/', async function(req, res, next) {
    const { tags } = req.query
    try {
      const movies = await moviesService.getMovies({ tags })
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (err) {
      next(err)
    }
  })

  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      const { movieId } = req.params
      try {
        const movie = await moviesService.getMovie({ movieId })
        res.status(200).json({
          data: movie,
          message: 'Movie retrieved'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  router.post(
    '/', 
  validationHandler(createMovieSchema), 
  async function(req, res,next) {
    const { body: movie } = req
    try {
      const createdMovieId = await moviesService.createMovie({ movie })
      res.status(201).json({
        data: createdMovieId,
        message: 'Movie created'
      })
    } catch (err) {
      next(err)
    }
  })

  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params
      const { body: movie } = req
      try {
        const updatedMovie = await moviesService.updateMovie({ movieId, movie })
        res.status(200).json({
          data: updatedMovie,
          message: 'Movie modified'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }),
    async function(req, res, next) {
      const { movieId } = req.params
      try {
        const deletedMovie = await moviesService.deleteMovie({ movieId })
        res.status(200).json({
          data: deletedMovie,
          message: 'movie deleted'
        })
      } catch (err) {
        next(err)
      }
    }
  )
}
module.exports = moviesApi
