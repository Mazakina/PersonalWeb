import Router from 'next/router';
import { useEffect } from 'react';

const routeChange = () => {
    const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
            elem.removeAttribute('media');
        });
    };
    tempFix();
};

export const useTransitionFix = (): void => {
    useEffect(() => {
        Router.events.on('routeChangeComplete', routeChange);
        Router.events.on('routeChangeStart', routeChange);

        return () => {
            Router.events.off('routeChangeComplete', routeChange);
            Router.events.off('routeChangeStart', routeChange);
        };
    }, []);

    useEffect(() => {
        Router.router?.push(Router.router?.pathname);
    }, []);
};