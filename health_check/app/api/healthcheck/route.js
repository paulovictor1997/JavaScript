import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request) {
  try {
    const body = await request.json()
    const { machineId, serviceName, status, diskSpace } = body

    if (!machineId || !serviceName || !status || !diskSpace) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: machineId, serviceName, status, diskSpace' },
        { status: 400 }
      )
    }

    const record = await prisma.healthCheck.create({
      data: {
        machineId,
        serviceName,
        status,
        diskSpace,
      },
    })

    return NextResponse.json(record, { status: 201 })
  } catch (error) {
    console.error('Erro ao salvar health check:', error)
    return NextResponse.json(
      { error: 'Erro interno ao salvar dados' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const records = await prisma.healthCheck.findMany({
      orderBy: { collectedAt: 'desc' },
    })

    return NextResponse.json(records)
  } catch (error) {
    console.error('Erro ao buscar health checks:', error)
    return NextResponse.json(
      { error: 'Erro interno ao buscar dados' },
      { status: 500 }
    )
  }
}