import { AutoDiv, FlexRow } from "components";
import { ReactNode } from "react";

export const Page = ({
  children,
  footerContent,
}: {
  children: ReactNode;
  footerContent?: ReactNode;
}) => {
  if (!footerContent) {
    return (
      <AutoDiv
        height={"100vh"}
        overflowY={"auto"}
        minWidth={600}
        paddingTop={25}
        paddingRight={25}
      >
        {children}
      </AutoDiv>
    );
  }
  return (
    <AutoDiv>
      <AutoDiv
        minWidth={600}
        paddingTop={25}
        paddingRight={25}
        height={"calc(100vh - 75px)"}
        overflowY={"auto"}
      >
        {children}
      </AutoDiv>
      <AutoDiv paddingRight={25}>
        <FlexRow
          height={50}
          position={"sticky"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={25}
          borderTop={"2px solid black"}
        >
          {footerContent}
        </FlexRow>
      </AutoDiv>
    </AutoDiv>
  );
};
