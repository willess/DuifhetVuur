<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Highscore</title>
    <link rel="stylesheet" type="text/css" href="../css/highscore.css">

  </head>
  <body>    
<?php

//Connect database
require_once("db_connect.php");
  
$queryAll = "SELECT * FROM NaamEnScore ORDER BY score ASC";
$resultTwo = mysqli_query($conn, $queryAll);

$name = array();

while ($row = mysqli_fetch_assoc($resultTwo)) {
    $name[] = $row;
}
?>

<table>
<th colspan="2">Highscore</th>
<tr>
  <td>Name</td>
  <td>Tijd</td>
</tr>


<?php
foreach($name as $names) {

   

    echo '<tr>';

    echo '<td>';
    echo $names['naam'];
    echo '</td>';

    echo '<td>';
    echo $names['score'];
    echo '</td>';

    echo '</tr>';
    
}
echo '</table>';

?>

<input type="button" id="indexphp" name="sendBack" value="Beginscherm" class="button-back" onClick="location.href='../index.php';">



</body>
</html>

