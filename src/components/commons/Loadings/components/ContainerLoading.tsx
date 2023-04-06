import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Refresh } from '@mui/icons-material';
import { Box } from './ContainerLoading.styled';

let timeout: any;

const ContainerLoading = () => {
    const [error, setError] = useState(false);
    // const history = useHistory();
    // const location = useLocation();

    useEffect(() => {
        timeout = setTimeout(() => {
            setError(true);
            clearTimeout(timeout);
        }, 10000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const handleRefresh = () => {
        // history.replace(location.pathname || '/');
        window.location.reload();
    };

    return (
        <React.Fragment>
            {error ? (
                <Box className="loading-error">
                    <div className="loading-background">
                        <span>
                            현재 페이지 로딩에 실패했습니다.
                            <br /> 새로고침 버튼을 눌러주세요.
                        </span>
                        <Button variant="outlined" startIcon={<Refresh />} onClick={handleRefresh}>
                            새로고침
                        </Button>
                    </div>
                </Box>
            ) : (
                <Box className="loading">
                    <CircularProgress />
                </Box>
            )}
        </React.Fragment>
    );
};

export default ContainerLoading;
