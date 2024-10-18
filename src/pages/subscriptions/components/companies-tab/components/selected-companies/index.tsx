import CompanyTitle from '../base-companies/company-title';
import SelectedCompanySearchInput from './components/selected-company-search-input';
import SelectedCompaniesList from './components/selected-companies-list';
import CompanyContainer from '../base-companies/company-container';

const SelectedCompanies = () => {
  return (
    <CompanyContainer>
      <CompanyTitle title="Selected Companies" />
      <SelectedCompanySearchInput />
      <SelectedCompaniesList />
    </CompanyContainer>
  );
};

export default SelectedCompanies;
