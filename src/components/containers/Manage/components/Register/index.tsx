import { useState } from 'react';
import { RegisterBox, TextField, Typography } from './Register.styled';

type RegisterProps = {
    valid: boolean;
    setValid: React.Dispatch<React.SetStateAction<boolean>>;
    carNumber: string;
    setCarNumber: React.Dispatch<React.SetStateAction<string>>;
    onClickNext: () => void;
};
const Register = (props: RegisterProps) => {
    const { valid, setValid, carNumber, setCarNumber, onClickNext } = props;
    const [isError, setIsError] = useState(false);

    const onChangeVehicleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /\d{2,3}[가-힣]{1}\d{4}/gm;
        const result = event.currentTarget.value.match(regex);
        if (result) {
            setValid(true);
            setIsError(false);
            setCarNumber(result[0]);
        } else {
            if (event.target.value.length === 0) setIsError(false);
            else if (event.target.value.length > 6) setIsError(true);
            setValid(false);
            setCarNumber(event.currentTarget.value);
        }
    };

    const onKeyDownEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setIsError(!valid);
            if (valid) onClickNext();
        }
    };

    return (
        <RegisterBox>
            <Typography variant="h3">번호판으로 차량 등록하기</Typography>
            <TextField
                error={isError}
                type="text"
                placeholder="12가3456"
                autoComplete="off"
                value={carNumber}
                helperText={isError ? '번호판 형식이 올바르지 않습니다.' : ''}
                FormHelperTextProps={{ style: { color: 'red' } }}
                onKeyDown={onKeyDownEnter}
                onChange={onChangeVehicleNumber}
            />
        </RegisterBox>
    );
};

export default Register;
