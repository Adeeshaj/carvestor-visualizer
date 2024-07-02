package com.carvestor.api.service;

import com.carvestor.api.repository.ListingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarListingServiceImpl implements CarListingService {
    private final ListingRepository listingRepository;

    public CarListingServiceImpl(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    @Override
    public List<String> getBrands() {
        return listingRepository.findDistinctBrands();
    }

    @Override
    public List<String> getModels() {
        return listingRepository.findDistinctModels();
    }

    @Override
    public List<String> getBodyTypes() {
        return listingRepository.findDistinctBodyTypes();
    }

    @Override
    public List<String> getConditions() {
        return listingRepository.findDistinctConditions();
    }

    @Override
    public List<String> getFuelTypes() {
        return listingRepository.findDistinctFuelTypes();
    }

    @Override
    public List<String> getTransmissions() {
        return listingRepository.findDistinctTransmissions();
    }

    @Override
    public List<String> getTrimEditions() {
        return listingRepository.findDistinctTrimEditions();
    }
}
