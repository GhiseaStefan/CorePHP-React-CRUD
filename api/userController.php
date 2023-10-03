<?php
function getUsers($dbConnection) {
    $sql = "SELECT * FROM users";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    if (isset($path[3]) && is_numeric($path[3])) {
        $sql .= " WHERE ID = :id";
        $statement = $dbConnection->prepare($sql);
        $statement->bindParam(":id", $path[3]);
        $statement->execute();
        $users = $statement->fetch(PDO::FETCH_ASSOC);
    } else {
        $statement = $dbConnection->prepare($sql);
        $statement->execute();
        $users = $statement->fetchAll(PDO::FETCH_ASSOC);
    }
    echo json_encode($users);
}

function createUser($dbConnection) {
    $user = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO users(id, name, email, mobile, created_at) VALUES(null, :name, :email, :mobile, :created_at)";
    $statement = $dbConnection->prepare($sql);

    $created_at = date('Y-m-d') . " " . date("H:i:s");
    $statement->bindParam(':name', $user->name);
    $statement->bindParam(':email', $user->email);
    $statement->bindParam(':mobile', $user->mobile);
    $statement->bindParam(':created_at', $created_at);

    if ($statement->execute()) {
        $response = ['status' => 1, 'message' => 'Record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
    echo json_encode($response);
}

function updateUser($dbConnection) {
    $user = json_decode(file_get_contents('php://input'));
    $sql = "UPDATE users SET name =:name, email =:email, mobile =:mobile, updated_at =:updated_at WHERE id =:id";
    $statement = $dbConnection->prepare($sql);

    $updated_at = date('Y-m-d') . " " . date("H:i:s");
    $statement->bindParam(':id', $user->id);
    $statement->bindParam(':name', $user->name);
    $statement->bindParam(':email', $user->email);
    $statement->bindParam(':mobile', $user->mobile);
    $statement->bindParam(':updated_at', $updated_at);

    if ($statement->execute()) {
        $response = ['status' => 1, 'message' => 'Record updated successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to update record.'];
    }
    echo json_encode($response);
}

function deleteUser($dbConnection) {
    $sql = "DELETE FROM users WHERE ID = :id";
    $path = explode('/', $_SERVER['REQUEST_URI']);

    $statement = $dbConnection->prepare($sql);
    $statement->bindParam(':id', $path[4]);
        
    if ($statement->execute()) {
        $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    }
    echo json_encode($response);
}
?>