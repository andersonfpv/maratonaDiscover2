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

const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        created_at = Date.now()
    },
    {
        id: 2,
        name: "OneTwo Projects",
        "daily-hours": 3,
        "total-hours": 47,
        created_at = Date.now()
    },
]



// request(req), response(res) só encurtei o nome
routes.get('/', (req, res) => {
    
    
    const updatedJobs = jobs.map((job) => {
        //ajustes no job
        //cálculo de tempo restante
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)

        const timeDiffInMs = dueDateInMs - Date.now()

        return job
    })
    
    return res.render(views + "index", { jobs })
})


routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {

    const lastId = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at = Date.now() // atribuindo data de hoje
    })
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


module.exports = routes;