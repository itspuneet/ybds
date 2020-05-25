<?php

$con = mysqli_connect("sql12.freemysqlhosting.net","sql12340519","BPYFEVVvHT");

if($con){
	echo "connection successfull";
}
else {
	echo "no connection";
	# code...
}


mysqli_select_db($con,"sql12340519");



$query="create table info(name varchar(20))";

mysqli_query($con, $query);



?>