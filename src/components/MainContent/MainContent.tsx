import React from 'react';
import cn from 'classnames';
import Intro from './Intro';
import s from './MainContent.module.css';
import Market from '../Market/Market';
import Benefits from '../Benefits/Benefits';
import Safety from '../Safety';
import Protection from '../Protection';
import VenusPrime from '../VenusPrime';
import Governance from '../Governance';

interface IMainContentProps {
  className?: string;
}

const MainContent: React.FC<IMainContentProps> = ({ className }) => (
  <section className={cn(s.root, className)}>
    <Intro />
    <Market />
    <VenusPrime />
    <Protection />
    <Governance />
    <Safety />
    <Benefits />
  </section>
);

export default MainContent;
