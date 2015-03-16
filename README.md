# Search Story

This is workshop app for AngularJS & Elasticsearch

## Prerequisites

In order to run this example, you will need to have the following installed
  1. [elasticsearch](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_installing_elasticsearch.html)
  2. [bower](http://bower.io/#install-bower)

You will also need to configure elasticsearch to accept requests from the browser using [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing). To enable CORS, add the following to elasticsearch's config file. Usually, this file is located near the elasticsearch executable at `config/elasticsearch.yml`.

```yml
http.cors:
  enabled: true
```

## To run the examples:
1. Clone this repo locally (or just download and unzip it)

  ```sh
  git clone https://github.com/gniewkos/search-story.git
  ```

2. Move into the project

  ```sh
  cd search-story
  ```

3. Install the bower dependencies

  ```sh
  bower install
  ```

4. Open the index.html file in your browser.


## Workshop

### Step1

  ```sh
  git checkout tags/step1
  ```

**Task**: We are starting from github example. Just look around starting from index.html.
Organize project according to angularjs best practices.
(can use https://github.com/mgechev/angularjs-style-guide)

Revert local changes before next step:

  ```sh
  git reset --hard
  git clean -fd
  ```

### Step2

  ```sh
  git checkout tags/step2
  ```

**Task**: Implement basic elasticsearch searching.
SearchController - to use $scope.searchText as input search text.
SearchController - use query part from "SEARCH stories with highlight query" (import queries docs/Elasticsearch-Stories.json.txt to Postman)
index.html - use the bootstrap form to input search text.

  ```html
  <form ng-submit="search()">
    <div class="input-group input-group-lg">
      <input class="form-control" type="text" ng-model="searchText" placeholder="Search for ...">
      <span class="input-group-btn">
        <button class="btn btn-success" type="submit">Search</button>
      </span>
    </div>
  </form>
  ```
use ng-repeat to iterate over search hits

  ```html
  <div ng-repeat="story in stories.hits.hits" class="panel panel-default">
  ```

Revert local changes before next step:

  ```sh
  git reset --hard
  git clean -fd
  ```

### Step3

  ```sh
  git checkout tags/step3
  ```

**Task**: Implement highlighting searching.
SearchController - use highlight part from "SEARCH stories with highlight query".
bower.json - add angular-sanitize.
app.js - include ngSanitize module.
index.html - include script for angular-sanitize.
index.html - display highlights using ng-bing-html

  ```sh
  <p ng-repeat="fragment in story.highlight.body">
    <span ng-bind-html="fragment"></span>
  </p>
  ```
SearchController - use mark tags from bootstrap

  ```html
  highlight: {
    pre_tags: ["<mark class='bg-success'>"],
    post_tags: ['</mark>'],
  ```

Revert local changes before next step:

  ```sh
  git reset --hard
  git clean -fd
  ```

### Step4

  ```sh
  git checkout tags/step4
  ```

**Task**: Implement your feature and create push request:)

