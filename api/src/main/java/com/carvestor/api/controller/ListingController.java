package com.carvestor.api.controller;

import com.carvestor.api.service.CarListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/listings/cars/")
public class ListingController {

    @Autowired
    private CarListingService carListingService;

    @GetMapping("brands/")
    public List<String> getListingBrands() {
        return carListingService.getBrands();
    }

    @GetMapping("models/")
    public List<String> getListingModels() {
        return carListingService.getModels();
    }

    @GetMapping("bodyTypes/")
    public List<String> getListingBodyTypes() {
        return carListingService.getBodyTypes();
    }

    @GetMapping("conditions/")
    public List<String> getListingConditions() {
        return carListingService.getConditions();
    }

    @GetMapping("fuelTypes/")
    public List<String> getListingFuelTypes() {
        return carListingService.getFuelTypes();
    }

    @GetMapping("transmissions/")
    public List<String> getListingTransmissions() {
        return carListingService.getTransmissions();
    }

    @GetMapping("trimEditions/")
    public List<String> getListingTrimEditions() {
        return carListingService.getTrimEditions();
    }

}
