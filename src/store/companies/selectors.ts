import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../';

const selectCompanies = (state: RootState) => {
  return state.companies.companies;
};
export const selectCompaniesLoading = (state: RootState) => {
  return state.companies.loading;
};
export const selectCompaniesError = (state: RootState) => {
  return state.companies.error;
};

export const selectSelectedCompaniesIds = (state: RootState) => {
  return state.companies.selectedCompaniesIds;
};

export const selectAvailableCompaniesSearch = (state: RootState) =>
  state.companies.availableCompaniesSearch;

export const selectSelectedCompaniesSearch = (state: RootState) =>
  state.companies.selectedCompaniesSearch;

export const selectAvailableCompanies = createSelector(
  [selectCompanies, selectSelectedCompaniesIds, selectAvailableCompaniesSearch],
  (companies, selectedCompaniesIds, availableCompaniesSearch) => {
    return companies.filter(
      (company) =>
        !selectedCompaniesIds.includes(company.id) &&
        company.title
          .toLowerCase()
          .includes(availableCompaniesSearch.toLowerCase())
    );
  }
);

export const selectSelectedCompanies = createSelector(
  [selectCompanies, selectSelectedCompaniesIds, selectSelectedCompaniesSearch],
  (companies, selectedCompaniesIds, selectedCompaniesSearch) => {
    return companies.filter(
      (company) =>
        selectedCompaniesIds.includes(company.id) &&
        company.title
          .toLowerCase()
          .includes(selectedCompaniesSearch.toLowerCase())
    );
  }
);

export const selectActiveAvailableCompanyId = (state: RootState) =>
  state.companies.activeAvailableCompanyId;

export const selectActiveSelectedCompanyId = (state: RootState) =>
  state.companies.activeSelectedCompanyId;
