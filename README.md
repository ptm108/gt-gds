# GT GDS

This is a submission for the GT GDS TAP take home assignment. This URL shortener is implemented using Next.js and shortened URL mappings are persisted in a MongoDB instance.

![Main Page](https://github.com/ptm108/gt-gds/blob/main/assets/homepage.png?raw=true)

## Public deployment

The application is deployed using [serverless-nextjs].

Accessible at [https://d1y788sypej1yu.cloudfront.net/]

## Deploying locally

A separate set of .env files should be sent via email. Place the .env files in the `./tamp/` directory. Then run:

```bash
cd tamp/

# only run the first time
npm install
npm run dev
```

[serverless-nextjs]: https://github.com/serverless-nextjs
[https://d1y788sypej1yu.cloudfront.net/]: https://d1y788sypej1yu.cloudfront.net
