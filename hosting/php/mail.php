<?php
	$adminEmail = 'hello@cryptoartmuseum.online';
	$adminSubject = "Заявка cryptomuseum.online";
	$adminMailText = "Создана новая заявка:\n";
	$adminMailText .="Данные пользователя:\n";
	$adminMailText .="Имя: " . $_POST['name'] . "\n";
	$adminMailText .="Страна:" . $_POST['country']. "\n";
	$adminMailText .="Email:" . $_POST['email']. "\n";

	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/plain; charset=utf-8\r\n";


	mail($adminEmail, $adminSubject, $adminMailText,  $headers);

	$userEmail = $_POST['email'];
	$userSubject = "Registration confirmed";
	$userMailText = "Thank you for registration. Your request has been successfully received. We value your enquiry and we will make every effort to contact you as soon as possible.";


	mail($userEmail, $userSubject, $userMailText, $headers);

?>