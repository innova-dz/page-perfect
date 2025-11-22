# Innova Digital - Link Hub

A premium, corporate-style link-in-bio landing page designed for Innova Digital. Built with React, Tailwind CSS, and TypeScript.

## Features

- 🎨 **Premium UI**: Glassmorphism effects, gradients, and smooth animations.
- 📱 **Responsive**: Optimized for mobile and desktop viewing.
- ⚡ **Fast**: Powered by Vite.
- 💅 **Tailwind CSS**: Utilizes utility-first CSS for styling.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/innova-digital-link-hub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd innova-digital-link-hub
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

### Build

To build for production:

```bash
npm run build
```

## Deployment (GitHub Pages)

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

1. Push your code to GitHub.
2. Go to your repository **Settings**.
3. Click on **Pages** in the sidebar.
4. Under **Build and deployment**, select **GitHub Actions** from the Source dropdown.
5. The deployment workflow will automatically run. You can check progress in the **Actions** tab.

## Customization

- **Links & Profile**: Edit `constants.ts` to update the profile information and social links.
- **Styling**: Tailwind configuration is currently embedded in `index.html` for simplicity but can be extracted to `tailwind.config.js` for advanced usage.

## License

[MIT](LICENSE)