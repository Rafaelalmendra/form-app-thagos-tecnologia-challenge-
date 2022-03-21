import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

interface InputProps {
  title: string;
  icon: React.ReactElement;
  field: string;
  type?: string;
}

const CustomInput = ({ title, icon, field, type, ...props }: InputProps) => (
  <TextField
    fullWidth
    id="outlined-basic"
    label={title}
    margin="normal"
    variant="outlined"
    InputProps={{
      startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
    }}
    type={type}
    {...field}
    {...props}
  />
);

export default CustomInput;
