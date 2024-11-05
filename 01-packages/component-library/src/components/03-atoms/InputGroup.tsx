import { AutoDiv, FlexColumn, FlexRow } from "components";
import { AutoDivProps, FlexColumnProps } from "types";
import { Divider, Space, Typography } from "antd";
import { ReactNode } from "react";

export const InputGroup = ({
  children,
  inputMinWidth = 400,
  title = "",
  paragraph = "",
  isStackedHorizontally,
  isStackedVertically,
  labelMinWidth = paragraph ? 250 : 0,
  validationText = "",
  containerProps = { maxWidth: 1200 },
  id = "",
  spaceProps = {},
}: {
  children: ReactNode;
  labelMinWidth?: number;
  inputMinWidth?: number;
  title?: string;
  paragraph?: string;
  isStackedHorizontally?: boolean;
  isStackedVertically?: boolean;
  id?: string;
  validationText?: string;
  containerProps?: Partial<AutoDivProps>;
  spaceProps?: Partial<FlexColumnProps>;
}) => {
  if (isStackedHorizontally) {
    return (
      <AutoDiv {...containerProps}>
        <FlexColumn gap={25}>
          <FlexRow
            justifyContent={"space-between"}
            gap={25}
            alignItems={"center"}
          >
            <label htmlFor={id}>
              <Divider orientation={"left"}>
                <Typography.Title level={5}>{title}</Typography.Title>
              </Divider>
            </label>

            {children}
          </FlexRow>

          <Typography.Text type={"secondary"}>{validationText}</Typography.Text>
        </FlexColumn>
      </AutoDiv>
    );
  }
  return (
    <AutoDiv {...containerProps}>
      <label htmlFor={id}>
        <Divider orientation={"left"}>
          <Typography.Title level={5}>{title}</Typography.Title>
        </Divider>
      </label>
      {isStackedHorizontally ? (
        <FlexColumn gap={25}>
          <FlexRow justifyContent={"space-between"} gap={25}>
            <Space>
              <Typography.Text>{paragraph}</Typography.Text>
            </Space>

            {children}
          </FlexRow>

          <Typography.Text type={"secondary"}>{validationText}</Typography.Text>
        </FlexColumn>
      ) : isStackedVertically ? (
        <FlexColumn justifyContent={"space-between"} gap={25}>
          <Space>
            <Typography.Text>{paragraph}</Typography.Text>
          </Space>

          {children}

          <Typography.Text type={"secondary"}>{validationText}</Typography.Text>
        </FlexColumn>
      ) : (
        <FlexRow justifyContent={"space-between"} gap={25}>
          <FlexColumn minWidth={labelMinWidth}>
            <Space>
              <Typography.Text>{paragraph}</Typography.Text>
            </Space>
          </FlexColumn>
          <FlexColumn gap={10} maxWidth={450} width={"100%"} {...spaceProps}>
            {children}

            <FlexRow
              width={inputMinWidth}
              minHeight={50}
              justifyContent={"flex-end"}
            >
              <Typography.Text type={"secondary"}>
                {validationText}
              </Typography.Text>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
      )}
    </AutoDiv>
  );
};
