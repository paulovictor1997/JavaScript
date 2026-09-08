# Health Check PDVs — Teste Local

Painel de monitoramento de saúde de máquinas para validação do fluxo completo **coleta → envio → banco → dashboard** em ambiente local (notebook), antes do piloto na loja matriz.

---

## 📋 Funcionalidades Implementadas

### Backend (Next.js API Routes)
- **POST `/api/healthcheck`** — Recebe dados de health check via JSON (`machineId`, `serviceName`, `status`, `diskSpace`) e grava no PostgreSQL
- **GET `/api/healthcheck`** — Retorna todos os registros ordenados por data de coleta (mais recente primeiro)
- Validação de campos obrigatórios com retorno HTTP 400 em caso de erro
- Tratamento de erros internos com retorno HTTP 500

### Banco de Dados (PostgreSQL + Prisma ORM)
- Modelo `HealthCheck` com campos: `id`, `machineId`, `serviceName`, `status`, `diskSpace`, `collectedAt`
- Tabela mapeada como `health_checks` no schema `public`
- Campo `collectedAt` com valor padrão `now()` (timestamp automático)
- Migrations versionadas em `prisma/migrations/`
- Conexão singleton via `lib/db.js` (evita múltiplas instâncias em desenvolvimento)

### Frontend (Dashboard)
- **Cards de estatísticas** — Total de registros, normais (verde), atenção (amarelo), críticos (vermelho)
- **Tabela de registros recentes** — Exibe máquina, serviço, status (badge colorido), disco e data/hora
- **Auto-refresh** a cada 30 segundos + botão manual "Atualizar"
- Estados visuais: loading (spinner), erro (com botão "Tentar novamente"), vazio (instrução para executar script)
- Badges de status dinâmicos com ícones Lucide React (CheckCircle, AlertTriangle, XCircle)

### Identidade Visual
| Uso | Cor | Aplicação |
|---|---|---|
| Fundo principal | `#0A0307` | Fundo geral do painel |
| Texto | `#EBEBEB` | Textos sobre fundo escuro |
| Crítico | `#E60925` | Status crítico |
| Normal / saudável | `#2E826D` | Status normal/saudável |
| Atenção | `#D9A62E` | Status intermediário |
| Destaque / ação | `#3E8FB0` | Botões, links, seleção |

- Fonte: **Roboto** (Google Fonts via `next/font`), pesos 300/400/500/700
- Ícones: **Lucide React**

### Script PowerShell de Coleta
- Coleta status do serviço Windows Update (`wuauserv`) como dado genérico de teste
- Coleta espaço em disco da unidade C: (livres / total em GB)
- Envia payload JSON via POST para a API local
- Identificador da máquina: **Victor** (configurável na variável `$machineId`)
- Feedback visual no terminal (sucesso em verde, erro em vermelho)

### Roteamento
- `/` redireciona automaticamente para `/dashboard`

---

## 🗂️ Estrutura de Pastas

```
health_check/
├── app/
│   ├── api/
│   │   └── healthcheck/
│   │       └── route.js          ← Backend: API Route POST/GET
│   ├── dashboard/
│   │   └── page.js               ← Frontend: painel de monitoramento
│   ├── layout.js                 ← Layout raiz (fonte Roboto, tema)
│   ├── globals.css               ← Variáveis CSS e paleta de cores
│   ├── page.js                   ← Redirecionamento para /dashboard
│   └── favicon.ico
├── lib/
│   └── db.js                     ← Backend: conexão Prisma singleton
├── prisma/
│   ├── schema.prisma             ← Modelo do banco de dados
│   └── migrations/               ← Migrations versionadas
├── scripts/
│   └── health_check.ps1          ← Script PowerShell de coleta
├── .env                          ← Variáveis de ambiente (DATABASE_URL)
├── package.json
├── next.config.mjs
├── jsconfig.json                 ← Alias @/* configurado
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## 🚀 Como Iniciar

### Pré-requisitos
- **Node.js** (v18+)
- **PostgreSQL** instalado e rodando localmente
- **npm** ou **yarn**

### 1. Instalar dependências

```powershell
npm install
```

### 2. Configurar o banco de dados PostgreSQL

#### Criar o banco
Abra o **pgAdmin** ou use o terminal `psql`:

```sql
CREATE DATABASE health_check;
```

#### Configurar a string de conexão
Edite o arquivo `.env` na raiz do projeto com as credenciais do seu PostgreSQL:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/health_check?schema=public"
```

> ⚠️ Substitua `USUARIO` e `SENHA` pelas suas credenciais reais do PostgreSQL.

#### Rodar as migrations
Este comando cria a tabela `health_checks` no banco:

```powershell
npx prisma migrate dev
```

