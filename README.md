# Clothing Shop

This project is a simple e-commerce platform that specialise in the sales of clothing.

## Technologies

Project is created with:

- React - framework used to build frontend portion of the platform
- Redux - used together with React to handle state in frontend
- Express - used to handle backend portion of the platform
- Stripe - used for handling online payments
- Auth0 - used to handle authentication of user

## Setup

To run the development version of this project, install it locally using npm:

Clone this repository to your desktop. In a terminal (mac/linux) or windows terminal, run the following command in the base directory of this project

```
$ git clone https://github.com/jianweilee128/clothing-shop.git
```

Install dependencies for backend by running the following command in terminal

```
$ npm install
```

Install dependencies for frontend by running the following command in terminal

```
$ cd client
$ npm install
```

Start development version of project using the following command

```
$ npm run dev
```

###### In order to use the authentication and payment function, you need to create a .env file and insert the keys using the .env.test provided by creating a free account at Auth0 and Stripe.
