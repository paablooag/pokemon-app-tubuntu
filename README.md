# Pokemon Application

This is a Node.js application built with the NestJS framework that interacts with the external Pokemon API. It allows users to find Pokemon by name and download a CSV file of Pokemon by color, ordered by base experience.

## Features

- **Find a Pokemon by Name**: Search for a Pokemon by its name and retrieve details like base experience, height, and weight.
- **Get Pokemon by Color**: Download a CSV file containing a list of all Pokemon of a specific color, ordered by their base experience.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Docker**: Make sure Docker is installed on your machine. You can download Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop).

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/pokemon-app.git
cd pokemon-app

2. Set Up Environment Variables
PORT=3000
POKEAPI_BASE_URL=https://pokeapi.co/api/v2

3. Install Dependencies
npm install

4. Run the Application Locally
npm run start

5. Run the Application with Docker
docker run -p 3000:3000 pokemon-app
