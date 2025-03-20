<?php
$file = 'response.txt';  // Response save hone wali file
$data = "YES clicked on " . date("Y-m-d H:i:s") . "\n";

// File me data append karna
file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

echo "success";
?>
