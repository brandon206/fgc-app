<?php
$proxyURL = "http://rank.shoryuken.com/api/player/id/";
$acceptableHeaders = [];
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: ". implode(',',$acceptableHeaders));

$headers = apache_request_headers();
$curl = curl_init();

$player_id = $_GET['player_id'];

curl_setopt_array($curl, array(
  CURLOPT_URL => $proxyURL . $player_id,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",

  //REMOVE BELOW LINE ON LIVE SITE
  CURLOPT_SSL_VERIFYPEER => false
));
$response = curl_exec($curl);
$err = curl_error($curl);
echo $err;
echo $response;
?>