<?php
// Step 1: Retrieve form inputs
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Step 2: Connect to MySQL database
$host = "localhost";     // usually localhost
$dbname = "ngo_website"; // your database name
$username = "your_db_user"; // your database username
$password = "your_db_password"; // your database password

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Step 3: Insert data
$stmt = $conn->prepare("INSERT INTO contact_requests (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);
if ($stmt->execute()) {
  echo "Thank you for contacting us!";
} else {
  echo "Error: " . $stmt->error;
}
$stmt->close();
$conn->close();
?>
