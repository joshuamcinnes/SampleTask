<?php
$type=$_GET["type"];
$f0=$_GET["f0"];
$f1=$_GET["f1"];
$f2=$_GET["f2"];
$f3=$_GET["f3"];
$f4=$_GET["f4"];
$f5=$_GET["f5"];
if($type == "Equipment.csv")
{
	$list = array (	    array($f0, $f1)	);
} else
{
	$list = array (array($f0, $f1, $f2 ,$f3, $f4, $f5));
}

$fp = fopen($type, 'a+');

foreach ($list as $fields) {
    fputcsv($fp, $fields);
}
?>