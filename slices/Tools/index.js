import React from 'react'
import { PrismicRichText } from '@prismicio/react'

//Variations
import { DefaultTools } from "../../components/Tools";

const Tools = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default": DefaultTools,
  };

  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${i}-cta-slice`} {...primary} items={items} />;
};

export default Tools;