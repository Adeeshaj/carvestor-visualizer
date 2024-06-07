package com.carvestor.api.controller;

import com.carvestor.api.search.ListingSearchCriteria;
import com.carvestor.api.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lookup/")
public class ListingController {

    @Autowired
    private ListingService listingService;

    @GetMapping("price/")
    public Double getListingPriceEstimate(ListingSearchCriteria searchCriteria) {
        return listingService.getPrice(searchCriteria);
    }


}
