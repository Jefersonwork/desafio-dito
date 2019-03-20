const restfull = require("node-restful");
const mongoose = restfull.mongoose;

const eventSchema = new mongoose.Schema({
    event: {
      type: String,
      required: true
    },

    timestamp: {
      type: Date,
      defaut: Date.now
    }
});

module.exports = restfull.model("Event", eventSchema);