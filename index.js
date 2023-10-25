
const jsonServer = require('json-server')

const Stickynote = jsonServer.create()

const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()

const port = 4000 || process.env.PORT

Stickynote.use(middlewares)
Stickynote.use(router)

Stickynote.listen(port,()=>{
    console.log(`StickyNote server started at port ${port},and waiting for client request!!!`);
})