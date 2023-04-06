import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/reducers';
import ProvidersWrapper from '@/components/providers/ProvidersWrapper';
import { passStoreToInterceptor } from '@/utils/apiController';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
    reducer: rootReducer,
});

const run = async () => {
    passStoreToInterceptor(store);
    const container = document.getElementById('root') as HTMLElement;
    const root = ReactDOM.createRoot(container);

    root.render(
        <Provider store={store}>
            <ProvidersWrapper>
                <App />
            </ProvidersWrapper>
        </Provider>,
    );
    reportWebVitals();
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
run();
