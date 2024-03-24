<?php

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "u502347886_transactions";
$password = "Kryptonoxjaam@123044";
$dbname = "u502347886_kryptonox";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$addressTo = mysqli_real_escape_string($conn, $data['addressTo']);
$amount = mysqli_real_escape_string($conn, $data['amount']);
$keyword = mysqli_real_escape_string($conn, $data['keyword']);
$message = mysqli_real_escape_string($conn, $data['message']);

$sql = "INSERT INTO transactions(address_to, amount, keyword, message) VALUES ('$addressTo', $amount, '$keyword', '$message')";

if (mysqli_query($conn, $sql)) {
    $response = array('status' => 'success', 'message' => 'Transaction saved successfully');
    echo json_encode($response);
} else {
    $response = array('status' => 'error', 'message' => mysqli_error($conn));
    echo json_encode($response);
}

mysqli_close($conn);

?>
