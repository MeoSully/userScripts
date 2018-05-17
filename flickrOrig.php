<?php
    $apiKey = "621b3655c517a25e35ec61f6b9e4fbf3";
    $userId = $_GET["user"];
    $imageId = $_GET["img"];
    if ($userId !== "" && $imageId == "") {
        $page = 1;
        while (true) {
            set_time_limit(600);
            $imageId = array();
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=$apiKey&user_id=$userId&per_page=100&format=json&nojsoncallback=1&page=$page",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_SSL_VERIFYPEER => false,
                CURLOPT_SSL_VERIFYHOST => false
            ));
            $getId = json_decode(curl_exec($curl), true);
            curl_close($curl);
            foreach ($getId["photos"]["photo"] as $imgId) {
                array_push($imageId, $imgId["id"]);
            }
            sleep(5);
            foreach ($imageId as $id) {
                $getImg = curl_init();
                curl_setopt_array($getImg, array(
                    CURLOPT_URL => "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=$apiKey&photo_id=$id&format=json&nojsoncallback=1",
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_SSL_VERIFYPEER => false,
                    CURLOPT_SSL_VERIFYHOST => false
                ));
                echo end(json_decode(curl_exec($getImg), true)["sizes"]["size"])["source"]."<br>";
                curl_close($getImg);
            }
            if ($getId["photos"]["page"] > $getId["photos"]["pages"]) {
                break;
            } else {
                $page++;
            }
        }
    } else if ($imageId !== "" && $userId == "") {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=$apiKey&photo_id=$imageId&format=json&nojsoncallback=1",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false
        ));
        echo end(json_decode(curl_exec($curl), true)["sizes"]["size"])["source"];
        curl_close($curl);
    } else {
        echo "";
    }
?>
