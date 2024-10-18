import CompanySearchInput from '../../base-companies/company-search-input';
import { useDispatch } from 'react-redux';
import { setAvailableCompaniesSearch } from '../../../../../../../store/companies';

const AvailableCompanySearchInput = () => {
  const dispatch = useDispatch();

  const onSearch = (value: string) => {
    dispatch(setAvailableCompaniesSearch(value));
  };

  return (
    <CompanySearchInput
      label="Search Available Companies"
      onChange={onSearch}
    />
  );
};

export default AvailableCompanySearchInput;
