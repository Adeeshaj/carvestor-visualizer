package com.carvestor.api.controller;

import com.carvestor.api.model.ProcessedListings;
import com.carvestor.api.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/listings")
public class ListingController {

    @Autowired
    private ListingService listingService;

    @GetMapping
    public List<ProcessedListings> getAllListings() {
        return listingService.getListings();
    }


}
