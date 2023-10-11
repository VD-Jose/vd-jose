const appConfig = require('./../config/appconfig');
const controller = require('./../config/controller/controller')


app.get('/bookings', controller.getallbookings)