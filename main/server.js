if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// Importing necessary libraries
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializePassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const africastalking = require("africastalking")({
    apiKey: "0245e357c8487fd44e2afdb8fed56705e2b1d085414a0e73f4f03c53db67bc89",
    username: "airtimeapi"
});

// Initialize Passport
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

// In-memory user storage (for simplicity)
const users = [];

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// Function to validate phone number format
function isValidPhoneNumber(phone) {
    const phoneRegex = /^\+\d{1,15}$/; // Simple regex to match international phone numbers
    return phoneRegex.test(phone);
}

// User registration route
app.post("/register", checkNotAuthenticated, async (req, res) => {
    try {
        const { name, email, PhoneNumber, password } = req.body;

        if (!isValidPhoneNumber(PhoneNumber)) {
            req.flash('error', 'Invalid phone number format. Please use the international format.');
            return res.redirect("/register");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            id: Date.now().toString(),
            name,
            email,
            phone: PhoneNumber,
            password: hashedPassword,
        };
        users.push(user);
        console.log(users); // Display newly registered user in the console

        // Send SMS notification
        const sms = africastalking.SMS;
        const options = {
            to: [PhoneNumber], // Use the user's phone number
            message: `Welcome to Mindscape, ${name}! We are an organisation that helps you learn about mental health through a dedicated chat experience in conjunction with games for a fun and distinctive experience`
        };
        sms.send(options)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error("Error sending SMS:", error.response ? error.response.data : error.message);
                req.flash('error', 'Error sending SMS. Please try again.');
            });

        res.redirect("/login");
    } catch (e) {
        console.log(e);
        res.redirect("/register");
    }
});

// User login route
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}));

// Route definitions
app.get('/', checkAuthenticated, (req, res) => {
    res.render("index.ejs", { name: req.user.name });
});

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render("login.ejs");
});

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render("register.ejs");
});

app.delete("/logout", (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect("/");
    });
});

// Middleware to check if the user is authenticated
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

// Middleware to check if the user is not authenticated
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
}

// Start the server
app.listen(3002, () => {
    console.log('Server started on http://localhost:3002');
});
