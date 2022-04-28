import React from 'react';
import { NavigationProvider, Navbar, Drawer, useNavigation } from '@moxy/react-navigation';

const MyNavigationHelper = () => {
    const { drawer } = useNavigation();

    return (
        <>
            <span>{ `Is Drawer Open?  ${drawer.isOpen}` }</span>
            <button onClick={ drawer.open }>Open Drawer</button>
            <button onClick={ drawer.close }>Close Drawer</button>
            <button onClick={ drawer.toggle }>Toggle Drawer</button>
        </>
    );
}

const App = ({ Page, pageProps }) => (
    <NavigationProvider>
        <Navbar
            placement="top"
            behaviour="hideOnScrollDown"
            className="navbar">
            <p>This is the content of the navbar.</p>
            <MyNavigationHelper />
        </Navbar>
        <Drawer
            withOverlay
            placement="left"
            className="drawer"
            overlayClassName="overlay">
            <p>This is the content of the navbar.</p>
        </Drawer>
        <Page { ...pageProps } />
    </NavigationProvider>
);

export default App;