
exports.__esModule = true;
var body_parser_1 = require("body-parser");
var express_1 = require("express");
// import { postMessages, putMessage } from './routes/messages';
// import { getUser } from './routes/users';
var app = express_1();
var port = process.env.PORT || 5000;
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
// user
// app.get('/api/users/:id', getUser)
// messages
// app.post('/api/messages', postMessages);
// app.put('/api/messages/:id', putMessage);
// tslint:disable-next-line:no-console
app.listen(port, function () { return console.log("Listening on port " + port); });
