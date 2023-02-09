const path = require('path');
const sql = require('./db.js')
const csv = require('csvtojson');

//create tables
const CreateUser = (req, res) => {
    var Q0 = `CREATE TABLE IF NOT EXISTS Users (
        email varchar(255) NOT NULL PRIMARY KEY, 
        FirstName varchar(255) not null, 
        LastName varchar(255) not null,
        Birthdate date not null,
        Phone varchar(255) not null, 
        password varchar(255) not null,
        repassword varchar(255) not null,
        gender varchar(255) not null
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

    sql.query(Q0, (err, mysqlres) => {
        if (err) {
            console.log("error ", err);
            res.render('Results', {
                v1: "error in creating table",
            })
            return;
        }
        console.log('created table');
        res.render('Results', {
            v1: "The table Users has been created",
        })

        return;
    })
}

const CreateTicketForShow = (req, res) => {
    var Q2 = "CREATE TABLE tickets (ShowName varchar(255) not null, category varchar(255) not null ,location varchar(255) not null, date date not null ,price int not null, count int not null, primary key (ShowName , date))";
    sql.query(Q2, (err, mysqlres) => {
        if (err) {
            console.log("error ", err);
            res.render('Results', {
                v1: "error in creating table",
            })

            return;
        }
        console.log('created tickets table');
        res.render('Results', {
            v1: "The table Tickets has been created",
        })
        return;
    })
}

const CreateContactUs = (req, res) => {
    var Q2 = "CREATE TABLE Messages (firstname varchar(255) not null, lastname varchar(255) not null, country varchar(255) not null, subject varchar(600) not null )";
    sql.query(Q2, (err, mysqlres) => {
        if (err) {
            console.log("error ", err);
            res.render('Results', {
                v1: "error in creating table",
            })

            return;
        }
        console.log('created Messages table');
        res.render('Results', {
            v1: "The table Messages has been created",
        })
        return;
    })
}

const CreateFavorites = (req, res) => {
    var Q2 = "CREATE TABLE Favorites (ShowName varchar(255) not null, category varchar(255) not null ,location varchar(255) not null, date date not null ,price int not null, count int not null)";
    sql.query(Q2, (err, mysqlres) => {
        if (err) {
            console.log("error ", err);
            res.render('Results', {
                v1: "error in creating table",
            })

            return;
        }
        console.log('created Favorites table');
        res.render('Results', {
            v1: "The table Favorites has been created",
        })
        return;
    })
}



//show tables
const ShowAllUsers = (req, res) => {
    var Q3 = "SELECT * FROM Users";
    sql.query(Q3, (err, mysqlres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.render('Results', {
                v1: "error in showing table",
            })
            return;
        }
        console.log("showing Users table");
        res.render('ShowAllUsers', {
            v1: "All Users",
            users: mysqlres
        })
        return;
    })
};

const ShowAllTickets = (req, res) => {
    var Q3 = "SELECT * FROM tickets";
    sql.query(Q3, (err, mysqlres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.render('Results', {
                v1: "error in showing table",
            })

            return;
        }
        console.log("showing Tickets table");
        res.render('ShowAllTickets', {
            v1: "All Tickets",
            tickets: mysqlres
        })

        return;
    })
};


const ShowAllMessages = (req, res) => {
    var Q3 = "SELECT * FROM Messages";
    sql.query(Q3, (err, mysqlres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.render('Results', {
                v1: "error in showing table",
            })
            return;
        }
        console.log("showing Messages table");
        res.render('ShowAllMessages', {
            v1: "All Messages",
            Messages: mysqlres
        })

        return;
    })
};

const ShowAllFavorites = (req, res) => {
    var Q3 = "SELECT * FROM Favorites";
    sql.query(Q3, (err, mysqlres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.render('Results', {
                v1: "error in showing table",
            })
            return;
        }
        console.log("showing Favorites table");
        res.render('ShowAllFavorites', {
            v1: "All Favorites",
            Favorites: mysqlres
        })

        return;
    })
};


//drop tables
const DropUsersT = (req, res) => {
    var Q4 = "DROP TABLE Users";
    sql.query(Q4, (err, mysqlres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.render('Results', {
                v1: "error im dropping table",
            })
            return;
        }
        console.log("table drppped");
        res.render('Results', {
            v1: "The table Users has been delete",
        })
        return;
    })
}

const DropTicketT = (req, res) => {
    var Q4 = "DROP TABLE tickets";
    sql.query(Q4, (err, mysqlres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.render('Results', {
                v1: "error im dropping table",
            })
            return;
        }
        console.log("table dropped");
        res.render('Results', {
            v1: "The table Tickets has been delete",
        })
        return;
    })
}


const DropMessagesT = (req, res) => {
    var Q4 = "DROP TABLE Messages";
    sql.query(Q4, (err, mysqlres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.render('Results', {
                v1: "error im dropping table",
            })
            return;
        }
        console.log("table dropped");
        res.render('Results', {
            v1: "The table Messages has been delete",
        })
        return;
    })
}

const DropFavoritesT = (req, res) => {
    var Q4 = "DROP TABLE Favorites";
    sql.query(Q4, (err, mysqlres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.render('Results', {
                v1: "error im dropping table",
            })
            return;
        }
        console.log("table drppped");
        res.render('Results', {
            v1: "The table Favorites has been delete",
        })
        return;
    })
}


//insert data to tables
const InsertUserData = (req, res) => {
    var Q2 = "INSERT INTO users SET ?";
    const csvFilePath = path.join(__dirname, "./content/users.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            console.log(jsonObj);
            jsonObj.forEach(element => {
                var NewEntry = {
                    "email": element.email,
                    "FirstName": element.FirstName,
                    "LastName": element.LastName,
                    "Birthdate": element.Birthdate,
                    "Phone": element.Phone,
                    "password": element.password,
                    "repassword": element.repassword,
                    "gender": element.gender
                }


                sql.query(Q2, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting data", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        })
    res.render('Results', {
        v1: "The Data Base has been updated",
    })
};

const InsertTicketData = (req, res) => {
    var Q2 = "INSERT INTO tickets SET ?";
    const csvFilePath = path.join(__dirname, "./content/tickets.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            console.log(jsonObj);
            jsonObj.forEach(element => {
                var NewEntry = {
                    "ShowName": element.ShowName,
                    "category": element.category,
                    "location": element.location,
                    "date": element.date,
                    "price": element.price,
                    "count": element.count
                }
                sql.query(Q2, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting data", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        })
    res.render('Results', {
        v1: "The Data Base has been updated",
    })

};


const InsertMessageData = (req, res) => {
    var Q2 = "INSERT INTO Messages SET ?";
    const csvFilePath = path.join(__dirname, "./content/messages.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            console.log(jsonObj);
            jsonObj.forEach(element => {
                var NewEntry = {
                    "firstname": element.firstname,
                    "lastname": element.lastname,
                    "country": element.country,
                    "subject": element.subject
                }

                sql.query(Q2, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting data", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        })
    res.render('Results', {
        v1: "The Data Base has been updated",
    })

};



module.exports = {
    CreateTicketForShow,
    CreateUser,
    CreateContactUs,
    CreateFavorites,
    ShowAllUsers,
    ShowAllTickets,
    ShowAllMessages,
    ShowAllFavorites,
    DropTicketT,
    DropUsersT,
    DropMessagesT,
    DropFavoritesT,
    InsertUserData,
    InsertTicketData,
    InsertMessageData,
};