<?php

// Your email address where you want to receive messages
$to = "inquiries@serendibeescapestravel.com";

// Form Fields
$title = $_POST['title'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$country = $_POST['country'];
$contact = $_POST['contact'];
$accommodation = $_POST['accommodation'];
$start = $_POST['start'];
$end = $_POST['end'];
$adults = $_POST['adults'];
$kids = $_POST['kids'];
$budget = $_POST['budget'];
$info = $_POST['info'];

// Email Subject
$subject = "New Booking Form Submission – Serendib Escapes";

// Email Body
$message = "
New Booking Request Received:

Title: $title
Name: $fname $lname
Email: $email
Country: $country
Contact No: $contact

Accommodation: $accommodation
Travel Dates: $start to $end
Adults: $adults
Kids: $kids
Budget: $budget

Additional Information:
$info
";

// Email Headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send Email
if (mail($to, $subject, $message, $headers)) {
    echo "<h2>Thank you! Your booking request has been sent successfully.</h2>";
} else {
    echo "<h2>Sorry, something went wrong. Please try again.</h2>";
}

?>
