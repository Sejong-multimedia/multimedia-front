import { Box, TextField, ManageBox, Typography } from './Manage.styled';

const Manage = () => {
    const onChangeVehicleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /\d{2,3}[가-힣]{1}\d{4}/gm;
        console.log(event.target.value);
    };

    return (
        <ManageBox>
            <Box className="manage_area">
                <Typography variant="h3">번호판으로 차량 등록하기</Typography>
                <TextField type="text" placeholder="12가 3456" autoComplete="off" onChange={onChangeVehicleNumber} />
            </Box>
        </ManageBox>
    );
};

export default Manage;
