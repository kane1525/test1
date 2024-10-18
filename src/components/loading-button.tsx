import {
  Button,
  CircularProgress,
  ButtonProps,
  Typography,
} from '@mui/material';

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loaderSize?: number; // Optional size for the loader
}

const LoadingButton = ({
  children,
  loading = false,
  loaderSize = 20,
  disabled,
  sx,
  ...rest
}: LoadingButtonProps) => {
  return (
    <Button
      variant="contained"
      disabled={loading || disabled} // Button is disabled if loading or explicitly disabled
      sx={{
        position: 'relative',
        ...sx,
      }}
      {...rest}
    >
      {loading && (
        <CircularProgress
          size={loaderSize}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: `-${loaderSize / 2}px`,
            marginLeft: `-${loaderSize / 2}px`,
          }}
        />
      )}
      <Typography
        sx={{
          visibility: loading ? 'hidden' : 'visible', // Hide the children when loading but keep the space
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default LoadingButton;
