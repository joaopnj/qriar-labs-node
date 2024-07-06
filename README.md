# Qriar Labs Node

This is a test code for Qriar Labs, using NodeJs monorepository.

# Turborepo (NestJS + Prisma + NextJS + Tailwind + Typescript + Jest) Starter

This is fullstack turborepo starter. It comes with the following features. 

- ✅ Turborepo 
- ✅ Nestjs 
    - ✅ Env Config with Validation  
    - ✅ Prisma 
- ✅ NextJS 
    - ✅ Tailwind 
    - ✅ Redux Toolkit Query 
- ✅ Testing using Jest 
- ✅ Github Actions 
- ✅ Reverse Proxy using Nginx 
- ✅ Docker Integration 
- ✅ Postgres Database 
- ✅ Package scripts using NPS 

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a [NestJS](https://nestjs.com/) app
- `web`: a [Next.js](https://nextjs.org) app
- `ui`: a stub React component library used by `web`.
- `config`: `eslint`, `nginx` and `tailwind` (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [Node Package Scripts](https://github.com/sezna/nps#readme) for automation scripts
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup
This starter kit is using turborepo and yarn workspaces for monorepo workflow.

### Prerequisites 

- Make sure docker and docker-compose are
 installed. Refer to docs for your operating system.


 ## Docker 

 - Run docker compose
```bash
docker compose up
```

### Configure Environment
- Frontend 
    - `cd apps/web && cp .env.example .env`
- Backend 
    - `cd apps/api && cp .env.example .env`

### Install Dependencies
Make sure you are at root of the project and just run 

```bash
yarn
```


### Back End

To run the Front end navigate into the folder 'apps/api' and run

```bash
yarn dev
```
The api should be running at `http://localhost:5002`

NOTE: You can import the file:
```
Qr-Labs-Node.postman_collection.json
```
On your postman with the samples requisitions

### Front End

To run the Front end navigate into the folder 'apps/web' and run

```bash
yarn dev
```
The app should be running at `http://localhost` with reverse proxy configured.
