// Service
//
// esFactory() creates a configured client instance. Turn that instance
// into a service so that it can be required by other parts of the application
SearchApp.service('esClient', function (esFactory) {
  return esFactory({
    host: 'localhost:9200',
    apiVersion: '1.2',
    log: 'trace'
  });
});