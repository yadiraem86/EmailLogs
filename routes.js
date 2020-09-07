const jsonServer = require('json-server');
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
const server = jsonServer.create();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.put('*', (_req, res) => {
  res.json({});
});

server.use(
  jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/:resource/Printable?id=:id': '/:resource/:id',
  }),
);
server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running');
});
