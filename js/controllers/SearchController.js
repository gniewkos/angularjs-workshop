 // Controller
//
// It requires the "client" service, and fetches information about the server,
// it adds either an error or info about the server to $scope.
//
// It also requires the esFactory to that it can check for a specific type of
// error which might come back from the client
SearchApp.controller('SearchController', function ($scope, esClient, esFactory) {

  esClient.cluster.state({
    metric: [
      'cluster_name',
      'nodes',
      'master_node',
      'version'
    ]
  })
  .then(function (resp) {
    $scope.clusterState = resp;
    $scope.error = null;
  })
  .catch(function (err) {
    $scope.clusterState = null;
    $scope.error = err;

    // if the err is a NoConnections error, then the client was not able to
    // connect to elasticsearch. In that case, create a more detailed error
    // message
    if (err instanceof esFactory.errors.NoConnections) {
      $scope.error = new Error('Unable to connect to elasticsearch. ' +
        'Make sure that it is running and listening at http://localhost:9200');
    }
  });

});