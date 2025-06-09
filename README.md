# 📱 QR Code Generator & Scanner

Aplicação móvel desenvolvida com **Ionic Framework** e **Angular** que permite gerar QR Codes a partir de qualquer texto ou URL, além de escanear códigos QR usando a câmera do dispositivo. O projeto demonstra a integração de plugins nativos em aplicações híbridas e oferece uma interface simples e funcional.

## ⚙️ Tecnologias Utilizadas

- **Ionic Framework 3.9.5**: Framework para desenvolvimento de apps híbridos com suporte a Android/iOS/PWA
- **Angular 5.2.11**: Framework front-end baseado em componentes
- **TypeScript 2.6.2**: Linguagem de programação tipada baseada em JavaScript
- **Cordova 7.0.0**: Framework para acesso a recursos nativos do dispositivo
- **Plugin BarcodeScanner**: Para geração e leitura de códigos QR
- **HTML5 + CSS3**: Estrutura e estilos da interface

## 🎯 Funcionalidades

- **Geração de QR Codes**: Digite qualquer texto ou URL e gere um QR Code instantaneamente
- **Leitura de QR Codes**: Use a câmera do dispositivo para escanear códigos QR
- **Validação de Entrada**: Evita a geração de QR Codes com texto vazio
- **Feedback ao Usuário**: Alertas informativos sobre o resultado das operações
- **Interface com Abas**: Navegação intuitiva entre as diferentes seções do aplicativo

## 📱 Capturas de Tela

*(Adicionar capturas de tela do aplicativo aqui)*

## 📁 Estrutura do Projeto

```
QRCODE/
├── resources/          # Recursos para build (ícones, splash screens)
├── src/                # Código-fonte principal do app
│   ├── app/            # Configuração do aplicativo Angular
│   ├── assets/         # Recursos estáticos (imagens, fontes)
│   ├── pages/          # Componentes de página
│   │   ├── about/      # Página "Sobre"
│   │   ├── contact/    # Página "Contato"
│   │   ├── home/       # Página principal com gerador/scanner
│   │   └── tabs/       # Navegação por abas
│   └── theme/          # Estilos e temas
├── config.xml          # Configuração do Cordova
├── ionic.config.json   # Configurações específicas do projeto Ionic
├── package.json        # Dependências e scripts npm
└── README.md           # Documentação do projeto
```

## 📦 Instalação e Execução

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/ValeriaRoyal/QRCODE.git
   cd QRCODE
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o app no navegador (desenvolvimento):**
   ```bash
   ionic serve
   ```

4. **Para rodar em um dispositivo Android:**
   ```bash
   ionic cordova platform add android  # Se a plataforma ainda não estiver adicionada
   ionic cordova run android
   ```

5. **Para gerar um APK:**
   ```bash
   ionic cordova build android
   ```

> **Nota:** É necessário ter o Android SDK configurado para builds mobile.

## 🔧 Requisitos do Sistema

- **Node.js** 10.x ou superior
- **npm** 6.x ou superior
- **Cordova** 7.x ou superior
- **Android Studio** (para builds Android)
- **Xcode** (para builds iOS, apenas em macOS)

## 🚀 Melhorias Recentes

- Correção de bug na exibição do texto escaneado
- Adição de conteúdo nas páginas "Sobre" e "Contato"
- Implementação de validação de entrada e feedback ao usuário
- Melhorias na documentação do projeto

## 🔜 Próximos Passos

- Atualização das dependências para versões mais recentes
- Implementação de histórico de QR Codes escaneados
- Adição de funcionalidade para compartilhar QR Codes gerados
- Melhorias no design e na experiência do usuário

## 👩‍💻 Desenvolvedora

- **Valéria Regina** - [GitHub](https://github.com/ValeriaRoyal)

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

---

📌 Este projeto foi desenvolvido com fins de estudo e prática de desenvolvimento de aplicações móveis híbridas com Ionic e Angular. Contribuições e sugestões são bem-vindas!
