<?php
$url=$_GET["url"];
	header('Content-Type: text/plain');
	$csv = file_get_contents($url);
	echo $csv;
?>