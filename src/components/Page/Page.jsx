import React, { Fragment } from 'react';

import Header from '../Header';
import styles from './Page.module.css'
import Form from '../Form'
import Error from '../Error'
import Loader from '../Loader'
import Forecast from '../Forecast'

import useForecast from '../../hooks/useForecast'
const Page = () => {
    const{isError, isLoading, forecast, submitRequest} = useForecast();

    const onSubmit = (value) => {
        //call the api
        submitRequest(value);
    }
    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}> 
                    {/* Form */}
                    {!isLoading && <Form submitSearch={onSubmit}/>}
                    {/* Error */}
                    {isError &&<Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader />}
                </div>
            )}
            {/* Forecast */}
            {forecast && (
                <div className={`${styles.box1} `}> 
                    {/* Form */}
                    {!isLoading && <Form submitSearch={onSubmit}/>}
                    {/* Error */}
                    {isError &&<Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader />}
                    <Forecast forecast={forecast}/>
                </div>
            )}
            
        </Fragment>
    );
};

export default Page;
