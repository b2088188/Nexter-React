import React from 'react';
import styled from 'styled-components/macro';

const App = () => {
   return (
      <div
         css={`
            display: grid;
            grid-template:
               80vh min-content 40vw repeat(3, min-content)
               / [sidebar-start] 8rem [sidebar-end full-start] minmax(
                  6rem,
                  1fr
               ) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
               [center-end] minmax(6rem, 1fr) [full-end];

            & > * {
               padding: 40px;
               font-size: 3rem;
            }
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
         <section
            css={`
               background: var(--color-grey-light-2);
               grid-column: center-start / center-end;
            `}
         >
            Features
         </section>
         <div
            css={`
               background: var(--color-primary);
               grid-column: full-start/col-end 4;
            `}
         >
            Story pictures
         </div>
         <div
            css={`
               background: var(--color-grey-light-1);
               grid-column: col-start 5 / full-end;
            `}
         >
            Story content
         </div>
         <section
            css={`
               background: var(--color-secondary);
               grid-column: center-start/center-end;
            `}
         >
            Homes
         </section>
         <section
            css={`
               background: var(--color-grey-dark-1);
               grid-column: full-start / full-end;
            `}
         >
            Gallery
         </section>
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
