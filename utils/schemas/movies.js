const joi = require('@hapi/joi')

//Individual schemas
const id = joi.string().regex(/^[0-9a-fA-f]{24}$/),
  title = joi.string().max(80),
  year = joi
    .number()
    .min(1888)
    .max(2077),
  cover = joi.string().uri(),
  description = joi.string().max(300),
  duration = joi.number().integer().min(1).max(400),
  contentRating = joi.string().max(5),
  source = joi.string().uri(),
  tags = joi.array().items(joi.string().max(50))

const createSchema = {
  title: title.required(),
  year: year.required(),
  cover: cover.required(),
  description: description.required(),
  duration: duration.required(),
  contentRating: contentRating.required(),
  source: source.required(),
  tags
}

const updateSchema = {
  title,
  year,
  cover,
  description,
  duration,
  contentRating,
  source,
  tags
}

module.exports = {
  movieIdSchema: id,
  createMovieSchema: createSchema,
  updateMovieSchema: updateSchema
}
