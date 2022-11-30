<?php

$name=$_POST['name'];
$subject=$_POST['subject'];
$email=$_POST['email'];
$message=$_POST['message'];

$email_from='portfolio.com';
$email_subject="new form submission";
$email_body="User Name:$name.\n".
                "User Email: $email.\n".
                    "User Message: $message.\n";
$to ="vikassaraimeer1999@gmail.com";
$headers="Form:$email_from\r\n";
$headers.="Reply-To: $email\r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location : index.html");

?>