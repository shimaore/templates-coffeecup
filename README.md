Install
=======

    npm install templates-coffeecup

Usage
=====

    render = require('templates-coffeecup') 'templates', '.html.coffee'
    render 'index', {title:'Hello world'}

Or

    views = require('templates-coffeecup') 'templates', '.html.coffee'
    views.index {title:'Hello world'}
