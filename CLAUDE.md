# PROJETO: Society Club Labs — Blog de Reviews de IA

## O QUE ESTE SITE É
Blog de reviews de ferramentas de IA. Cada artigo é uma página HTML separada, listando "5 melhores IA para [tarefa]", com prós/contras de cada ferramenta e prompts prontos de uso. Público: criadores de conteúdo, marketers, devs. Foco: SEO e aprovação no Google AdSense.

## O QUE ESTE SITE NÃO É
NÃO é site institucional. NÃO tem mascote. NÃO invente tema fora dos 10 tópicos abaixo.

## STACK (fixa)
HTML5 + CSS3 + JavaScript puro (vanilla). Sem framework, sem Node.js, sem build step. Estrutura de múltiplas páginas HTML (multi-page, não SPA).

## ESTRUTURA DE PASTAS
/
├── index.html (home)
├── sobre.html
├── contato.html
├── politica-de-privacidade.html
├── termos-de-uso.html
├── /css/style.css (estilos compartilhados)
├── /js/main.js (menu mobile, etc.)
├── /images/
├── /categorias/
│   ├── ia-imagem.html (página de listagem da categoria)
│   ├── ia-video.html
│   ├── ia-copy.html
│   ├── ia-crm.html
│   ├── ia-produtividade.html
│   ├── ia-coding.html
│   ├── ia-motion.html
│   ├── ia-negocios.html
│   ├── ia-social-media.html
│   └── ia-automacao.html
├── /artigos/
│   ├── 10-melhores-ia-para-criar-imagem-gratis.html
│   ├── 10-melhores-ia-para-gerar-video-gratis.html
│   ├── 10-melhores-ia-para-criar-copy-gratis.html
│   ├── 10-melhores-ia-para-crm-gratis.html
│   ├── 10-melhores-ia-para-produtividade-gratis.html
│   ├── 10-melhores-ia-para-coding-gratis.html
│   ├── 10-melhores-ia-para-motion-gratis.html
│   ├── 10-melhores-ia-para-negocios-gratis.html
│   ├── 10-melhores-ia-para-social-media-gratis.html
│   └── 10-melhores-ia-para-automacao-gratis.html
└── sitemap.xml (lista manual de todas as URLs)

## OS 10 TÓPICOS (conteúdo de cada artigo)
1. ia-imagem: Midjourney, Ideogram, Flux, Leonardo AI, Google Gemini
2. ia-video: Sora, Kling, Google Veo, Pika, Runway
3. ia-copy: Jasper, Copy.ai, ChatGPT, Claude, Writesonic
4. ia-crm: HubSpot AI, Pipedrive AI, Salesforce Einstein, Zoho CRM AI, Close CRM
5. ia-produtividade: Notion AI, ClickUp AI, Motion, Reclaim AI, Todoist AI
6. ia-coding: Cursor, GitHub Copilot, Claude Code, Windsurf, Replit AI
7. ia-motion: Runway Motion Brush, Kling Motion Control, Pika Effects, Luma Ray, Hailuo
8. ia-negocios: ChatGPT, Claude, Gemini, Notion AI, IdeaBuddy
9. ia-social-media: Canva AI, Ocoya, Buffer AI, Later AI, Vista Social AI
10. ia-automacao: Zapier AI, Make, n8n, Power Automate AI, Pabbly Connect

## REGRAS DE CADA PÁGINA DE ARTIGO
- <head> com <title>, <meta name="description">, <link rel="canonical">, Open Graph tags
- Estrutura: H1 título, introdução corta, H2 para cada ferramenta com prós/contras, seção de prompts prontos, seção de FAQ no final
- Menu de navegação e rodapé idênticos em todas as páginas (copiar o mesmo HTML)
- Breadcrumb visual no topo (Home > Categoria > Artigo)
- Script JSON-LD (<script type="application/ld+json">) com schema Article e FAQPage

## NUNCA FAZER
- Nunca usar Next.js, React, Vue ou qualquer framework
- Nunca criar conteúdo institucional genérico fora dos 10 tópicos
- Nunca esquecer meta description e title em qualquer página
