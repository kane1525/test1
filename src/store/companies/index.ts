import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAvailableCompanies } from './thunks';
import { Company } from '../../types/company';

interface CompaniesState {
  companies: Company[];
  selectedCompaniesIds: number[];
  activeAvailableCompanyId: number | null;
  availableCompaniesSearch: string;
  activeSelectedCompanyId: number | null;
  selectedCompaniesSearch: string;
  loading: boolean;
  error: string | null;
}

const initialState: CompaniesState = {
  companies: [],
  selectedCompaniesIds: JSON.parse(
    localStorage.getItem('selectedCompaniesIds') || '[]'
  ),
  activeAvailableCompanyId: null,
  availableCompaniesSearch: '',
  activeSelectedCompanyId: null,
  selectedCompaniesSearch: '',
  loading: false,
  error: null,
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setActiveAvailableCompanyId(state, action: PayloadAction<number>) {
      state.activeAvailableCompanyId = action.payload;
    },
    setActiveSelectedCompanyId(state, action: PayloadAction<number>) {
      state.activeSelectedCompanyId = action.payload;
    },
    setAvailableCompaniesSearch(state, action: PayloadAction<string>) {
      state.availableCompaniesSearch = action.payload;
    },
    setSelectedCompaniesSearch(state, action: PayloadAction<string>) {
      state.selectedCompaniesSearch = action.payload;
    },

    applyActiveSelectedCompany(state) {
      const company = state.companies.find(
        (c) => c.id === state.activeSelectedCompanyId
      );

      if (company) {
        state.selectedCompaniesIds = state.selectedCompaniesIds.filter(
          (c) => c !== company.id
        );
        state.activeSelectedCompanyId = null;
      }
    },
    applyActiveAvailableCompany(state) {
      const company = state.companies.find(
        (c) => c.id === state.activeAvailableCompanyId
      );

      if (company) {
        state.selectedCompaniesIds.push(company.id);
        state.activeAvailableCompanyId = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailableCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAvailableCompanies.fulfilled,
        (state, action: PayloadAction<Company[]>) => {
          console.log('fulfilled');
          state.companies = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchAvailableCompanies.rejected, (state, action) => {
        console.log('rejected');
        state.loading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Cannot load data';
      });
  },
});

export const {
  setActiveAvailableCompanyId,
  setActiveSelectedCompanyId,
  setAvailableCompaniesSearch,
  setSelectedCompaniesSearch,
  applyActiveSelectedCompany,
  applyActiveAvailableCompany,
} = companiesSlice.actions;

export default companiesSlice.reducer;
