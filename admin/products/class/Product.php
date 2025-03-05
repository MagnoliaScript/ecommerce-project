<?php

class Product
{
    private $product_id;
    private $product_sku;
    private $product_status;
    private $product_title;
    private $product_desc_major;
    private $product_desc_minor;
    private $product_specifications;
    private $product_stock;
    private $product_promo_price;
    private $product_final_price;
    private $product_brand;


    public function __construct($product_sku, $product_status, $product_title, $product_desc_major, $product_desc_minor, $product_specifications, $product_stock, $product_promo_price, $product_final_price, $product_brand, $product_id = null)
    {

        $this->product_sku = $product_sku;
        $this->product_status = $product_status;
        $this->product_title = $product_title;
        $this->product_desc_major = $product_desc_major;
        $this->product_desc_minor = $product_desc_minor;
        $this->product_specifications = $product_specifications;
        $this->product_stock = $product_stock;
        $this->product_promo_price = $product_promo_price;
        $this->product_final_price = $product_final_price;
        $this->product_brand = $product_brand;
    }

    // Getters e Setters

    public function getProductId() {
        return $this->product_id;
    }

    public function setProductId($product_id) {
        $this->product_id = $product_id;
    }

    public function getProductSku() {
        return $this->product_sku;
    }

    public function setProductSku($product_sku) {
        $this->product_sku = $product_sku;
    }

    public function getProductStatus() {
        return $this->product_status;
    }

    public function setProductStatus($product_status) {
        $this->product_status = $product_status;
    }

    public function getProductTitle() {
        return $this->product_title;
    }

    public function setProductTitle($product_title) {
        $this->product_title = $product_title;
    }

    public function getProductDescMajor() {
        return $this->product_desc_major;
    }

    public function setProductDescMajor($product_desc_major) {
        $this->product_desc_major = $product_desc_major;
    }

    public function getProductDescMinor() {
        return $this->product_desc_minor;
    }

    public function setProductDescMinor($product_desc_minor) {
        $this->product_desc_minor = $product_desc_minor;
    }

    public function getProductSpecifications() {
        return $this->product_specifications;
    }

    public function setProductSpecifications($product_specifications) {
        $this->product_specifications = $product_specifications;
    }

    public function getProductStock() {
        return $this->product_stock;
    }

    public function setProductStock($product_stock) {
        $this->product_stock = $product_stock;
    }

    public function getProductPromoPrice() {
        return $this->product_promo_price;
    }

    public function setProductPromoPrice($product_promo_price) {
        $this->product_promo_price = $product_promo_price;
    }

    public function getProductFinalPrice() {
        return $this->product_final_price;
    }

    public function setProductFinalPrice($product_final_price) {
        $this->product_final_price = $product_final_price;
    }

    public function getProductBrand() {
        return $this->product_brand;
    }

    public function setProductBrand($product_brand) {
        $this->product_brand = $product_brand;
    }


}
