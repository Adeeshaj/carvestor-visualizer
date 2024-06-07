package com.carvestor.api.service;

import com.carvestor.api.model.ProcessedListings;

import java.util.List;
public interface ListingService {
    List<ProcessedListings> getListings();
}
