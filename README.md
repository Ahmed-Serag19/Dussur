# Dusser Landing Page

Welcome to the **Dusser Landing Page**! This project showcases the landing page for **Dusser**, a company focused on building innovative software solutions. This repository contains all the necessary code and configurations for the landing page, including responsive design, contact form integration, and various sections for displaying company information and services.

## Features

- **Hero Section**: An impactful hero section to introduce the company and its core values.
- **About Us Section**: A detailed section explaining the company's mission and vision.
- **Services Section**: A section to highlight the services offered by Dusser.
- **Contact Form**: Integrated contact form powered by [EmailJS](https://www.emailjs.com/) to allow visitors to get in touch.
- **Responsive Layout**: The page adapts seamlessly for both desktop and mobile devices.
- **Multilingual Support**: The page supports both English and Arabic, with automatic text direction adjustment (LTR/RTL).
- **Tailwind CSS**: The design is built using Tailwind CSS for a clean, modern, and customizable UI.
- **Smooth Animations**: Utilizes Framer Motion and Tailwind CSS animations for a smooth user experience.

## Installation

To get started with this project, follow the steps below.

### Prerequisites

Ensure you have **Node.js** (version 16 or higher) installed on your machine. You can download it from the official website: https://nodejs.org

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/dusser-landing-page.git
cd dusser-landing-page
Step 2: Install dependencies
Install the required dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Step 3: Run the development server
Start the development server with:

bash
Copy code
npm run dev
# or
yarn dev
This will start the server and you can visit the landing page at http://localhost:3000.

Step 4: Build for production
To build the project for production:

bash
Copy code
npm run build
# or
yarn build
Then, to start the production server:

bash
Copy code
npm run start
# or
yarn start
Technologies Used
Next.js: A React framework for building server-rendered React applications.
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Framer Motion: A motion library for React that enables smooth animations.
EmailJS: A service to send emails directly from JavaScript (used for contact form submission).
Zod: TypeScript-first schema validation library.
Folder Structure
bash
Copy code
├── components/
│   ├── AboutUs.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
├── pages/
│   ├── index.tsx
├── public/
│   └── assets/
├── styles/
│   └── tailwind.css
├── tailwind.config.js
├── tsconfig.json
├── package.json
components/: Contains all React components for various sections of the landing page.
pages/: Contains the main page (index.tsx).
public/: Static files like images, icons, and assets.
styles/: Tailwind CSS configuration and global styles.
tailwind.config.js: Tailwind CSS configuration file.
tsconfig.json: TypeScript configuration file.
Contributing
Feel free to fork this repository and make changes. If you want to contribute improvements, submit a pull request, and we’ll review it.

Contact
For any inquiries or questions, feel free to reach out via the Contact Section on the landing page.

vbnet
Copy code






