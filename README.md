# Blogging Website

This is a React-based blogging website that leverages **Appwrite** as the backend service, **Tailwind CSS** for styling, and **React Hook Form** for efficient form handling. The website allows users to add and update blogs, ensuring a seamless content creation experience using **TinyMCE**.

## Features
- **Add Blog**: Users can create engaging blog posts using TinyMCE for rich text editing.
- **Update Blog**: Modify previously created blog content with ease.
- **User Authentication**: Secure login and sign-in forms implemented with React Hook Form.

## Tech Stack
- **React 18** (Frontend Framework)
- **Appwrite** (Backend Service)
- **Tailwind CSS** (Styling)
- **React Hook Form** (Form Handling)
- **TinyMCE** (Rich Text Editor)

## Installation
To set up the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd blogging-website
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Create .env File:**
   - Add your Appwrite credentials in the `.env` file.
   ```env
   VITE_APPWRITE_ENDPOINT=<Your_Appwrite_Endpoint>
   VITE_APPWRITE_PROJECT_ID=<Your_Appwrite_Project_ID>
   VITE_APPWRITE_DATABASE_ID=<Your_Database_ID>
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- **Creating a Blog:** Navigate to the "Add Blog" page, fill in the required fields, and use TinyMCE to craft rich content. Submit to publish your post.
- **Updating a Blog:** Select a previously created blog and edit its content with the provided update feature.

## Folder Structure
```
├── public
├── src
│   ├── components
│   ├── pages
│   ├── appwrite
│   ├── store
│   ├── conf
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.sample
├── package.json
└── README.md
```

## Dependencies
- **React 18**
- **Appwrite**
- **Tailwind CSS**
- **React Hook Form**
- **TinyMCE**


## License
This project is licensed under the **MIT License**.



