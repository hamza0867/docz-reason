/* eslint-disable @typescript-eslint/no-unused-vars */
import { SFC } from "react";

// It is mandatory to have .d.ts file for the generated .bs.js file by bucklescript
import * as AlertBS from "./Alert.bs";

// using require doesn't work;
// const AlertBS = require("./Alert.bs");

export interface AlertProps {
  readonly text: string;
}

// This works
export const Alert: SFC<AlertProps> = AlertBS.Alert;

// The next line doesn't work, so it appears the name of the component has to match the file it is declared in.
// export const Alert: SFC<AlertProps> = AlertBS.Make;

// The next line doesn't work, so it appears the name of the component has to start in capital letter
// export const Alert: SFC<AlertProps> = AlertBS.alert;

// All of the mentioned above are just things I noticed while experimenting and toying with stuff.
// To get definite answers it would be better to look at and understand the actual implementation of the Props component.
// Here is the reference: https://github.com/doczjs/docz/blob/master/core/docz/src/components/Props.tsx
