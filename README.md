# 🎬 Cinema Scope – React.js Movie Discovery App

Cinema Scope is a modern, responsive movie discovery app built as part of my personal learning journey. Developed using **React.js**, **Appwrite**, and **TailwindCSS**, this project showcases a clean and dynamic interface for exploring trending and popular movies.

> 🚀 Live Demo: [cinema-scope-react.web.app](https://cinema-scope-react.web.app/)

## 🔧 Tech Stack

⚛️ **React.js** – Frontend UI
🧩 **Appwrite** – Backend services (search & trending logic)
🎨 **TailwindCSS** – Styling and responsive design

## 🚀 Features

🔍 **Browse All Movies**
  Explore a wide range of movies with smooth UI navigation.

📽️ **Search Functionality**
  Find specific movies using a real-time search feature.

🔥 **Trending Movies Algorithm**
  Highlights popular movies using a dynamic algorithm.

💡 **Modern UI/UX**
  Clean, intuitive design with a focus on usability.

📱 **Mobile-First & Responsive**
  Works seamlessly across desktops, tablets, and phones.

## 📸 Screenshots

![screencapture-localhost-5173-2025-06-01-17_12_38_compressed](https://github.com/user-attachments/assets/72f1bc69-3f10-4e7e-b5aa-89a5666e23f9)

## 📦 Deployment
Deployed on: Firebase Hosting – via GitHub Actions
CI/CD workflow handles build and preview deployments on pull requests

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/dnlatt/cinema-scope.git
cd cinema-scope

# Install dependencies
npm install

# Add your environment variables in a `.env` file
# Example:
VITE_TMDB_API_KEY=your_tmdb_key
VITE_TMDB_API_BASE_URL=https://api.themoviedb.org/3
VITE_APPWRITE_END_POINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

# Run locally
npm run dev

