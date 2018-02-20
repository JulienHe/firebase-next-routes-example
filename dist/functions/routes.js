const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('about', '/about', 'about')
.add('blog', '/blog', 'about')
