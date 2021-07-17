const _ = require('lodash');

module.exports = _.assign({}, _.defaults({}, process.env, {
  // Constants here. Priority goes: proces.env > constants
}))
