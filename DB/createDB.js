const path = require('path');
const sql = require('./db.js')
const csv = require('csvtojson');

//User
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
		// res.render('Results', {
		// 	v1: "The table Users has been created",
		// })

		return;
	})
}

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
		// res.render('Results', {
		// 	v1: "The table Users has been delete",
		// })
		return;
	})
}


const InsertUserData = (req, res) => {
	var Q2 = "INSERT INTO users SET ?";
	const csvFilePath = path.join(__dirname, "../content/users.csv");
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



//Ticket
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
		// res.render('Results', {
		// 	v1: "The table Tickets has been created",
		// })
		return;
	})
}

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
		// res.render('Results', {
		// 	v1: "The table Tickets has been delete",
		// })
		return;
	})
}

const InsertTicketData = (req, res) => {
	var Q2 = "INSERT INTO tickets SET ?";
	const csvFilePath = path.join(__dirname, "../content/tickets.csv");
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



//Messages
const CreateContactUs = (req, res) => {
	var Q2 = "CREATE TABLE Messages (FullName varchar(255) not null, Email varchar(255) not null, Phone varchar(255) not null, subject varchar(600) not null )";
	sql.query(Q2, (err, mysqlres) => {
		if (err) {
			console.log("error ", err);
			res.render('Results', {
				v1: "error in creating table",
			})

			return;
		}
		console.log('created Messages table');
		// res.render('Results', {
		// 	v1: "The table Messages has been created",
		// })
		return;
	})
}

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
		// res.render('Results', {
		// 	v1: "The table Messages has been delete",
		// })
		return;
	})
}


const InsertMessageData = (req, res) => {
	var Q2 = "INSERT INTO Messages SET ?";
	const csvFilePath = path.join(__dirname, "../content/messages.csv");
	csv()
		.fromFile(csvFilePath)
		.then((jsonObj) => {
			console.log(jsonObj);
			jsonObj.forEach(element => {
				var NewEntry = {
					"FullName": element.FullName,
					"Email": element.Email,
					"Phone": element.Phone,
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


const dropAllT = (req,res) => 
{
     DropUsersT(req,res); 
     DropTicketT(req,res); 
     DropMessagesT(req,res); 

     res.render('Results', { 
        v1: "All Tables dropped"
     });
};

const CreateAllT = (req,res) => 
{
     CreateUser(req,res); 
     CreateContactUs(req,res); 
     CreateTicketForShow(req,res); 

     res.render('Results', { 
        v1: "All Tables Created"
     });
};

module.exports = {
	CreateTicketForShow,
	CreateUser,
	CreateContactUs,
	ShowAllUsers,
	ShowAllTickets,
	ShowAllMessages,
	DropTicketT,
	DropUsersT,
	DropMessagesT,
	InsertUserData,
	InsertTicketData,
	InsertMessageData,
    dropAllT,
    CreateAllT
};