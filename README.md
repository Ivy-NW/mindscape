# FOR CHAT
# Mindscape Chatbot

Welcome to Mindscape, an AI-powered chatbot designed to act as a virtual therapist. This chatbot provides support for individuals dealing with mental health issues by offering intelligent and empathetic responses. Mindscape utilizes advanced generative AI technology from Google to ensure that interactions are insightful and helpful.

## Features

- **AI-driven Therapy:** Mindscape can address a wide array of mental health questions and provide supportive responses.
- **Accessibility:** Designed with a user-friendly web interface for easy interaction.
- **Confidentiality:** Ensures privacy and confidentiality in all conversations.

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have `npm` installed on your machine to handle dependencies. You can check if you have npm installed by running `npm -v` in your terminal. If you need to install npm, visit [npm's installation guide](https://www.npmjs.com/get-npm).

### Installation

1. **Clone the Repository**

   Start by cloning the project to your local machine:
   ```bash
   git clone https://github.com/irisvlack/mindscape.git
   
2. **Navigate to the Project Directory**

Change into the project directory:

```bash
cd Chat
```

3. **Install Dependencies**

Install all required dependencies for the project:

```bash
npm install @google/generative-ai express
npm i --save-dev nodemon dotenv
```

4. **Running the Application**
To start the server and run Mindscape locally, execute the following command in the terminal:

```bash
Copy code
node server.js
This command initiates the chatbot server, making it accessible via http://localhost:3000 or another configured local host and port.
```

5. **Environment Setup**
Before running the application, you must configure your environment variables:

```
GOOGLE_API_KEY=<Your-Google-API-Key>
Add this variable to a .env file in the root of your project directory to ensure your API key remains secure.
```

6. **Contributing**

We encourage contributions from the community, whether it's a bug fix, a new feature, or an improvement in documentation. Here's how you can contribute:
```
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
```

# FOR MAIN 
# Mindscape

Welcome to Mindscape, a sophisticated web application that leverages Africa's Talking API to incorporate SMS functionalities, enhancing user communication. This project utilizes Node.js, Express, and other technologies to provide a secure and responsive web experience.

## Features

- **SMS Integration**: Employs Africa's Talking API to enable seamless SMS communications within the application.
- **Secure Authentication**: Implements robust user authentication using Passport and bcrypt for secure password handling.
- **Dynamic Web Pages**: Utilizes EJS for dynamic content rendering, ensuring a responsive and interactive user interface.

## Getting Started

These instructions will help you set up and run Mindscape on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have `npm` installed on your machine to manage the project's dependencies. If npm is not installed, you can download and install it from [npm's official website](https://www.npmjs.com/get-npm).

### Installation

To set up your development environment, follow these steps:

1. **Clone the repository**

   Clone Mindscape to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory**

Change to the Mindscape project directory:

```bash
cd main
```
3. **Install Dependencies**

Install all necessary dependencies:

```bash
npm install africastalking
npm i bcrypt express-flash express-session method-override passport passport-local ejs express
```
4. **Running the Application**
Launch the development server with the following command:

```bash
npm run devStart
This will start the server, making the Mindscape application accessible at http://localhost:3000 or another configured port.
```

5. **Using Africa's Talking API**
```To integrate Africa's Talking SMS functionalities, ensure you have the API keys set up correctly in your environment variables.```

6. **Contributing**
We welcome contributions from the community. Here’s how you can contribute:

```
Fork the Repository
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
```
