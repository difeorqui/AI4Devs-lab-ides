const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// ...

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.get('/candidatos', async (req, res) => { const candidatos = await prisma.candidato.findMany()
  res.json(candidatos)
})

app.get('/candidatos/:id', async (req, res) => {
    const { id } = req.params
    const candidato = await prisma.candidato.findUnique({
      where: { id: parseInt(id) }
    })
    res.json(candidato)
  })

app.post('/candidatos', async (req, res) => {
    const { nombre, apellido, correo_electronico, telefono } = req.body
    constato = await prisma.candidato.create({
      data: { nombre, apellido, correo_electronico, telefono }
    })
    res.json(candidato)
  })

app.put('/candidatos/:id', async (req, res) => {
    const { id } = req.params
    const { nombre, apellido, correo_electronico, telefono } = req.body
    const candidato = await prisma.candidato.update({
      where: { id: parseInt(id) },
      data: { nombre, apellido, correo_electronico, telefono }
    })
    res.json(candidato)
  })

app.delete('/candidatos/:id', async (req, res) => {
    const { id } = req.params
    const candidato = await prisma.candidato.delete({
      where: { id: parseInt(id) }
    })
    res.json(candidato)
  })