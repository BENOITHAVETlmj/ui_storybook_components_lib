import React, { useState } from "react";
import "./Tabs.css";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  /**
   * Array of tab to map
   */
  tabs: Tab[];
  /**
   * Optional event for stories onClick
   */
  onAction?: () => void;
  /**
   * Is mode is Dark?
   */
  dark?: boolean;
}

export const TabComponent: React.FC<TabProps> = ({
  tabs,
  dark = false,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const darkClassName = dark ? "--dark-mode" : "";

  return (
    <div className={`tab-component${darkClassName}`}>
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
              index === activeTab
                ? `active${darkClassName}`
                : `button${darkClassName}`
            }
            onClick={() => {
              handleTabClick(index);
              props?.onAction?.();
            }}
            {...props}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
