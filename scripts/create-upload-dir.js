const fs = require('fs')
const path = require('path')

const uploadDir = path.join(process.cwd(), 'public', 'uploads')

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
  console.log('✅ Pasta uploads criada em public/uploads')
} else {
  console.log('ℹ️  Pasta uploads já existe')
}

// Criar .gitkeep para manter a pasta no git
const gitkeepPath = path.join(uploadDir, '.gitkeep')
if (!fs.existsSync(gitkeepPath)) {
  fs.writeFileSync(gitkeepPath, '')
  console.log('✅ Arquivo .gitkeep criado')
}

