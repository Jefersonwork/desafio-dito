const Event = require("./event");

Event.methods(["get", "post", "put", "delete"]);
Event.updateOptions({ 
    new: true, 
    runValidate: true 
});

module.exports = Event;