<?php
    require database.php;

    header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

    //Because you are posting the data via fetch(), php has to retrieve it elsewhere.
    $json_str = file_get_contents('php://input');
    //This will store the data into an associative array
    $json_obj = json_decode($json_str, true);

    //Variables can be accessed as such:
    $org = $json_obj['organization'];

    $here = "here";
    echo(json_encode($here));
    exit;

    $stmt = $mysqli->prepare("select apikey from api_keys where org=?");
    if (!$stmt) {
        echo json_encode(array(
    	    "success" => $mysqli
        ));
        exit;
    }
    $stmt->bind_param('s', $org);
    $stmt->execute();
    $stmt->bind_result($api);
    $stmt->close();
    // echo json_encode(array(
    //     "success" => true,
    //     "key" => $api
    // ));
    exit;
?>