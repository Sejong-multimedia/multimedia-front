import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';
import { useActions } from '@/components/providers/ActionsProvider';
import { Box } from './header.styled';

const Header = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();
    const history = useHistory();

    return <Box>Header area</Box>;
};

export default Header;
