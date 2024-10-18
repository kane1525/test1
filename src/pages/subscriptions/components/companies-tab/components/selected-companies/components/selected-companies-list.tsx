import CompaniesList from '../../base-companies/companies-list';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSelectedCompanyId } from '../../../../../../../store/companies';
import {
  selectActiveSelectedCompanyId,
  selectSelectedCompanies,
} from '../../../../../../../store/companies/selectors';

const SelectedCompaniesList = () => {
  const dispatch = useDispatch();

  const selectedCompanies = useSelector(selectSelectedCompanies);
  const activeSelectedCompanyId = useSelector(selectActiveSelectedCompanyId);

  const onCompanyClick = (companyId: number) => {
    dispatch(setActiveSelectedCompanyId(companyId));
  };

  return (
    <CompaniesList
      companies={selectedCompanies}
      activeCompanyId={activeSelectedCompanyId}
      onCompanyClick={onCompanyClick}
    />
  );
};

export default SelectedCompaniesList;
