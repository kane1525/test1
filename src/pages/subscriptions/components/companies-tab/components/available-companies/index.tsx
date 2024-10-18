import CompanyTitle from '../base-companies/company-title';

import AvailableCompanySearchInput from './components/available-company-search-input';
import AvailableCompaniesList from './components/available-companies-list';
import CompanyContainer from '../base-companies/company-container';

const AvailableCompanies = () => {
  return (
    <CompanyContainer>
      <CompanyTitle title="Available Companies" />
      <AvailableCompanySearchInput />
      <AvailableCompaniesList />
    </CompanyContainer>
  );
};

export default AvailableCompanies;
