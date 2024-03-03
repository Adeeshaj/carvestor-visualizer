package com.carvestor.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.carvestor.api.model.Listing;

public interface ListingRepository extends JpaRepository<Listing, Long> {
    Listing findByModel(String model);
}
