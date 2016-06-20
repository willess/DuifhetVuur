<?php

//Connect database
require_once("db_connect.php");
  
$queryAll = "SELECT * FROM NaamEnScore ";
$resultTwo = mysqli_query($conn, $queryAll);

$name = array();

foreach ($name as $names) {
    echo "JAJAJA";
    echo $names['naam'];
    echo $names['score'];
}
  



