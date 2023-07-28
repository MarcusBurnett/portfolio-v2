import React from 'react';
import { useLocation } from 'react-router-dom';
import projects from '../../data/projects';

export default function Project() {
  const { pathname } = useLocation();
  const project = projects.find((p) => p.path === pathname);

  return <p>{project.title}</p>;
}
