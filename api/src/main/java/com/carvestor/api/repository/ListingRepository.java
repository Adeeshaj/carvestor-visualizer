package com.carvestor.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.carvestor.api.model.ProcessedListings;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

@Repository
public interface ListingRepository extends JpaRepository<ProcessedListings, Long>, JpaSpecificationExecutor<ProcessedListings> {

    @Query(value = "SELECT * FROM processed_listings l ORDER BY ABS(l.price - :targetPrice) ASC LIMIT :n", nativeQuery = true)
    List<ProcessedListings> findClosestListingsByPrice(@Param("targetPrice") double targetPrice, @Param("n") int n);

}
