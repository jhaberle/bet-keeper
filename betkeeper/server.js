const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/"));
}
app.use(express.static());
// Add routes, both API and views
app.use(routes);

// Connect to the Mongo DB

// async function main() {

//     const uri = 'mongodb+srv://claudiogb:<123667>@project3.bmugp.mongodb.net/<betslips>?retryWrites=true&w=majority';

//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB Cluster
//         await client.connect();

//         // Make the appropiate DB calls
//         await listDatabase(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// listDatabases();

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/betslips", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .catch((error) => {
    console.log("Error connecting to Mongoose ->", error);
  });

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Error staying connected to Mongoose -> ", err);
});

// Start the API server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
