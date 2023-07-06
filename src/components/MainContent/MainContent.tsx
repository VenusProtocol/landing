import React from 'react';
import cn from 'classnames';
import Background from './Background';
import s from './MainContent.module.css';
import Benefits from '../Benefits/Benefits';
import Safety from '../Safety';
import Protection from '../Protection';
import VenusPrime from '../VenusPrime';
import Governance from '../Governance';
import Header from '../Header/Header';

interface IMainContentProps {
  className?: string;
}

const MainContent: React.FC<IMainContentProps> = ({ className }) => (
  <section className={cn(s.root, className)}>
    <Header />
    <Background />
    <VenusPrime />
    <Protection />
    <Governance />
    <Safety />
    <Benefits />
  </section>
);

export default MainContent;
