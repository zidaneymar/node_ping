

//const request = require("request")
const schedule = require("node-schedule")


var j = schedule.scheduleJob('* * * * * *', function() {
    console.log("hello")
})