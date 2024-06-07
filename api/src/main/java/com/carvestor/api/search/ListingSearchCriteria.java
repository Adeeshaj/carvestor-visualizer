package com.carvestor.api.search;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ListingSearchCriteria {
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
