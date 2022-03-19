import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

interface FieldProps {
  title: string;
  icon: React.ReactElement;
}

const Field = ({ title, icon }: FieldProps) => (
  <TextField
    fullWidth
    id="outlined-basic"
    label={title}
    margin="normal"
    variant="outlined"
    InputProps={{
      startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
    }}
  />
);

export default Field;
