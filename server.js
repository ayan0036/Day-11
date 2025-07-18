 const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/internshipDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("✅ MongoDB connected successfully to internshipDB");
})
.catch((err) => {
    console.log("❌ MongoDB connection failed:", err);
});

// Student schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String
});

// Student model
const Student = mongoose.model('Student', studentSchema);

// Optional: Save one student
const newStudent = new Student({
    name: "Asad Shaikh",
    email: "asad@example.com",
    course: "MERN Stack"
});

newStudent.save()
.then(() => console.log("🎉 Student saved successfully"))
.catch((err) => console.log("❌ Error saving student:", err));
