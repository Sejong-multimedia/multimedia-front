import React, { useRef, useState } from 'react';

import VEHICLE_LIST from '@/const/vehicleList';
import { ArrowDropDown } from '@mui/icons-material';

import { Box, Collapse, Divider, List, ListItem, ListItemText, TextField, Typography } from './CarTypeSelector.styled';
import { CarDataType } from '../../../Manage.types';

type CarTypeSelectorProps = {
    carData: CarDataType;
    setCarData: React.Dispatch<React.SetStateAction<any>>;
};
export const CarTypeSelector = (props: CarTypeSelectorProps) => {
    const { carData, setCarData } = props;
    const listItemRef = useRef<HTMLLIElement>(null);
    const listItemWidth = listItemRef.current?.offsetWidth ?? 0;
    const [carType, setCarType] = useState('');
    const [carListOpen, setCarListOpen] = useState(false);

    const onChagneCarType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCarType(e.target.value);
    };

    const onClickCarListToggle = () => {
        setCarListOpen((prev) => !prev);
    };

    const onClickCarModel = (item: Omit<CarDataType, 'registerNumer'>) => {
        setCarData(item);
        setCarListOpen(false);
    };

    return (
        <React.Fragment>
            <ListItem
                className="item_button"
                ref={listItemRef}
                secondaryAction={<ArrowDropDown />}
                onClick={onClickCarListToggle}
            >
                <ListItemText>{carData.model ? carData.model : 'Types of vehicles.'}</ListItemText>
            </ListItem>
            <Collapse in={carListOpen} timeout="auto" unmountOnExit>
                <List width={String(listItemWidth)} disablePadding>
                    <Box>
                        <ListItem>
                            <TextField
                                label="Types of vehicles."
                                autoComplete="off"
                                value={carType}
                                onChange={onChagneCarType}
                            />
                        </ListItem>
                        <Divider />
                    </Box>
                    {VEHICLE_LIST.map((item) => {
                        if (carType === '')
                            return (
                                <ListItem key={item.model} className="car_model" onClick={() => onClickCarModel(item)}>
                                    {item.brand} {item.model}
                                </ListItem>
                            );
                        else if (item.model.toLocaleLowerCase().includes(carType.toLocaleLowerCase()))
                            return (
                                <ListItem key={item.model} className="car_model" onClick={() => onClickCarModel(item)}>
                                    {item.brand} {item.model}
                                </ListItem>
                            );
                    })}
                </List>
            </Collapse>
        </React.Fragment>
    );
};
