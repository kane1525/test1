import { Typography } from '@mui/material';

interface CompanyTitleProps {
  title: string;
}

const CompanyTitle = ({ title }: CompanyTitleProps) => {
  return <Typography variant="h6">{title}</Typography>;
};

export default CompanyTitle;
