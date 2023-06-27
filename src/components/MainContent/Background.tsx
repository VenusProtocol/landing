import React from 'react';
import cn from 'classnames';
import Intro from './Intro';
import s from './Background.module.css';
import Market from '../Market/Market';
import Header from '../Header/Header';

interface IMainContentProps {
  className?: string;
}

const Background: React.FC<IMainContentProps> = ({ className }) => (
  <section className={cn(s.bg, className)}>
    <Header />
    <Intro />
    <Market />
  </section>
);

export default Background;
