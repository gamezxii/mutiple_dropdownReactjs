<?php

    class Database {
        private $pdo;

        public function __construct($host, $dbname, $user, $pass) {
            try{
                $con = new PDO('mysql:host='.$host.'; dbname='.$dbname.';', $user, $pass);
                $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->pdo = $con;
            }
            catch (PDOException $e)
            {
                echo 'Connection failed: ' . $e->getMessage();
            }
        }

        public function queryProvice() {
            $stmt = $this->pdo->prepare('SELECT * FROM th_province');
            $stmt->execute();

            if($stmt) {
                $data = $stmt->fetchAll();
                return $data;
            }
        }

        public function queryDistrictAll() {
            $stmt = $this->pdo->prepare('SELECT * FROM th_district');
            $stmt->execute();
            if($stmt) {
                $data = $stmt->fetchAll();
                return $data;
            }
        }

        public function querysubDistrictAll() {
            $stmt = $this->pdo->prepare('SELECT * FROM th_subdistrict');
            $stmt->execute();
            if($stmt) {
                $data = $stmt->fetchAll();
                return $data;
            }
        }

        public function queryDistrictId($id) {
            $stmt = $this->pdo->prepare('SELECT * FROM th_district WHERE province_id = :id');
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();
            if($stmt) {
                $data = $stmt->fetchAll();
                return $data;
            }
        }

        public function querysubDistrictId($id) {
            $stmt = $this->pdo->prepare('SELECT * FROM th_subdistrict WHERE district_id = :id');
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();
            if($stmt) {
                $data = $stmt->fetchAll();
                return $data;
            }
        }
    }

?>