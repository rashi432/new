const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const fs = require('fs');
const mongodb = require('mongodb');
const fileUpload = require('express-fileupload');
const router = express.Router()
const binary = mongodb.Binary;

var dbName = "notes"
var client = new MongoClient('mongodb+srv://admin:admin@cluster0-h4v6l.mongodb.net/notes?retryWrites=true&w=majority', { useNewUrlParser: true });




var connection;
client.connect((err, con) => {

    if (!err) {
        connection = con;
        console.log("database connected successfully");
    } else {
        console.log("database could not connect");
    }
})



const app = express();

app.use(cors());


// app.get('/', (req, res) => {

//     res.send({ status: "ok", data: "this is a test api" });
// })




// app.get('/user', (req, res) => {
//     var id = req.query.id;
//     res.send({ status: "ok", data: [{ name: "X", age: 78, id: id }, { name: "Y", age: 67 }] });
// })


app.post('/sign-in', bodyParser.json(), (req, res) => {

    console.log(req.body)
    var collection = connection.db(dbName).collection('login');
    collection.find(req.body).toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })

})



app.post('/save2', bodyParser.json(), (req, res) => {

    var collection = connection.db(dbName).collection('data');

    collection.find({ title: req.body.title }).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "Title already Exists" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })
})


// app.get('/getAllplaces', (req, res) => {

//     console.log(req.body)
//     var collection = connection.db(dbName).collection('places');


//     collection.find().toArray((err, docs) => {
//         console.log("docs found");
//         console.log(docs);
//         if (!err && docs.length > 0) {
//             res.send({ status: "ok", data: docs });
//         } else {
//             res.send({ status: "failed", data: err });
//         }
//     })



// })

// app.get('/getAlldetails', (req, res) => {

//     console.log(req.body)
//     var collection = connection.db(dbName).collection('saku');


//     collection.find().toArray((err, docs) => {
//         console.log("docs found");
//         console.log(docs);
//         if (!err && docs.length > 0) {
//             res.send({ status: "ok", data: docs });
//         } else {
//             res.send({ status: "failed", data: err });
//         }
//     })



// })






// router.get("/", (req, res) => {
//     res.sendfile('./file-upload.html', { root: __dirname })
// })

// router.get("/", (req, res) => {
//     getFiles(res)
// })

// app.use(fileUpload())
// router.post("/upload", (req, res) => {
//     let file = { name: req.body.name, file: binary(req.file.uploadfile.data) }
//     insertFile(file, res)
// })

// function insertFile(file, res) {
//     MongoClient.client, ((err, client) => {
//         if (err) {
//             return err
//         } else {
//             let db = sakshamdb.db('uploadDB')
//             let collection = db.collection('files')
//             try {
//                 collection.insertOne(file)
//                 console.log('file inserted')
//             } catch {}
//             client.close()
//             res.redirect('/')
//         }
//     });
// }

// function getFiles(res) {

//     MongoClient.client('mongodb+srv://admin:admin@cluster0-h4v6l.mongodb.net/dbname?retryWrites=true&w=majority', { useNewUrlParser: true }, (err, client) => {
//         if (err) {
//             return err
//         } else {
//             let db = sakshamdb.db('uploadDB')
//             let collection = db.collection('files')
//             collection.find({}).toArray((err, docs) => {
//                 if (err) {
//                     console.log('err in finding doc:', err)
//                 } else {
//                     let buffer = doc[0].file.buffer
//                     fs.writeFileSync('uploadedimage.jpg'.buffer)
//                 }
//             })
//             client.close()
//             res.redirect('/')
//         }
//     });
// }
app.use("/", router)

app.post('/add', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Sale-Everest');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})

app.post('/add2', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Sale-SSPipe');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})

app.post('/add3', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Sale-MSPipe');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})

app.post('/add4', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Sale-WeldingElectrode');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})

app.post('/add5', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('bank');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})
app.post('/purchase', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Purchase-Everest');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})

app.post('/purchase2', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Purchase-SSPipe');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})

app.post('/purchase3', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Purchase-MSPipe');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})
app.post('/purchase4', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('Purchase-WeldingElectrode');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})
app.get('/geteverest', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Sale-Everest');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})
app.get('/getpipe1', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Sale-MSPipe');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})
app.get('/getpipe2', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Sale-SSPipe');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})
app.get('/getbox', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Sale-WeldingElectrode');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})
app.get('/getbank', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('bank');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})

app.get('/getsheet', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Purchase-Everest');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})

app.get('/getsspipe', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Purchase-SSPipe');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})

app.get('/getmspipe', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Purchase-MSPipe');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})
app.get('/getelectrode', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('Purchase-WeldingElectrode');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})








app.listen(3000, () => { console.log("server is listining on port 3000") });