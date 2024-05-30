const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.urlencoded({ extended: true, limit: "1024mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./routes/userRoutes");
const shop = require("./routes/shopRoutes");
const product = require("./routes/productRoutes");
const event = require("./routes/eventRoutes");
const coupon = require("./routes/couponRoutes");
const payment = require("./routes/paymentRoutes");
const order = require("./routes/orderRoutes");
const conversation = require("./routes/conversationRoutes");
const message = require("./routes/messageRoutes");
const withdraw = require("./routes/withdrawRoutes");

const contact = require('./routes/contact');
const newsletter = require('./routes/newsletter'); 


app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);
app.use("/api/v2/contact", contact); 
app.use("/api/v2/newsletter", newsletter);
// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app; 