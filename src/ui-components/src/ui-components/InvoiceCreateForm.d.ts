/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InvoiceCreateFormInputValues = {
    LINE?: string;
    CONTRACT?: string;
    CONTRACTOR?: string;
    CHARGE_JOB_NO?: string;
    ChargeJobTRAIN_CONSIST?: string;
    ACCOUNT_REC_NO?: string;
    WORK_TRAIN_REQUEST_NO?: string;
    WORK_TRAIN_CONSIST?: string;
    ACCOUNT_TRAIN_CONSIST?: string;
    LOAD_DATE_AND_TIME?: string;
    LOAD_YARD?: string;
    WORK_DAYS?: string;
    DAYS_OR_NIGHT?: string;
    WORK_DATES?: string;
    WORK_HOURS?: string;
    CONTINUOUS_HOURS?: string;
    WORK_LOCATION?: string;
    TRACK?: string;
    UPLOAD_DATE_AND_TIME?: string;
    UPLOAD_YARD?: string;
    SPECIAL_INSTRUCTIONS?: string;
    PIGGYBACK_WITH?: string;
    APPROVED_BY?: string;
    REQUESTED?: string;
    SERVICE_PLAN?: string;
    GENERAL_ORDER_NUMBER?: string;
    SUBMITTED_BY?: string;
    TEL?: string;
    DATE?: string;
};
export declare type InvoiceCreateFormValidationValues = {
    LINE?: ValidationFunction<string>;
    CONTRACT?: ValidationFunction<string>;
    CONTRACTOR?: ValidationFunction<string>;
    CHARGE_JOB_NO?: ValidationFunction<string>;
    ChargeJobTRAIN_CONSIST?: ValidationFunction<string>;
    ACCOUNT_REC_NO?: ValidationFunction<string>;
    WORK_TRAIN_REQUEST_NO?: ValidationFunction<string>;
    WORK_TRAIN_CONSIST?: ValidationFunction<string>;
    ACCOUNT_TRAIN_CONSIST?: ValidationFunction<string>;
    LOAD_DATE_AND_TIME?: ValidationFunction<string>;
    LOAD_YARD?: ValidationFunction<string>;
    WORK_DAYS?: ValidationFunction<string>;
    DAYS_OR_NIGHT?: ValidationFunction<string>;
    WORK_DATES?: ValidationFunction<string>;
    WORK_HOURS?: ValidationFunction<string>;
    CONTINUOUS_HOURS?: ValidationFunction<string>;
    WORK_LOCATION?: ValidationFunction<string>;
    TRACK?: ValidationFunction<string>;
    UPLOAD_DATE_AND_TIME?: ValidationFunction<string>;
    UPLOAD_YARD?: ValidationFunction<string>;
    SPECIAL_INSTRUCTIONS?: ValidationFunction<string>;
    PIGGYBACK_WITH?: ValidationFunction<string>;
    APPROVED_BY?: ValidationFunction<string>;
    REQUESTED?: ValidationFunction<string>;
    SERVICE_PLAN?: ValidationFunction<string>;
    GENERAL_ORDER_NUMBER?: ValidationFunction<string>;
    SUBMITTED_BY?: ValidationFunction<string>;
    TEL?: ValidationFunction<string>;
    DATE?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvoiceCreateFormOverridesProps = {
    InvoiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LINE?: PrimitiveOverrideProps<TextFieldProps>;
    CONTRACT?: PrimitiveOverrideProps<TextFieldProps>;
    CONTRACTOR?: PrimitiveOverrideProps<TextFieldProps>;
    CHARGE_JOB_NO?: PrimitiveOverrideProps<TextFieldProps>;
    ChargeJobTRAIN_CONSIST?: PrimitiveOverrideProps<TextFieldProps>;
    ACCOUNT_REC_NO?: PrimitiveOverrideProps<TextFieldProps>;
    WORK_TRAIN_REQUEST_NO?: PrimitiveOverrideProps<TextFieldProps>;
    WORK_TRAIN_CONSIST?: PrimitiveOverrideProps<TextFieldProps>;
    ACCOUNT_TRAIN_CONSIST?: PrimitiveOverrideProps<TextFieldProps>;
    LOAD_DATE_AND_TIME?: PrimitiveOverrideProps<TextFieldProps>;
    LOAD_YARD?: PrimitiveOverrideProps<TextFieldProps>;
    WORK_DAYS?: PrimitiveOverrideProps<TextFieldProps>;
    DAYS_OR_NIGHT?: PrimitiveOverrideProps<TextFieldProps>;
    WORK_DATES?: PrimitiveOverrideProps<TextFieldProps>;
    WORK_HOURS?: PrimitiveOverrideProps<TextFieldProps>;
    CONTINUOUS_HOURS?: PrimitiveOverrideProps<TextFieldProps>;
    WORK_LOCATION?: PrimitiveOverrideProps<TextFieldProps>;
    TRACK?: PrimitiveOverrideProps<TextFieldProps>;
    UPLOAD_DATE_AND_TIME?: PrimitiveOverrideProps<TextFieldProps>;
    UPLOAD_YARD?: PrimitiveOverrideProps<TextFieldProps>;
    SPECIAL_INSTRUCTIONS?: PrimitiveOverrideProps<TextFieldProps>;
    PIGGYBACK_WITH?: PrimitiveOverrideProps<TextFieldProps>;
    APPROVED_BY?: PrimitiveOverrideProps<TextFieldProps>;
    REQUESTED?: PrimitiveOverrideProps<TextFieldProps>;
    SERVICE_PLAN?: PrimitiveOverrideProps<TextFieldProps>;
    GENERAL_ORDER_NUMBER?: PrimitiveOverrideProps<TextFieldProps>;
    SUBMITTED_BY?: PrimitiveOverrideProps<TextFieldProps>;
    TEL?: PrimitiveOverrideProps<TextFieldProps>;
    DATE?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvoiceCreateFormProps = React.PropsWithChildren<{
    overrides?: InvoiceCreateFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: InvoiceCreateFormInputValues) => void;
    onChange?: (fields: InvoiceCreateFormInputValues) => InvoiceCreateFormInputValues;
    onValidate?: InvoiceCreateFormValidationValues;
} & React.CSSProperties>;
export default function InvoiceCreateForm(props: InvoiceCreateFormProps): React.ReactElement;
