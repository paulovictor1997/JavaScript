'use client'

import { useEffect, useState } from 'react'
import { Activity, HardDrive, Server, AlertTriangle, CheckCircle, XCircle, RefreshCw } from 'lucide-react'

function StatusBadge({ status }) {
  const config = {
    healthy: { color: 'bg-[#2E826D]', icon: CheckCircle, label: 'Normal' },
    critical: { color: 'bg-[#E60925]', icon: XCircle, label: 'Crítico' },
    warning: { color: 'bg-[#D9A62E]', icon: AlertTriangle, label: 'Atenção' },
  }

  const { color, icon: Icon, label } = config[status] || config.warning

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium text-white ${color}`}>
      <Icon size={14} />
      {label}
    </span>
  )
}

export default function DashboardPage() {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch('/api/healthcheck')
      if (!res.ok) throw new Error('Falha ao buscar dados')
      const data = await res.json()
      setRecords(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const stats = {
    total: records.length,
    healthy: records.filter(r => r.status === 'healthy').length,
    critical: records.filter(r => r.status === 'critical').length,
    warning: records.filter(r => r.status === 'warning').length,
  }

  return (
    <div className="flex flex-1 flex-col p-6 gap-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="text-[#3E8FB0]" size={32} />
          <h1 className="text-2xl font-bold tracking-tight">Health Check PDVs</h1>
        </div>
        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center gap-2 rounded-lg bg-[#3E8FB0] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#357a96] disabled:opacity-50"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          Atualizar
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-white/60">Total de Registros</p>
          <p className="mt-1 text-3xl font-bold">{stats.total}</p>
        </div>
        <div className="rounded-xl border border-[#2E826D]/30 bg-[#2E826D]/10 p-4">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#2E826D]" />
            <p className="text-sm text-[#2E826D]">Normais</p>
          </div>
          <p className="mt-1 text-3xl font-bold text-[#2E826D]">{stats.healthy}</p>
        </div>
        <div className="rounded-xl border border-[#D9A62E]/30 bg-[#D9A62E]/10 p-4">
          <div className="flex items-center gap-2">
            <AlertTriangle size={16} className="text-[#D9A62E]" />
            <p className="text-sm text-[#D9A62E]">Atenção</p>
          </div>
          <p className="mt-1 text-3xl font-bold text-[#D9A62E]">{stats.warning}</p>
        </div>
        <div className="rounded-xl border border-[#E60925]/30 bg-[#E60925]/10 p-4">
          <div className="flex items-center gap-2">
            <XCircle size={16} className="text-[#E60925]" />
            <p className="text-sm text-[#E60925]">Críticos</p>
          </div>
          <p className="mt-1 text-3xl font-bold text-[#E60925]">{stats.critical}</p>
        </div>
      </div>

      {/* Records Table */}
      <div className="flex-1 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Server size={20} className="text-[#3E8FB0]" />
            Registros Recentes
          </h2>
        </div>

        {loading && records.length === 0 ? (
          <div className="flex items-center justify-center py-16">
            <RefreshCw size={32} className="animate-spin text-white/40" />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <XCircle size={40} className="text-[#E60925]" />
            <p className="text-white/60">{error}</p>
            <button
              onClick={fetchData}
              className="rounded-lg bg-[#3E8FB0] px-4 py-2 text-sm font-medium text-white hover:bg-[#357a96]"
            >
              Tentar novamente
            </button>
          </div>
        ) : records.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <HardDrive size={40} className="text-white/20" />
            <p className="text-white/40">Nenhum registro encontrado</p>
            <p className="text-sm text-white/30">Execute o script PowerShell para coletar dados</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="px-6 py-3 font-medium text-white/60">Máquina</th>
                  <th className="px-6 py-3 font-medium text-white/60">Serviço</th>
                  <th className="px-6 py-3 font-medium text-white/60">Status</th>
                  <th className="px-6 py-3 font-medium text-white/60">Disco</th>
                  <th className="px-6 py-3 font-medium text-white/60">Coletado em</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {records.map((record) => (
                  <tr key={record.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-[#3E8FB0]">{record.machineId}</td>
                    <td className="px-6 py-4">{record.serviceName}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="px-6 py-4 text-white/80">{record.diskSpace}</td>
                    <td className="px-6 py-4 text-white/50">
                      {new Date(record.collectedAt).toLocaleString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}