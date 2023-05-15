import styles from "./Select.module.scss";;
import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import ReactSelect, { ContainerProps, GroupBase, StylesConfig } from "react-select";

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  options: SelectItem[];
  label: string;
  className?: string;
  onChange?: (e: any) => void;
  isClearable?: boolean;
}

interface SelectItem {
  value: string | number;
  label: string;
}

const customStyles: StylesConfig = {
  container: (base: any) => ({
    ...base,
    width: "100%",
  }),
  control: (base: any) => ({
    ...base,
    fontSize: "15px",
    fontFamily: "'Roboto', sans-serif",
    width: "100%",
    boxShadow: "none",
    border: "none",
    padding: "3px 0",
    cursor: "pointer",
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "5px",
    marginTop: "10px",
    boxShadow: "#ec7f07",
    width: "140%",
    right: "10%",
    padding: "15px 0",
  }),
  
  option: (base: any, state: { isFocused: any; isSelected: any; }) => {
    let backgroundColor = "white";
    let color = "#191C1F";
    if (state.isFocused) {
      backgroundColor = "#FCBF49";
    }

    if (state.isSelected) {
      backgroundColor = "#EC7F07";
      color = "white";
    }

    return {
      ...base,
      backgroundColor,
      color,
      fontFamily: "Roboto",
      ":active": {
        backgroundColor: "#EC7F07",
        color: "white",
      },
      cursor: "pointer",
    };
  },
};

export default function Select({
  label,
  options,
  value,
  placeholder,
  className,
  isClearable,
  onChange,
  ...rest
}: SelectProps) {
  return (
    <ReactSelect
      value={options.filter((t) => t.value === value)}
      placeholder={placeholder}
      openMenuOnFocus
      isClearable={isClearable}
      menuPortalTarget={document.body}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
        SelectContainer: (
          props: ContainerProps<unknown, boolean, GroupBase<unknown>>
        ) => {
          return (
            <div
              {...rest}
              className={classNames(styles.container, className)}
            >
              <span className={styles.label}>{label}</span>
              {props.children}
            </div>
          );
        },
      }}
      styles={customStyles}
      aria-label={"hello"}
      options={options}
    />
  );
}
