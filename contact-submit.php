<?php
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$host = "localhost";         // Leave as "localhost"
$dbname = "ngo_website";     // Use your database name
$username = "root";          // Use your MySQL username (often "root" for local)
$password = "";              // Use your password (leave blank if you set no password for root)

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

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
