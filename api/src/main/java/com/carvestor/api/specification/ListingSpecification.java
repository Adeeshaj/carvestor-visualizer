package com.carvestor.api.specification;

import com.carvestor.api.model.ProcessedListings;
import com.carvestor.api.search.ListingSearchCriteria;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ListingSpecification {
    public static Specification<ProcessedListings> findByOptionalFields(ListingSearchCriteria criteria) {
        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            if (criteria.getBrand() != null && !criteria.getBrand().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("brand"), criteria.getBrand()));
            }

            if (criteria.getModel() != null && !criteria.getModel().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("model"), criteria.getModel()));
            }

            if (criteria.getMileage() != null && !criteria.getMileage().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("mileage"), criteria.getMileage()));
            }

            if (criteria.getBodyType() != null && !criteria.getBodyType().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("bodyType"), criteria.getBodyType()));
            }

            if (criteria.getCondition() != null && !criteria.getCondition().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("condition"), criteria.getCondition()));
            }

            if (criteria.getFuelType() != null && !criteria.getFuelType().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("fuelType"), criteria.getFuelType()));
            }

            if (criteria.getTransmission() != null && !criteria.getTransmission().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("transmission"), criteria.getTransmission()));
            }

            if (criteria.getEngineCapacity() != null && !criteria.getEngineCapacity().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("engineCapacity"), criteria.getEngineCapacity()));
            }

            if (criteria.getYearOfManufacture() != null && !criteria.getYearOfManufacture().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("yearOfManufacture"), criteria.getYearOfManufacture()));
            }

            if (criteria.getTrimEdition() != null && !criteria.getTrimEdition().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("trimEdition"), criteria.getTrimEdition()));
            }

            if (criteria.getListingDate() != null && !criteria.getListingDate().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("listingDate"), criteria.getListingDate()));
            }

            if (criteria.getScrapedDate() != null && !criteria.getScrapedDate().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("scrapedDate"), criteria.getScrapedDate()));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
    }
