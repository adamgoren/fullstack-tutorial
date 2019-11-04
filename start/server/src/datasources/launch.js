const { RESTDataSource } = require('apollo-datasource-rest');

class launchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }
}

module.exports = launchAPI;
