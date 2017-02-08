const express = require('express')

const router = express.Router()

router.get('*', (request, response) => {
  return response.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>FlatMe</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="app"></div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `)
})

module.exports = router
