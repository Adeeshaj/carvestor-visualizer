package com.carvestor.api.service;

import java.util.List;

public interface CarListingService {
    List<String> getBrands();
    List<String> getModels();
    List<String> getBodyTypes();
    List<String> getConditions();
    List<String> getFuelTypes();
    List<String> getTransmissions();
    List<String> getTrimEditions();

}
