<?php
    if(isset($_POST['msg'])){
        $allowed_hosts = array('yasinuddowla.com');
        if (!isset($_SERVER['HTTP_HOST']) || !in_array($_SERVER['HTTP_HOST'], $allowed_hosts)) {
            header($_SERVER['SERVER_PROTOCOL'].' 400 Bad Request');
            exit;
        }
        
        $name = test_input($_POST['name']);
        $email = test_input($_POST['email']);
        $msg = test_input($_POST['msg']);
        if($name == '' || $email == '' || $msg == '' || !filter_var($email, FILTER_VALIDATE_EMAIL)){
            header("Location: http://yasinuddowla.com");
            die();
        }
        $body = "Message from website:\n\n{$name}\n{$email}\n\n{$msg}";
		$sub = "Public Message: {$name}";
        $headers = "From: public@yasinuddowla.com" . "\r\n" .
                    "Reply-To: {$email}" . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
        $body = str_replace("\n.", "\n..", $body);
        $sub = str_replace("\n.", "\n..", $sub);

		if(!mail('info@yasinuddowla.com',$sub,$body, $headers)){
		    echo 110;
		}else{
            echo 100;
        }
    }
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>