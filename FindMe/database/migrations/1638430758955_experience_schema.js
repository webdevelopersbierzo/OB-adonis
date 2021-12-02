'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExperienceSchema extends Schema {
  up () {
    this.create('experiences', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('experiences')
  }
}

module.exports = ExperienceSchema
