# 📱 QR Code Generator

Aplicação simples desenvolvida com **JavaScript**, **HTML5** e **CSS3** que permite gerar QR Codes a partir de qualquer texto ou URL informada pelo usuário. O projeto tem como foco a prática de manipulação de DOM, consumo de APIs externas e interações dinâmicas com o usuário.

## ⚙️ Tecnologias Utilizadas

- **Ionic Framework**: estrutura para desenvolvimento de apps híbridos com suporte a Android/iOS/PWA.
- **Angular**: arquitetura front-end baseada em componentes.
- **TypeScript**: tipagem estática e melhores práticas de desenvolvimento.
- **Cordova/Capacitor** (implícito pelo `config.xml`): integração com APIs nativas.
- **HTML5 + CSS3**: estrutura e estilos da interface.


## 🎯 Funcionalidades

- Campo de entrada para texto ou links
- Geração instantânea de QR Code ao clicar em "Gerar"
- Validação de entrada vazia
- Exibição do QR Code como imagem diretamente na página

## 📁 Estrutura de Diretórios

```
project-root/
├── resources/ # Recursos para build (ícones, splash screens)
├── src/ # Código-fonte principal do app
├── config.xml # Configuração do Cordova
├── ionic.config.json # Configurações específicas do projeto Ionic
├── package.json # Dependências e scripts npm
├── tsconfig.json # Configurações do TypeScript
├── tslint.json # Regras de linting
└── README.md # Descrição do projeto
```

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/ValeriaRoyal/QRCODE.git
   cd QRCODE
   
2. Instale as dependências:
   ```bash
   npm install
3. Execute o app em ambiente de desenvolvimento:
    ```bash
    ionic serve
4. Para rodar no emulador ou dispositivo físico:
   ```bash
   ionic cordova run android

## 🔧 É necessário ter o Android SDK ou Xcode configurado para builds mobile.
      
## 🔍 Funcionalidades Esperadas

- Geração de QR Codes a partir de texto/links
- Leitura de QR Codes usando a câmera do dispositivo
- Design responsivo adaptável para mobile e web
- Integração com API externa (ex: goqr.me) ou pacote local de geração/leitura

## 🧪 Aprendizados e Ponto de Estudo

- Arquitetura modular com Angular
- Uso de componentes, serviços e módulos Ionic
- Manipulação de plugins nativos via Cordova/Capacitor
- Deploy em múltiplas plataformas (Android, Web)


📌 Este projeto foi desenvolvido com fins de estudo e prática de JavaScript e integração com serviços externos. Contribuições e sugestões são bem-vindas!