#### Gerar o Prisma Client
Necessário após qualquer alteração no schema:

```powershell
npx prisma generate
```

### 3. Iniciar o servidor (Frontend + Backend)

O Next.js serve tanto o frontend quanto as API Routes em um único processo:

```powershell
npm run dev
```

O aplicativo estará disponível em **http://localhost:3000**. Ao acessar a raiz, será redirecionado automaticamente para `/dashboard`.

### 4. Coletar dados com o script PowerShell

Com o servidor rodando, execute em outro terminal:

```powershell
.\scripts\health_check.ps1
```

O script coletará dados do notebook e enviará para a API. Os resultados aparecerão no dashboard em até 30 segundos (ou clique em "Atualizar").

---

## 🔍 Visualizar Dados no Banco

### Opção A: Prisma Studio (interface web rápida)
```powershell
npx prisma studio
```
Abre em `http://localhost:5555` — visualize, edite e adicione registros sem SQL.

### Opção B: pgAdmin
1. Expanda **Servers** → seu servidor PostgreSQL
2. Navegue até **Databases** → **health_check** → **Schemas** → **public** → **Tables**
3. Clique com botão direito em **health_checks** → **View/Edit Data** → **All Rows**

### Opção C: psql (terminal)
```powershell
psql -U postgres -d health_check
```
```sql
SELECT * FROM health_checks ORDER BY collected_at DESC;
```

---

## 📡 Endpoints da API

### POST `/api/healthcheck`
Recebe dados de health check.

**Body:**
```json
{
  "machineId": "Victor",
  "serviceName": "wuauserv",
  "status": "healthy",
  "diskSpace": "120GB livres de 476GB"
}
```

**Resposta (201):**
```json
{
  "id": 2,
  "machineId": "Victor",
  "serviceName": "wuauserv",
  "status": "healthy",
  "diskSpace": "120GB livres de 476GB",
  "collectedAt": "2026-09-07T22:49:25.012Z"
}
```

### GET `/api/healthcheck`
Retorna todos os registros ordenados por data (mais recente primeiro).

**Resposta (200):**
```json
[
  {
    "id": 2,
    "machineId": "Victor",
    "serviceName": "wuauserv",
    "status": "healthy",
    "diskSpace": "120GB livres de 476GB",
    "collectedAt": "2026-09-07T22:49:25.012Z"
  }
]
```

---

## ⚙️ Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento (frontend + backend) |
| `npm run build` | Gera build de produção |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Roda ESLint |
| `npx prisma studio` | Abre interface visual do banco |
| `npx prisma migrate dev` | Cria e aplica migrations |
| `npx prisma generate` | Regenera o Prisma Client |

---

## 🔄 Reiniciar o Servidor em Outro Dia

Sempre que quiser usar o projeto novamente, basta rodar:

```powershell
npm run dev
```

O Next.js lê o `.env`, conecta ao PostgreSQL e sobe frontend + backend automaticamente. Nenhum passo extra é necessário.

### ⚠️ Verifique antes de iniciar

- **PostgreSQL precisa estar rodando** — se o serviço estiver parado, a API retorna erro de conexão. No Windows, verifique em **Serviços** (`services.msc`) se o serviço `postgresql-x64-*` está como "Em execução". Se não estiver, clique com botão direito → **Iniciar**.
- **Não rode `prisma migrate dev` novamente** — as migrations já foram aplicadas. Só use esse comando se alterar o schema.
- **Não rode `prisma generate` novamente** — só é necessário se reinstalar dependências ou mudar o schema.

---

## ❓ Sobre o `npx prisma init`

O comando `npx prisma init` **não precisa ser rodado** neste projeto porque ele já foi inicializado manualmente. Esse comando serve apenas para criar os arquivos de scaffolding inicial (`prisma/schema.prisma` e `.env`), que já existem e estão configurados.

| Comando | Quando usar |
|---|---|
| `npx prisma init` | Apenas ao começar um projeto do zero (não usar aqui) |
| `npx prisma migrate dev` | Após alterar o schema (cria e aplica nova migration) |
| `npx prisma generate` | Após alterar o schema ou reinstalar dependências |
| `npx prisma studio` | Para visualizar/editar dados via interface web |
| `npx prisma db push` | Alternativa rápida ao migrate (sem gerar arquivo de migration) |

---

## 📝 Notas Importantes

- Este é um **ambiente de teste local** — não há conexão com servidor da empresa, dados reais ou distribuição em massa
- O identificador da máquina está fixo como **"Victor"** no script PowerShell (editável na variável `$machineId`)
- Após validação completa deste fluxo local, o projeto avança para o piloto na loja matriz (documentado separadamente)
- O arquivo `.env` contém credenciais sensíveis — já está incluído no `.gitignore`