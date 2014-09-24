<?PHP

$a=$_GET["a"];

switch ($a)
{
	case "retrieve":
		$file_handle = fopen("Equipment.csv", "r");

		while (!feof($file_handle) ) {

		$line_of_text = fgetcsv($file_handle, 1000, ',');
		print $line_of_text[0]. "  ". $line_of_text[1]. "<BR>";
		//print $line_of_text[0];
		//print $line_of_text[1];
		}

		fclose($file_handle);
		break;
	case "test2":
		break;
	default:
}

?>