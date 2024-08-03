const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const candidatos = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      correo_electronico: 'juan.perez@example.com',
      telefono: '+57 300 123 4567'
    },
    { 
      nombre: 'María',
      apellido: 'García',
      correo_electronico: 'maria.garcia@example.com',
      telefono: '+57 310 234 5678'
    },
    {
      nombre: 'Pedro',
      apellido: 'Rodríguez',
      correo_electronico: 'pedro.rodriguez@example.com',
      telefono: '+57 320 345 6789'
    },
    {
      nombre: 'Ana',
      apellido: 'Martínez',
      correo_electronico: 'ana.martinez@example.com',
      telefono: '+57 350 456 7890'
    },
    {
      nombre:'Luis',
      apellido: 'Gómez',
      correo_electronico: 'luis.gomez@example.com',
      telefono: '+57 360 567 8901'
    },
    {
      nombre: 'Laura',
      apellido: 'Hernández',
      correo_electronico: 'laura.hernandez@example.com',
      telefono: '+57 370 678 9012'
    },
    {
      nombre: 'Carlos',
      apellido: 'Sánchez',
      correo_electronico: 'carlos.sanchez@example.com',
      telefono: '+57 380 789 0123'
    },
    {
      nombre: 'Sofía',
      apellido: 'López',
      correo_electronico: 'sofia.lopez@example.com',
      telefono: '+57 390 890 1234'
    },
    {
      nombre: 'Andrés',
      apellido: 'Díaz',
      correo_electronico: 'andres.diaz@example.com',
      telefono: '+57 310 901 2345'
    },
    {
      nombre: 'Mónica',
      apellido: 'Ramírez',
      correo_electronico: 'monica.ramirez@example.com',
      telefono: '+57 320 012 3456'
    }
  ]

  for (const candidato of candidatos) {
    await prisma.candidato.create({
      data: candidato,
    })
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })