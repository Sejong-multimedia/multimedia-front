import { commonRoutes } from '@/routes';
import { useActions } from '@/components/providers/ActionsProvider';
import { Box, HeaderBox, Stack, Typography } from './Header.styled';
import { useHistory } from 'react-router-dom';
import React from 'react';

const Header = () => {
    const history = useHistory();
    const headList = commonRoutes.map((item) => ({ name: item.name, path: item.path }));

    const routeToParams = (path: string) => {
        history.push(path);
    };

    return (
        <HeaderBox>
            <Stack className="navigate_list">
                {headList.map((item) => {
                    return (
                        <Stack className="navigate_item" onClick={() => routeToParams(item.path)}>
                            <Typography variant="h6">{item.name}</Typography>
                            {item.path === history.location.pathname && <Box className="selector" />}
                        </Stack>
                    );
                })}
                {/* <Typography variant="h6">로그인</Typography>
                <Box className="selector" /> */}
            </Stack>
        </HeaderBox>
    );
};

export default Header;
