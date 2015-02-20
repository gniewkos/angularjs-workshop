# Search Story

This is an example app desing for AngularJS & Elasticsearch workshop

## Prerequisites

In order to run this example, you will need to have the following installed
  1. [elasticsearch](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_installing_elasticsearch.html)
  2. [bower](http://bower.io/#install-bower)

You will also need to configure elasticsearch to accept requests from the browser using [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing). To enable CORS, add the following to elasticsearch's config file. Usually, this file is located near the elasticsearch executable at `config/elasticsearch.yml`.

```yml
http.cors:
  enabled: true
```

## To run the example:
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
