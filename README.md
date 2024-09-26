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

### Step 3: Create database schema and seed it
Run the following commands in order in the project root folder after [installing nodejs](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
```sh
# Installs the dependencies
npm install
```
```sh
# Creates database schema
npx prisma db push
```
```sh
# Creates demo user
npm run seed-db
```
### Step 4: Create RLS Policies for Storage Bucket

1. Go to supabase dashboard
2. Go to your project
3. Go to "Storage" in the Sidebar
4. Create a bucket called "main"(Don't create a public bucket)
5. Go to policies then click "New policy" next to "main" then click "For full customization".
6. Give a meaningful name for the policy like "Allow CRUD for all users" then check all the checkboxes for "Allowed operation", leave the "Target roles" as is i.e. "Defaults to all (public) roles if none selected".
7. Click 'Review' then 'Save policy'.

Now you can CRUD files in your 'main' storage bucket.
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

