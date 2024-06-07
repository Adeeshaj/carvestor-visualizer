package com.carvestor.api.service;

import com.carvestor.api.model.ProcessedListings;
import com.carvestor.api.repository.ListingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ListingServiceImpl implements ListingService {
    private final ListingRepository listingRepository;

    public ListingServiceImpl(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    @Override
    public List<ProcessedListings> getListings() {
        return listingRepository.findAll();
    }
}
