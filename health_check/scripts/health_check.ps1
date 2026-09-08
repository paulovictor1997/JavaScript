# Health Check - Script de Coleta de Dados (Teste Local)
# Identificador fixo para ambiente de teste
$machineId = "Victor"
$apiUrl = "http://localhost:3000/api/healthcheck"

# Coletar dados genéricos do notebook
# 1. Status de um serviço Windows genérico (Windows Update como exemplo)
$service = Get-Service -Name wuauserv -ErrorAction SilentlyContinue
if ($service) {
    $serviceName = $service.Name
    $status = if ($service.Status -eq 'Running') { "healthy" } elseif ($service.Status -eq 'Stopped') { "critical" } else { "warning" }
} else {
    $serviceName = "wuauserv"
    $status = "critical"
}

# 2. Espaço em disco da unidade C:
$disk = Get-PSDrive -Name C -ErrorAction SilentlyContinue
if ($disk) {
    $freeGB = [math]::Round($disk.Free / 1GB, 2)
    $totalGB = [math]::Round(($disk.Used + $disk.Free) / 1GB, 2)
    $diskSpace = "${freeGB}GB livres de ${totalGB}GB"
} else {
    $diskSpace = "Não disponível"
}

# Montar payload
$body = @{
    machineId   = $machineId
    serviceName = $serviceName
    status      = $status
    diskSpace   = $diskSpace
} | ConvertTo-Json

# Enviar para a API
try {
    $response = Invoke-RestMethod -Uri $apiUrl -Method Post -Body $body -ContentType "application/json"
    Write-Host "[OK] Dados enviados com sucesso!" -ForegroundColor Green
    Write-Host "ID do registro: $($response.id)" -ForegroundColor Cyan
} catch {
    Write-Host "[ERRO] Falha ao enviar dados: $_" -ForegroundColor Red
}