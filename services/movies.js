const { moviesMocks } = require('../utils/mocks/movies')

class MoviesService {
  
  async getMovies() {
    const movies = await Promise.resolve(moviesMocks)
    return movies || []
  }
  async getMovie() {
    const movie = await Promise.resolve(moviesMocks[0])
    return movie || {}
  }
  async createMovie() {
    const createdMovie = await Promise.resolve(moviesMocks[0].id)
    return createdMovie || {}
  }
  async updateMovie() {
    const updatedMovie = await Promise.resolve(moviesMocks[0].id)
    return updatedMovie || {}
  }
  async deleteMovie() {
    const deletedMovie = await Promise.resolve(moviesMocks[0].id)
    return deletedMovie || {}
  }
}

module.exports = { MoviesService }
