import CompaniesList from '../../base-companies/companies-list';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveAvailableCompanyId } from '../../../../../../../store/companies';
import {
  selectActiveAvailableCompanyId,
  selectAvailableCompanies,
} from '../../../../../../../store/companies/selectors';

const AvailableCompaniesList = () => {
  const dispatch = useDispatch();

  const availableCompanies = useSelector(selectAvailableCompanies);
  const activeAvailableCompanyId = useSelector(selectActiveAvailableCompanyId);

  const onCompanyClick = (companyId: number) => {
    dispatch(setActiveAvailableCompanyId(companyId));
  };

  return (
    <CompaniesList
      companies={availableCompanies}
      activeCompanyId={activeAvailableCompanyId}
      onCompanyClick={onCompanyClick}
    />
  );
};

export default AvailableCompaniesList;
