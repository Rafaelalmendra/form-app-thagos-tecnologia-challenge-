import Visibility from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Lock } from 'react-feather';
import { useState } from 'react';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

interface PasswordInputProps {
  title: string;
  field: string;
}

const PasswordInput = ({ title, field, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl sx={{ width: '100%' }} margin="normal" variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{title}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        label={title}
        startAdornment={
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...field}
        {...props}
      />
    </FormControl>
  );
};

export default PasswordInput;
