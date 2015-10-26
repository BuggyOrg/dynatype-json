/* global describe, it */

var expect = require('chai').expect

var dtype = require('dynatype')
var json = require('../lib/json')

var t1 = dtype.descriptor('A', {})
var t2 = dtype.descriptor('B', {})
var t = dtype.translator(t1, t2)

describe('Translator Graph', function () {
  it('Converts a datatype to json', function () {
    var pjson = JSON.parse(json.stringify(t1))
    expect(pjson).to.be.an('object')
    expect(pjson.descriptors).to.be.an('array')
    expect(pjson.descriptors).to.have.length(1)
    // this should be the same name as in dynatype
    expect(pjson.descriptors[0].name).to.equal('A')
  })
  it('Converts a translator to json', function () {
    var pjson = JSON.parse(json.stringify(t))
    var tr = pjson.translators
    expect(tr).to.be.an('array')
    expect(tr).to.have.length(1)
    expect(tr[0].from).to.equal('A')
    expect(tr[0].to).to.equal('B')
  })
  it('Includes datatypes for a translator', function () {
    var pjson = JSON.parse(json.stringify(t))
    expect(pjson.descriptors).to.be.an('array')
    expect(pjson.descriptors).to.have.length(2)
  })
  it('Can stringify an array of dynatype objects', function () {
    var t3 = dtype.descriptors('C', {})
    var pjson = JSON.parse(json.stringify([t3, t]))
    // length = 3 (2 from t, 1 from t3)
    expect(pjson.descriptors).to.have.length(3)
  })
})
