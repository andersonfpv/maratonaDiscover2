// express é uma biblioteca para cirar o servidor
const express = require('express');
//router é uma parte que ira criar os caminhos(routes)
const routes = express.Router()

//views ou tbm pode ser basePath, é o caminho base (onde encontrei as minhas views)
const views = __dirname + "/views/"

const profile = {
    name: "Anderson",
    avatar: "https://github.com/andersonfpv.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

const jobs = []

// request(req), response(res) só encurtei o nome
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    jobs.push(req.body)
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


module.exports = routes;