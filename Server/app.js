var express = require('express'); 
    var app = express(); 
    var bodyParser = require('body-parser');
    var multer = require('multer');
    app.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    /** Serving from the same express Server
    No cors required */
    app.use(express.static('../client'));
    app.use(bodyParser.json());
    // var storage = multer.diskStorage({ //multers disk storage settings
    //     destination: function (req, file, cb) {
    //         cb(null, '/home/kunal/CodeAnalyzer/CodeAnalyzer/codebase/C001/')
    //     },
    //     filename: function (req, file, cb) {
    //         var datetimestamp = Date.now();
    //         cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    //     }
    // });
    // var upload = multer({ //multer settings
    //     storage: storage
    // }).single('file');
    
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo

/* GET home page. */
    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        var DIR = '/home/kunal/CodeAnalyzer/CodeAnalyzer/codebase/C001/';
        
        var storage = multer.diskStorage({ //multers disk storage settings
            destination: function (req, file, cb) {
                cb(null, '/home/kunal/CodeAnalyzer/CodeAnalyzer/codebase/C001/')
            },
            filename: function (req, file, cb) {
                var datetimestamp = Date.now();
                cb(null, file.originalname)
            }
        });
        var upload = multer({storage: storage}).single("file");
        upload(req, res, function (err) {
           if (err) {
             // An error occurred when uploading
             console.log(err);
             return res.status(422).send("an Error occured")
           }  
          // No error occured.
           //console.log(req.file);
           //console.log(req.body);
           return res.send("Upload Completed "); 
     });     
    });
    app.get('/download', function(req, res){
        var file = '/home/kunal/CodeAnalyzer/CodeAnalyzer/codebase_unzipped/C001/Addition/build/reports/tests/test/index.html';
        res.download(file); // Set disposition and send it.
      });
      app.get('/download/skeleton', function(req, res){
        var file = '/home/kunal/CodeAnalyzer/CodeAnalyzer/Skeleton/Addition.zip';
        res.download(file); // Set disposition and send it.
      });
    app.listen('3000', function(){
        console.log('running on 3000...');
    });