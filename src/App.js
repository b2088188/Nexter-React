import React from 'react';
import styled from 'styled-components/macro';
import Features from 'components/Features';
import Story from 'components/story/Story';
import Homes from 'components/Homes';
import Gallery from 'components/Gallery';

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
         <div
            css={`
               background: var(--color-primary);
               grid-column: sidebar-start / sidebar-end;
               grid-row: 1/-1;
            `}
         >
            Sidebar
         </div>
         <header
            css={`
               background: var(--color-grey-dark-1);
               grid-column: full-start/col-end 6;
            `}
         >
            Header
         </header>
         <div
            css={`
               background: var(--color-secondary);
               grid-column: col-start 7 / full-end;
            `}
         >
            Top 3 realtors
         </div>
         <Features />
         <Story />
         <Homes />
         <Gallery />
         <footer
            css={`
               background: var(--color-secondary);
               grid-column: full-start / full-end;
            `}
         >
            Footer
         </footer>
      </div>
   );
};

export default App;
