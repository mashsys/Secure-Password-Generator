# 🔐 Mash Secure Password Generator

> Create secure, unique, and easy-to-use passwords.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![License](https://img.shields.io/badge/license-MIT-ff71c8?style=for-the-badge)

Mash Secure Password Generator is an open-source password generator that runs in your browser and never sends your passwords to a server.

## ✨ Features

- 🇹🇷 Turkish and 🇬🇧 English language support
- 🌙 Dark and light themes
- 🧠 Memorable password generation
  - 1–10 words
  - Turkish and English word lists
  - Hyphens, commas, numbers, symbols, periods, spaces, and underscores
  - Uppercase and number options
- 🎲 Random password generation
  - 4–64 characters
  - Uppercase, number, and special character options
- 🛡️ Password strength indicator
- 📋 One-click copying
- 🔁 No repeated passwords during the same session
- 👁️ Hideable password history
- 💾 Language and theme preferences are remembered
- 📱 Responsive mobile-friendly interface

## 🚀 Getting Started

### Easiest method

1. Download this folder or clone the repository with Git.
2. Double-click `mash-baslat.bat`.
3. The application opens in your default browser.

### Manual method

Open `mash.html` with Chrome, Edge, Firefox, or another modern browser.

> If Windows does not open HTML files correctly, use `mash-baslat.bat`.

## 🧩 File structure

| File | Description |
| --- | --- |
| `mash.html` | Main page and user interface |
| `styles.css` | Colors, themes, responsive design, and animations |
| `app.js` | Password generation, language/theme switching, history, and copying |
| `mash-baslat.bat` | Opens the application in a Windows browser |

## 🔒 Privacy and security

- Passwords are never sent to a server.
- Password generation happens entirely in the browser.
- The browser's `crypto.getRandomValues()` API is used for random values.
- Password history is kept only during the active session.
- Language and theme preferences are stored in `localStorage`; password history is not persisted.

This tool helps you generate secure passwords. We recommend storing generated passwords in a trusted password manager.

## 🎨 Theme options

| Language | Dark theme | Light theme |
| --- | --- | --- |
| Turkish | Black/pink | White/pink |
| English | Black/blue | White/blue |

## 🛠️ Development

No installation or package manager is required. Edit the HTML, CSS, or JavaScript files and refresh `mash.html` in your browser.

## 👤 Creator

**Created by Zeynep Sude (mash)**

- GitHub: [github.com/mashsys](https://github.com/mashsys)
- Instagram: [@zsudeimamoglu](https://instagram.com/zsudeimamoglu)
- Discord: [mashim](https://discord.com/users/1145432527910219876)

## 📄 License

This project is released under the [MIT License](./LICENSE). You may use, modify, and distribute the code as long as the license and copyright notice are preserved.

---

⭐ If you like the project, consider giving it a star on GitHub.

**Created by Zeynep Sude (mash) · Open source**
