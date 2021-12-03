'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateSchema extends Schema {
  up () {
    this.create('candidates', (table) => {
      table.increments('candidateId')
      table.string('nameFull',80).notNullable().unique()
      table.string('email',60).notNullable().unique()
      table.String('telefono',9).notNullable().unique()
      table.date().notNullable()
      table.int('salarioActual',7).notNullable()
      table.int('salarioDeseado',7).notNullable()
      table.String('localidad',25).notNullable()
      table.string('pais',25).notNullable()
      table.boolean('remoto').notNullable()
      table.boolean('movilidad').notNullable()
      table.boolean('activo').notNullable()
      table.integer('userId').unsigned().references('userId').inTable('user')
      table.timestamps()
    })
  }

  down () {
    this.drop('candidates')
  }
}

module.exports = CandidateSchema
