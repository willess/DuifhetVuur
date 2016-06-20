<?php

//Connect database
require_once("db_connect.php");
  
  $value = $_POST['score'];
  $value2 = $_POST['name'];
  // $value = $_POST['score'];
  
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
    $sql = "INSERT INTO NaamEnScore (score, naam) VALUES ('$value', '$value2' )";

    $result = mysqli_query($conn, $sql);
    // header("Location: secure.php");
    // exit;
  



