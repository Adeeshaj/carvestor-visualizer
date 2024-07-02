package com.carvestor.api.controller;

import com.carvestor.api.model.ProcessedListings;
import com.carvestor.api.search.ListingSearchCriteria;
import com.carvestor.api.service.ListingLookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
@RequestMapping("/api/lookup/")
public class ListingLookupController {

    @Autowired
    private ListingLookupService listingService;

    @GetMapping("price/")
    public Double getListingPriceEstimate(@ModelAttribute ListingSearchCriteria searchCriteria) {
        return listingService.getPrice(searchCriteria);
    }

    @GetMapping("cars/")
    public List<ProcessedListings> getListingSuggestions(@RequestParam Double price) {
        return listingService.getListingsByPrice(price);
    }

}
