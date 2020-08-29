<?php
    require('dbconfig.php');
    $response = array();

    $db = new Database('localhost', '', '', '');

    if($_SERVER['REQUEST_METHOD'] == "GET") {
        $option = $_GET['option'];
        switch ($option) {
            case 'provinces':
                $response['message'] = province($db);
                break;

            case 'districts':
                $response['message'] = district($db);
                break;

            case 'subdistricts':
                $response['message'] = subdistrict($db);
                break;

            case 'districtId':
                $id = $_GET['id'];
                $response['message'] = districtId($db , $id);
                break;

            case 'subdistrictId':
                $id = $_GET['id'];
                $response['message'] = subdistrictId($db , $id);
                break;
            default:
                $response['message'] = 'params not found';
                $response['status'] = 405;
                break;
        }
    }else {
        http_response_code(405);
    }


    function province($db) {
        return $db->queryProvice();
    }

    function district($db) {
        return $db->queryDistrictAll();
    }

    function districtId($db, $id) {
        return $db->queryDistrictId($id);
    }

    function subdistrict($db) {
        return $db->queryDistrictAll();
    }

    function subdistrictId($db, $id) {
        return $db->querysubDistrictId($id);
    }

    echo json_encode($response);

?>