import React from 'react';
import './PropertypanelSetuplayoutsimulation3dvisualiationcommissioning.css';
import IconSvg from '../assets/icons/PropertypanelSetuplayoutsimulation3dvisualiationcommissioning--Simulationstatistic.svg?react';

export interface PropertypanelSetuplayoutsimulation3dvisualiationcommissioningProps {
  className?: string;
}

/**
 * PropertypanelSetuplayoutsimulation3dvisualiationcommissioning
 *
 * Original name: Property panel - Setup, Layout, Simulation, 3d, Visualiation, Commissioning/Simulation statistic
 * SVG file: PropertypanelSetuplayoutsimulation3dvisualiationcommissioning--Simulationstatistic.svg
 */
export const PropertypanelSetuplayoutsimulation3dvisualiationcommissioning: React.FC<
  PropertypanelSetuplayoutsimulation3dvisualiationcommissioningProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`propertypanelsetuplayoutsimulation3dvisualiationcommissioning ${
        className || ''
      }`}
    />
  );
};
