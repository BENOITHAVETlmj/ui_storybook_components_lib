import { Meta, StoryObj } from "@storybook/react";
import { TabComponent } from "./Tabs.";
import { action } from "@storybook/addon-actions";

/**
 *
 * Composant permetant de créer un système d'onlgets
 *
 *  ### Usage
 *
 * ```jsx
 * const tabs = [
 * { label: "Tab 1", content: <p>Tab 1</p> },
 * { label: "Tab 2", content: <p>Tab 2</p> },
 * { label: "Tab 3", content: <p>Tab 3</p> }];
 *
 * <TabComponent tabs={tabs}>
 * ```
 */

const meta = {
  title: "UI/Tabs",
  component: TabComponent,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffff",
        },
        {
          name: "darkMode",
          value: "black",
        },
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TabComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs = [
  { label: "Home", content: <p>Home</p> },
  { label: "Page 1", content: <p>Page 1</p> },
  { label: "Page 2", content: <p>Page 2</p> },
];

export const Default = () => {
  return <TabComponent tabs={tabs} onAction={action("Tab clicked")} />;
};

export const Dark: Story = {
  args: {
    dark: true,
    tabs: tabs,
  },
  parameters: {
    backgrounds: { default: "darkMode" },
  },
};
