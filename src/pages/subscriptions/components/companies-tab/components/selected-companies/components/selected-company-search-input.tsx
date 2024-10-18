import CompanySearchInput from '../../base-companies/company-search-input';
import { useDispatch } from 'react-redux';
import { setSelectedCompaniesSearch } from '../../../../../../../store/companies';

const SelectedCompanySearchInput = () => {
  const dispatch = useDispatch();

  const onSearch = (value: string) => {
    dispatch(setSelectedCompaniesSearch(value));
  };

  return (
    <CompanySearchInput label="Search Selected Companies" onChange={onSearch} />
  );
};

export default SelectedCompanySearchInput;
