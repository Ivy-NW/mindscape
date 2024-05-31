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
Navigate to the Project Directory

Change into the project directory:

bash
Copy code
cd Chat
Install Dependencies

Install all required dependencies for the project:

bash
Copy code
npm install @google/generative-ai express
npm i --save-dev nodemon dotenv
Running the Application
To start the server and run Mindscape locally, execute the following command in the terminal:

bash
Copy code
node server.js
This command initiates the chatbot server, making it accessible via http://localhost:3000 or another configured local host and port.

Environment Setup
Before running the application, you must configure your environment variables:

plaintext
Copy code
GOOGLE_API_KEY=<Your-Google-API-Key>
Add this variable to a .env file in the root of your project directory to ensure your API key remains secure.

Contributing
We encourage contributions from the community, whether it's a bug fix, a new feature, or an improvement in documentation. Here's how you can contribute:

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
