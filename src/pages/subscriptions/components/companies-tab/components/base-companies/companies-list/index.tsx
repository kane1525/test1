import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  alpha,
  useTheme,
} from '@mui/material';
import { Company } from '../../../../../../../types/company';

interface CompaniesListProps {
  companies: Company[];
  onCompanyClick: (companyId: number) => void;
  activeCompanyId: number | null;
}

const CompaniesList = ({
  companies,
  onCompanyClick,
  activeCompanyId,
}: CompaniesListProps) => {
  const theme = useTheme();

  return (
    <List sx={{ border: '1px solid #ddd', height: 200, overflowY: 'auto' }}>
      {companies.map((company) => (
        <ListItem
          key={company.id}
          sx={{
            backgroundColor:
              activeCompanyId === company.id
                ? alpha(theme.palette.primary.main, 0.5)
                : 'transparent',
          }}
        >
          <ListItemButton onClick={() => onCompanyClick(company.id)}>
            <ListItemText primary={company.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CompaniesList;
