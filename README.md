# Bank of Flatiron
Welcome to the Bank of Flatiron! This React application allows users to view, add, and filter recent bank transactions. It utilizes a backend API to persist transactions and provides a seamless experience for managing financial data.

## Features
- Transaction Table: View a table of recent bank transactions.
- Add New Transaction: Fill out a form to add a new transaction, which will be reflected in the table and saved to the backend API.
- Search Transactions: Filter transactions by typing into the search bar. The table will dynamically update to show only transactions that match the search term.
## Technologies Used
- React: For building the user interface.
JSON Server: To simulate a backend API for transaction data.
- Axios: For making HTTP requests to the JSON Server.
## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- Create React App and JSON Server packages installed.
- Setup
- Clone the Repository
git clone https://github.com/clarathuo1/bank-of-flatiron
- cd bank-of-flatiron
#### Set Up JSON Server

- Create a db.json file in the root of your project.
- Paste the provided transaction data into db.json.
json

### Start the JSON Server:

- Copy code
npx json-server --watch db.json --port 3001
- Set Up React Application

#### Install dependencies:


- Copy code
- npm install
- Start the React development server:
- Copy code
npm start


## Using the Application
- Viewing Transactions: The main page will display a table of recent transactions.

- Adding a Transaction:

- Fill out the form with the transaction details.
- Click the "Add Transaction" button to submit.
The new transaction will appear in the table and will be saved to the backend API.
- Filtering Transactions:

- Use the search bar to enter a description keyword.
The table will update to show only transactions that match the search term.
### Deployment
- Frontend Deployment: Deploy the React application to a hosting service of your choice (e.g., Vercel, Netlify).

- Backend Deployment: Deploy the JSON Server to a hosting service or use a similar solution to persist transaction data.


## License
- This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Create React App for scaffolding the React application.
- JSON Server for providing a simple mock backend.

## Live link
https://bank-of-flatiron-psi-three.vercel.app/