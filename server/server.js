const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', userRouter);




app.listen(PORT, () => console.log(`Started on port ${PORT}`));