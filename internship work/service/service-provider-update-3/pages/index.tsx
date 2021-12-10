import React, { useEffect } from 'react';
import Router from 'next/router';
import Login from './login';

export default function Index() {
    
    // useEffect(() => {
    //     Router.push('/admin/dashboard');
    // });

    return <Login />;
}