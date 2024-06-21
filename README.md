# Arro Realty - Next.js Project

Welcome to the Arro Realty project! This repository contains the source code for the Arro Realty(A Certified Realtor Agency from Canada) website, built using tailwind CSS and Next.js, a React framework for server-rendered applications.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Introduction

Arro Realty is a modern real estate website designed to showcase properties and facilitate property management. The website leverages the power of Next.js to deliver a fast, SEO-friendly, and highly performant user experience.

## Features

- **Server-Side Rendering (SSR)**: Ensures fast load times and improved SEO.
- **Dynamic Routing**: Facilitates easy navigation and deep linking to property listings.
- **Responsive Design**: Provides a seamless experience across various devices.
- **Property Listings**: Displays detailed information about properties, including images, descriptions, and pricing.
- **Search Functionality**: Allows users to search for properties based on different criteria.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for building server-side applications.
- **CSS Modules**: For scoped and modular CSS.
- **API Integration**: Connects to backend services for property data.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muhit-khan/arro-realty-nextjs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd arro-realty-nextjs
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

Here's a overview of the project structure:

```
arro-realty-nextjs/
├── .next/                   # Next.js build output
├── node_modules/            # Node.js modules
├── out/                     # Static export output
├── public/                  # Public assets
│   └── images/
│       └── properties/
│           └── prop_01/
│           │   └── 1.jpg
│           ├── dark-arrow.png
│           ├── hero-bg.png
│           ├── hero.png
│           ├── logo.png
│           ├── menu-icon.png
│           ├── service-1.jpg
│           ├── service-2.jpg
│           ├── service-3.webp
│           ├── service-4.avif
│           ├── service-4.jpg
│           ├── service-bg.webp
│           ├── user-1.png
│           ├── user-2.png
│           ├── user-3.png
│           └── user-4.png
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   ├── properties/
│   │   │   ├── api/
│   │   │   ├── page.jsx
│   │   │   ├── PropertyCard.jsx
│   │   │   └── PropertyData.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   └── Components/
│       ├── About/
│       │   └── About.jsx
│       ├── Contact/
│       │   └── Contact.jsx
│       ├── FloatingWhatsapp/
│       │   └── FloatingWhatsapp.jsx
│       ├── Footer/
│       │   └── Footer.jsx
│       ├── Hero/
│       │   ├── Hero.jsx
│       │   └── Hero.module.css
│       ├── Navbar.jsx
│       ├── Service/
│       │   ├── Service.jsx
│       │   └── Service.module.css
│       └── Team/
│           ├── Team.jsx
│           └── Team.module.css
├── .env.local               # Environment variables
├── .eslintrc.json           # ESLint configuration
├── .gitattributes           # Git attributes
├── .gitignore               # Git ignore rules
├── jsconfig.json            # JS configuration
├── LICENSE                  # License file
├── next.config.js           # Next.js configuration
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Lockfile for npm
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
└── tailwind.config.js       # Tailwind CSS configuration
```

## License

This project is licensed under the GNU GPL v3 License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or need further assistance, feel free to reach out:

- **Author**: [Muhit Khan](https://muhitkhan.tech)
- **Email**: [muhit.dev@gmail.com](mailto:muhit.khan@example.com)
- **GitHub**: [muhit-khan](https://github.com/muhit-khan)
- **LinkedIn**: [muhit-khan](https://linkedin.com/in/muhit-khan)

Thank you for checking out the Arro Realty project! We hope you find it useful and informative.
