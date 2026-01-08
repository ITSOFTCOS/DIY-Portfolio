import React from "react";

type SkillTypes = {
  icon?: string;
  title: string;
  decription: string;
};
export default function SkillsCard(props: SkillTypes) {
  return (
    <div className="w-full h-80px shadow-sm rounded-2xl p-4">
      <div className="flex">
        {props.icon}
        {props.title}
      </div>
      <p>{props.decription}</p>
    </div>
  );
}
