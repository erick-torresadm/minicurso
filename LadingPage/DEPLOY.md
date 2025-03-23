# Guia de Deploy

Este guia fornece instruções detalhadas para fazer o deploy da plataforma em produção.

## 🚀 Build do Projeto

1. Instale as dependências:
```bash
npm install
```

2. Crie o build de produção:
```bash
npm run build
```

3. Verifique a pasta `dist` com os arquivos otimizados.

## 📦 Deploy na Hostinger

### Preparação

1. Faça login no painel da Hostinger
2. Vá para "Gerenciador de Arquivos"
3. Navegue até a pasta `public_html`

### Upload dos Arquivos

1. Faça upload de todos os arquivos da pasta `dist`
2. Certifique-se de que o arquivo `.htaccess` está na raiz
3. Verifique se o `index.html` está na raiz

### Configuração do .htaccess

O arquivo `.htaccess` deve conter:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]

# Comprimir arquivos
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache do navegador
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/x-javascript "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresDefault "access plus 2 days"
</IfModule>
```

### Configurações do Servidor

1. Ative o SSL/HTTPS:
   - Vá para "SSL/TLS"
   - Clique em "Configurar"
   - Selecione "Ativar SSL"

2. Configure o domínio:
   - Vá para "Domínios"
   - Configure o domínio principal
   - Adicione redirecionamento www se necessário

3. Otimizações:
   - Ative o GZIP
   - Configure o cache do navegador
   - Verifique se mod_rewrite está ativo

## ✅ Checklist Pós-Deploy

1. **Verificações Básicas**:
   - [ ] Site carrega corretamente
   - [ ] HTTPS funcionando
   - [ ] Rotas funcionando
   - [ ] Vídeos carregando
   - [ ] Formulários enviando

2. **Performance**:
   - [ ] Tempo de carregamento aceitável
   - [ ] Imagens otimizadas
   - [ ] Cache funcionando
   - [ ] Compressão GZIP ativa

3. **Mobile**:
   - [ ] Layout responsivo
   - [ ] Vídeos funcionando
   - [ ] Controles touch funcionando
   - [ ] Menu mobile funcionando

4. **Segurança**:
   - [ ] SSL ativo
   - [ ] Headers de segurança
   - [ ] Redirecionamento HTTPS
   - [ ] Arquivos sensíveis protegidos

## 🔧 Solução de Problemas

### Página em Branco
- Verifique se o `.htaccess` está correto
- Confira se todos os arquivos foram enviados
- Verifique os logs de erro do servidor

### Vídeos Não Carregam
- Verifique a conexão com a API do YouTube
- Confira as configurações de CORS
- Teste diferentes qualidades de vídeo

### Problemas de Rota
- Verifique o arquivo `.htaccess`
- Confira se mod_rewrite está ativo
- Teste todas as rotas principais

## 📞 Suporte

Em caso de problemas:
1. Verifique os logs do servidor
2. Consulte a documentação da Hostinger
3. Entre em contato com o suporte técnico 