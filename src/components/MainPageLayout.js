import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="TV Maze API Box Office"
        subtitle="Are you looking for something to watch or find an actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
