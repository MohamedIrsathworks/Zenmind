const path = require('path'); // Add this line to use path module

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogs");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; frame-ancestors 'none';"
  );
  next();
});

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB Connect + Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`✅ Server running on port ${process.env.PORT || 5000}`);
      console.log(`✅ Connected to MongoDB: ${mongoose.connection.name}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder (assuming your React app is in the "client/build" folder)
  app.use(express.static(path.join(__dirname, 'client/build')));

  // For all other routes, serve index.html (React will handle them)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
