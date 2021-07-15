This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Routes
- All routes are under pages folder
- Dynamic routes can be created using [<file_or_folder_name>] and values can be accessed using withRouter hook, query parameter.
- [...<some_name>] file name creates nested routes, and values can be accessed using withRouter return an array in query params.