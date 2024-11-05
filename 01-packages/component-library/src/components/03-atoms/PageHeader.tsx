import { AutoDiv, FlexRow } from "components";

import { Divider, Tabs, TabsProps, Typography } from "antd";
import { ReactNode } from "react";

export const PageHeader = ({
  title,
  description,
  children,
  tabsProps,
}: {
  title: string;
  description: ReactNode;
  children?: ReactNode;
  tabsProps?: Pick<TabsProps, "items" | "defaultActiveKey" | "animated"> & {
    onTabChange?: (activeTab: string) => any;
  };
}) => {
  const handleTabChange = (activeKey: string) => {
    if (tabsProps && tabsProps.onTabChange) tabsProps.onTabChange(activeKey);
  };

  return (
    <>
      <FlexRow gap={50} justifyContent={"space-between"}>
        <AutoDiv maxWidth={700} minWidth={350} textAlign={"left"}>
          <Typography.Title>{title}</Typography.Title>

          <Typography.Text>{description}</Typography.Text>
        </AutoDiv>
        {children}
      </FlexRow>

      {tabsProps && tabsProps.items ? (
        <Tabs
          items={tabsProps.items}
          animated={tabsProps.animated}
          defaultActiveKey={
            tabsProps.defaultActiveKey || tabsProps.items[0].key
          }
          onChange={handleTabChange}
        />
      ) : (
        <AutoDiv marginTop={25} marginBottom={15}>
          <Divider />
        </AutoDiv>
      )}
    </>
  );
};
