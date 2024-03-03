package com.carvestor.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Listing {

    @Id
    private Long id;
    private String listingUrl;
    private Integer price;
    private Enum<Currency> price_currency;
    private String brand;
    private String model;
    private String mileage;
    private String bodyType;
    private String condition;
    private String fuelType;
    private String transmission;
    private String engineCapacity;
    private String yearOfManufacture;
    private String trimEdition;
    private String listingDate;
    private String scrapedDate;
}
