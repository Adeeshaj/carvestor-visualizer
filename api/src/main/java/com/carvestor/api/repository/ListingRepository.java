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

    @Query(value = "SELECT DISTINCT l.brand FROM processed_listings l", nativeQuery = true)
    List<String> findDistinctBrands();

    @Query(value = "SELECT DISTINCT l.model FROM processed_listings l", nativeQuery = true)
    List<String> findDistinctModels();

    @Query(value = "SELECT DISTINCT l.body_type FROM processed_listings l", nativeQuery = true)
    List<String> findDistinctBodyTypes();

    @Query(value = "SELECT DISTINCT l.condition FROM processed_listings l", nativeQuery = true)
    List<String> findDistinctConditions();

    @Query(value = "SELECT DISTINCT l.fuel_type FROM processed_listings l", nativeQuery = true)
    List<String> findDistinctFuelTypes();

    @Query(value = "SELECT DISTINCT l.transmission FROM processed_listings l", nativeQuery = true)
    List<String> findDistinctTransmissions();

    @Query(value = "SELECT DISTINCT l.trim_edition FROM processed_listings l", nativeQuery = true)
    List<String> findDistinctTrimEditions();
}
