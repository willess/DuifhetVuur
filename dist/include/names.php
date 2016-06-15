<?php

//Connect database
require_once("db_connect.php");

if (isset($_POST['name'])) {


  $value = $_POST['name'];
  
  echo "Dit is " + $value;

//   if ($value == '') {
//     $errors[] = "Vul uw naam in";

//   if (isset($errors)) {
//     for ($i = 0; $i < count($errors); $i++) {
//       echo $errors[$i];
//     }
//   }

//   if (empty($errors)) {
    //Insert values from form in database
    $sql = "INSERT INTO NaamEnScore (naam) VALUES ('$value')";

    $result = mysqli_query($conn, $sql);
    // header("Location: secure.php");
    // exit;
  }



