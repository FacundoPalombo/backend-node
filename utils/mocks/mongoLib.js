const sinon = require('sinon')

const {
  moviesMocks,
  filteredMoviesMock
} = require('./movies')

const getAllStub = sinon.stub()
getAllStub.withArgs('movies').resolves(moviesMocks)

const tagQuery = {
  tags: { tags: { $in: 'Drama '} }
}

getAllStub.withArgs('movies', tagQuery).resolves(moviesMocks)

const createStub = sinon.stub().resolves(moviesMocks[0].id)

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query)
  }
  create(collection, data) {
    return createStub(collection, data)
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
}