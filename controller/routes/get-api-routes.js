var db = require("../../models");
module.exports = function(app) {

    app.get("/", function(req, res){
        db.Review.findAll(function (reviewdata) {
            // console.log("View all review data");            
            var reviewObject = {
            reviewData: data
            };

        //Future Direction: Working on rendering to index.handlebars template
        // return res.render("index", reviewObject);

        });
    })
    
      // Get all Reviews
      app.get("/api/all", function(req, res) {
    
       
        db.Review.findAll({}).then(function(results) {
            // console.log("Find All");
            console.log("review result" + JSON.stringify(results));
          return res.json(results);
      
        });
    
      });

};