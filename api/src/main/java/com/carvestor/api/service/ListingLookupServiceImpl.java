package com.carvestor.api.service;

import com.carvestor.api.model.ProcessedListings;
import com.carvestor.api.repository.ListingRepository;
import com.carvestor.api.search.ListingSearchCriteria;
import com.carvestor.api.specification.ListingSpecification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.OptionalDouble;

@Service
public class ListingLookupServiceImpl implements ListingLookupService {
    private final ListingRepository listingRepository;
    private final int listingSuggestionslimit = 3;

    public ListingLookupServiceImpl(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    @Override
    public List<ProcessedListings> getListings() {
        return listingRepository.findAll();
    }

    @Override
    public Double getPrice(ListingSearchCriteria searchCriteria) {
        List<ProcessedListings> listings = listingRepository.findAll(ListingSpecification.findByOptionalFields(searchCriteria));
        OptionalDouble price = listings.stream().mapToDouble(ProcessedListings::getPrice).average();
        return price.orElse(0.0);

    }

    @Override
    public List<ProcessedListings> getListingsByPrice(Double price) {
        return listingRepository
                .findClosestListingsByPrice(price, listingSuggestionslimit);
    }

}
