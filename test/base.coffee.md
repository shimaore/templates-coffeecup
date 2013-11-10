    templates = require '../'

    should = require 'should'
    vows = require 'vows'

    process.on 'uncaughtException', (err) ->
      console.log "Caught exception: #{err}"

    dir = './test/demo'

    suite = vows.describe 'The templates-coffeecup module'
    suite.addBatch
      'parses':
        topic: -> templates dir
        'all files': (it) ->
          console.dir it
          it.should.have.a.property 'index'
          it.should.not.have.a.property 'foo'

      'renders as function':
        topic: -> templates(dir) 'index', {title: 'Hello world'}
        'index': (it) ->
          it.should.equal '''<html><head><title>Hello world</title></head><body><h1>Hello world</h1></body></html>'''

      'renders as object':
        topic: -> templates(dir).index {title: 'Hello world'}
        'index': (it) ->
          it.should.equal '''<html><head><title>Hello world</title></head><body><h1>Hello world</h1></body></html>'''


    suite.export module
