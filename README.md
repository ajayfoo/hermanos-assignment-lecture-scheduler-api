# Hermanos Assignment: Lecture Schduler API
**Username and password of demo user is 'demo'.**

## Table Of Contents
- [How to setup?](#how-to-setup)
- [How to run?](#how-to-run)

## How to setup?
The setup needs to be done only once.
### Step 1: Install PostgreSQL
You can use [The Odin Project's brilliant article](https://www.theodinproject.com/lessons/nodejs-installing-postgresql) to install PostgreSQL 
or follow the instructions given in [PostgreSQL's official website](https://www.postgresql.org/download/)

### Step 2: Create .env file
Create a file named .env in the project root folder and copy the contents of dot-env-example to .env. Then replace the placeholders with actuals values for 
each environment variables by following the hints given.

### Step 3: Seed Database
Run the following commands in order in the project root folder after [installing nodejs](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
```sh
# Installs the dependencies
npm install
```
```sh
# Creates demo user
npm run seed-db
```
## How to run?
Please [setup the project](#how-to-setup) before running it.  
For production
```sh
npm run start
```
For development
```sh
npm run dev
```

