//setup | this is similar to when we use our detailt tags in html
const express = require("express");
//we have to use cors in order to hsot a frontend and backend on the same device
var cors = require("cors");
//activates or tells this app variable to  be an express server
const app = express();
app.use(cors());
const router = express.Router();

//start the web server | app.lsiten(portnumber, fucntion)

//making an api using routes
// routes are used to handle browser requests. they look like URLS. The difference is that when a browser requsts a route, it is dynamically handled by using a function.

//GET  or a "regular" request when someone visits http://localhost:3000/hello . When using a function in a route, we almost always have a parameter or handle a response and request
router.get("/songs", function (req, res) {
  const songs = [
    {
      title: "Uptown Funk",
      artist: "Bruno Mars",
      popularity: 10,
      genre: ["funk", "boogie"],
    },
    {
      title: "Happy",
      artist: "Phrrell Williams",
      popularity: 10,
      genre: ["soul", "new soul"],
    },
  ];
  res.json(songs);
});

//all requests that usually use an api start with /api, so the url would be localhost:3000/api/songs
app.use("/api", router);
app.listen(3000);
