import Fastify from 'fastify'
const app = Fastify();

app.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

app.listen({ port: 3000 }).then(()=>{
  console.log("Server is running")
})
