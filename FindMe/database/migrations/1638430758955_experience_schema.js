'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExperienceSchema extends Schema {
  up () {
    this.create('experiences', (table) => {
      table.increments('experienciaId')
      table.integer('candidateId').unsigned().references('candidateId').intable('candidates ')
      table.integer('skillId').unsigned().references('skillId').intable('skills')
      table.integer('nivel').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('experiences')
  }
}

module.exports = ExperienceSchema
