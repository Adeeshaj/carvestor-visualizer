package com.carvestor.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class ProcessedListings {

    @Id
    private Integer id;
    private String listingUrl;
    private Double price;
    private String priceCurrency;
    private String brand;
    private String model;
    private Integer mileage;
    private String bodyType;
    private String condition;
    private String fuelType;
    private String transmission;
    private Integer engineCapacity;
    private Integer yearOfManufacture;
    private String trimEdition;
    private String listingDate;
    private String scrapedDate;
}
