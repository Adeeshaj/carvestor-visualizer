package com.carvestor.api.service;

import com.carvestor.api.model.ProcessedListings;
import com.carvestor.api.search.ListingSearchCriteria;

import java.util.List;
public interface ListingService {
    List<ProcessedListings> getListings();
    Double getPrice(ListingSearchCriteria searchCriteria);
    List<ProcessedListings> getListingsByPrice(Double price);
}
