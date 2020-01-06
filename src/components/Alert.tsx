/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";

//import * as AlertBS from "./Alert.bs";

// using require doesn't work;
const AlertBS = require("./Alert.bs");

export interface AlertProps {
  readonly text: string;
}

// This works
// using ComponentType doesn't work, but using FunctionComponent/FC/SFC or ComponentClass still works
export const Alert: FC<{ readonly text: string }> = AlertBS.Alert;

// Uncommenting the next line breaks props parsing by docz no matter where you export the make function in .bs.js file
// export const Alert: FunctionComponent<{ readonly text: string }> = AlertBS.make;
