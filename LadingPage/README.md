# Plataforma de Curso Online

Plataforma moderna e responsiva para cursos online construída com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- ✨ Player de vídeo personalizado estilo Netflix
- 📱 Design responsivo para todos os dispositivos
- 🎯 Controles de vídeo intuitivos
- 🔄 Navegação suave entre aulas
- 🌙 Tema escuro elegante
- ⚡ Performance otimizada
- 🔒 Integração segura com API

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [seu-repositorio]
cd [nome-do-diretorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:3001`

## 🚀 Deploy

Para fazer o build do projeto:

```bash
npm run build
```

Os arquivos de produção estarão na pasta `dist`.

### Deploy na Hostinger

1. Faça o build do projeto
2. Upload dos arquivos da pasta `dist` para o diretório `public_html`
3. Configure o arquivo `.htaccess` para roteamento correto
4. Ative SSL no painel da Hostinger

## 🎨 Personalização

O projeto usa variáveis CSS para fácil personalização de cores e estilos. Principais variáveis:

```css
:root {
  --primary-color: #000000;
  --secondary-color: #1a1a1a;
  --accent-color: #C5B685;
  --text-color: #ffffff;
  --light-text: #9ca3af;
}
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter
- `npm run type-check` - Verifica tipos TypeScript

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request 

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes React
  ├── App.tsx        # Componente principal do curso
  ├── LandingPage.tsx # Página inicial
  ├── main.tsx       # Ponto de entrada
  ├── index.css      # Estilos globais
  └── types.d.ts     # Definições de tipos
```

## Build de Produção

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`. 