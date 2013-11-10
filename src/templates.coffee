coffeecup = require 'coffeecup'
path = require 'path'
fs = require 'fs'

endsWith = (t,e) ->
  t[-e.length..-1] is e

module.exports = (src, extension = '.html.coffee') ->
  dir = path.resolve process.cwd(), src
  coffeecup_files = fs.readdirSync(dir).filter (_) -> endsWith _, extension

  views = (name,options) ->
    views[name] options

  for file in coffeecup_files
    do (file) ->
      name = path.basename file, extension
      template = coffeecup.compile fs.readFileSync path.join(dir, file), 'utf-8'
      views[name] = template

  views
