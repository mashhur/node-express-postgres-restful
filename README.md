# node-express-postgres-restful

> Sample application for a node/express RESTful application backed by postgresql

```
npm install
```

You'll want to go into `models/index.js` and update the PostgreSQL connection
details/credentials on line 8 and then change line 16 to be `true`. Start the
server with `npm start`, then stop the server, and change line 16 back to
`false`. The database will be initialized and any data you create will not be
overwritten.