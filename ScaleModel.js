const mongoose = require('mongoose');

// Setup schema
var scaleSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  weight: {
      type: String,
      required: true
  },
  stable: {
    type: Boolean,
    required: true
  },
  outlet: {
    type: Object,
  },
  create_date: {
      type: Date,
      default: Date.now
  }
});// Export Scale model
var Scale = module.exports = mongoose.model('scale', scaleSchema);
module.exports.get = function (callback, limit) {
  Scale.find(callback).limit(limit);
}