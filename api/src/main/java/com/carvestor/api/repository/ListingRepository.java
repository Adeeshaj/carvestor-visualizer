package com.carvestor.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.carvestor.api.model.ProcessedListings;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

@Repository
public interface ListingRepository extends JpaRepository<ProcessedListings, Long>, JpaSpecificationExecutor<ProcessedListings> {
}
