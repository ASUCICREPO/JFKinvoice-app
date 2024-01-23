/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    TextField29766936?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766938?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4046771?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    TextField4046556?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4046557?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    TextField4046685?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4046686?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766939?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40461098?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    TextField40461193?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40461194?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    TextField40461412?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40461413?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    TextField40461544?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40461545?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    TextField40461691?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40461692?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    TextField40461853?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40461854?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    TextField40462030?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40462031?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    TextField4056743?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40562422?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4056744?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    TextField4056938?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4056939?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    TextField40561148?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40562450?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40561149?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    invoice?: any;
} & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;
