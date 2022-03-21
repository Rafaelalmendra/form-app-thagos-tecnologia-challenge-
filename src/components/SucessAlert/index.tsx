import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SucessAlertProps {
  sucess: boolean;
  setSucess: any;
  message: string;
}

const SucessAlert = ({ sucess, setSucess, message }: SucessAlertProps) => {
  return (
    <Snackbar autoHideDuration={6000} open={sucess}>
      <Alert
        onClose={() => setSucess(false)}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SucessAlert;
