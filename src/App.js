import React from 'react';
import styled from 'styled-components/macro';
import Features from 'components/Features';
import Story from 'components/story/Story';
import Homes from 'components/Homes';
import Gallery from 'components/Gallery';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Realtors from 'components/Realtors';

const App = () => {
   return (
      <div
         css={`
            display: grid;
            grid-template:
               80vh min-content 40vw repeat(3, min-content)
               / [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
               [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
               [center-end] minmax(6rem, 1fr) [full-end];
         `}
      >
         <Sidebar />
         <Header />
         <Realtors />
         <Features />
         <Story />
         <Homes />
         <Gallery />
         <Footer />
      </div>
   );
};

export default App;
