## Stack

- AWS Lambda
- Serverless Framework
- GraphQL
- Apollo
- Node.js

## Running Locally

1. After clone the project locally, install the dependencies using:

```bash
npm install
```

2. Rename `.env.example` to `.env`.

3. Create an [AWS IAM User](https://console.aws.amazon.com/iam/home#/users$new?step=details), give it `AdministratorAccess` and update the respective AWS ID and AWS SECRET on `.env` to point to this new user

4. Run the development server locally using:

```bash
npm run dev
```

Finally, open [http://localhost:4000](http://localhost:4000) to manage your server

## Dev Notes

- GraphQL architecture is declared on `graphql` folder
- Serverless GraphQL API is exposed on `/graphql` route
