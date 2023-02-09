const sql = require('./db.js');

//insert new user 
const createNewUser = function(req, res) {
    if (!req.body) {
        req.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    const newUser = {
        "Email": req.body.Email,
        "FirstName": req.body.FirstName,
        "lastName": req.body.lastName,
        "Birthdate": req.body.Birthdate,
        "Password": req.body.Password,
        "Repassword": req.body.Repassword,
        "Gender": req.body.Gender,
        "Phone": req.body.Phone

    };

    //insert data into cookie
    res.cookie('Signed_Email', req.body.Email);

    sql.query("INSERT INTO Users SET ?", newUser, (err, mysqlres) => {
        if (err) {
            console.log("error:", err);
            res.render('Results', {
                v1: "error in creating user" + " " + "The error is: " + err,
            })
            return;
        }
        console.log("created user :", {
            mysqlres
        });


        let CookieEmail = req.cookies.Signed_Email;

        console.log(CookieEmail);
        res.render('Results', {
            v1: "Congratulations ! A new user has been created on our Ticket space website ! Welcome" + " " + CookieEmail,
        })
        return;
    });
};


//insert new ticket
const createNewTicket = function(req, res) {
    if (!req.body) {
        req.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    const newTicket = {
        "showName": req.body.showName,
        "Category": req.body.Category,
        "location": req.body.location,
        "date": req.body.date,
        "price": req.body.price,
        "count": req.body.count

    };

    sql.query("INSERT INTO tickets SET ?", newTicket, (err, mysqlres) => {
        if (err) {
            console.log("error:", err);
            res.render('Results', {
                v1: "error in creating ticket" + " " + "The error is: " + err,
            })
            return;
        }
        res.render('Results', {
            v1: "Congratulations ! A new Ticket has been added to our Ticket space website",
        })
        return;
    });
};


//insert new Message
const createNewMessage = function(req, res) {
    if (!req.body) {
        req.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    const newMessage = {
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "country": req.body.country,
        "subject": req.body.subject

    };

    sql.query("INSERT INTO Messages SET ?", newMessage, (err, mysqlres) => {
        if (err) {
            console.log("error:", err);
            res.render('Results', {
                v1: "error in creating Message" + " " + "The error is: " + err,
            })
            return;
        }
        res.render('Results', {
            v1: "Thank you for contact us ! Your Message has been submitted.",
        })

        return;
    });
};



//FindUser
const FindUser = (req, res) => {
    // validate body exists
    if (!req.body) {
        res.status(400).send({
            message: "please fill user name to search"
        });
        return;
    }
    // pull data from body
    const Email = req.query.Email;
    const Password = req.query.Password;
    const User = [Email, Password]



    // run query
    const Q3 = "SELECT * FROM Users WHERE email like ? and password like ?";
    sql.query(Q3, User, (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.render('Results', {
                v1: "could not search user",
            })
            return;
        }
        //if user not found 
        if (mysqlres.length == 0) {
            console.log("error: user could not be found ");
            res.render('Results', {
                v1: "user could not be found",
            })
            return;
        }
        console.log(mysqlres)
        console.log("found user: ", {
            email: mysqlres[0].email
        });
        res.render('Results', {
            v1: "Welcome Back " + " " + mysqlres[0].FirstName + "! We found your user:" + " " + mysqlres[0].email,
        })


        return;
    })
}


//Find Ticket 
const FindTicket = (req, res) => {
    // validate body exists
    if (!req.body) {
        res.status(400).send({
            message: "please fill show name to search"
        });
        return;
    }

    // pull data from body
    const Category = req.query.Category;
    const location = req.query.location;
    const datefrom = req.query.datefrom;
    const dateuntil = req.query.dateuntil;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;

    const search = [Category, location, datefrom, dateuntil, minPrice, maxPrice]

    // run query
    const Q3 = "SELECT * FROM tickets WHERE category like ? and location like ? and date between ? and ? and price between ? and ? ";
    sql.query(Q3, search, (err, mysqlres) => {
        if (err) {
            console.log("error:", err);
            res.render('Results', {
                v1: "Ticket could not be found",
            })
            return;
        }
        //if Ticket not found 
        if (mysqlres.length == 0) {
            console.log("error: Ticket could not be found ");
            res.render('Results', {
                v1: "Ticket could not be found",
            })
            return;
        }
        console.log("found Ticket: ", mysqlres);
        // res.send(mysqlres);
        res.render('SearchTicketResults', {
            v1: "Here are the tickets result for your search",
            results: mysqlres
        })

        return;
    })
}

const UpdateUser = (req, res) => {
    // Check if body is empty
    if (!req.body) {
        res.status(400).send({
            message: "please fill user name to search"
        });
        return;
    }
    
    const updateData = {
        "Email": req.body.Email,
        "OldPassword": req.body.OldPassword,
        "NewPassword": req.body.NewPassword
    };
    console.log(updateData);

    // Check if new password is not null
    if (!updateData.NewPassword) {
        //   res.status(400).send({ message: 'New password cannot be null' });
        res.render('Results', {
            v1: "New password cannot be null",
        });
        return;
    }

    // Check if current password matches the password in the database
    const Q6 = 'SELECT password FROM Users WHERE email = ?';
    sql.query(Q6, [updateData.Email], (err, mysqlres) => {
        if (err) {
            console.log("error is:" + err);
            res.render('Results', {
                v1: err,
            });
            return;
        }

        console.log(mysqlres);
        if (mysqlres.length === 0) {
            // res.status(404).send({ message: 'User not found' });
            res.render('Results', {
                v1: "User not found",
            });

            return;
        }


        //   if (updateData.OldPassword !== mysqlres[0].Password) {
        //     res.status(400).send({ message: 'Incorrect current password' });
        //     return;
        //   } 


        // Update the password in the database
        const Q7 = 'UPDATE users SET password = ? WHERE email = ?';
        sql.query(Q7, [updateData.NewPassword, updateData.Email], (err, mysqlres) => {
            if (err) {
                console.log("error is:" + err);
                res.render('Results', {
                    v1: err,
                })
                return;
            }
            console.log(mysqlres);
            // res.send({ message: 'Password updated successfully' });
            res.render('Results', {
                v1: "Password updated successfully",
            })
            return;
        });
    });

};

const DeleteUser = (req, res) => {
    // check if body is empty
    if (!req.body) {
        res.render('Results', {
            v1: "please fill user email to search",
        });

        return;
    }

    const Email = req.body.Email;
    console.log(Email);
    
    // Check if user with the given ID exists in the database
    const Q7 = 'SELECT * FROM users WHERE email = ?';
    sql.query(Q7, [Email], (err, mysqlres) => {
      if (err) {
        res.render('Results', {
            v1: "Error checking for user",
        });
        return;
      }

      if (!mysqlres.length) {
        res.render('Results', {
            v1: "User not found",
        });

        return;
      }

      // If the user exists, delete it
      const Q8 = 'DELETE FROM Users WHERE email = ?';
      sql.query(Q8, [Email], (err, mysqlres) => {
        if (err) {
        res.render('Results', {
            v1: "Error deleting user",
        });
          return;
        }
        res.render('Results', {
            v1: `User deleted successfully with Email: ${Email}`,
        });

      });
    });
  }
  

module.exports = {
    createNewUser,
    createNewTicket,
    createNewMessage,
    FindUser,
    FindTicket,
    UpdateUser,
    DeleteUser
};