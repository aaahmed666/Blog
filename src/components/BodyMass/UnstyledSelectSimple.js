import * as React from "react";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  position: relative;
  font-family: Tajawal;
  font-size: 0.875rem;
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  background: #fff;
  border: 1px solid #d5e5ef;
  border-radius: 20px;
  padding: 10px 30px;
  text-align: right;
  line-height: 1.5;
  color: #808080;

  // &:hover {
  //   background: ${theme.palette.mode === "dark" ? "" : grey[100]};
  //   border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  // }

  &.${selectUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${selectUnstyledClasses.expanded} {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    &::after {
      content: '▴';
    }
  }

  &::after {
    position: absolute;
    left: 25px;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
    content: '▾';
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: Tajawal;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: -5px 0 0;
  width: 100%;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.75em;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px 30px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #e9f5f8;
    color: #808080;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #e9f5f8;
    color: #808080;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #e9f5f8;
    color: #808080;
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  width: 100%;
  display: inline-block;
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

export default function UnstyledSelectSimple() {
  return (
    <>
      <CustomSelect defaultValue="ذكر">
        <StyledOption value="ذكر">ذكر</StyledOption>
        <StyledOption value="أنثي">أنثي</StyledOption>
      </CustomSelect>
    </>
  );
}
