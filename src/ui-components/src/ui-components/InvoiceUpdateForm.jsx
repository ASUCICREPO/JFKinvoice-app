/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getInvoice } from "../graphql/queries";
import { updateInvoice } from "../graphql/mutations";
const client = generateClient();
export default function InvoiceUpdateForm(props) {
  const {
    id: idProp,
    invoice: invoiceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    LINE: "",
    CONTRACT: "",
    CONTRACTOR: "",
    CHARGE_JOB_NO: "",
    ChargeJobTRAIN_CONSIST: "",
    ACCOUNT_REC_NO: "",
    WORK_TRAIN_REQUEST_NO: "",
    WORK_TRAIN_CONSIST: "",
    ACCOUNT_TRAIN_CONSIST: "",
    LOAD_DATE_AND_TIME: "",
    LOAD_YARD: "",
    WORK_DAYS: "",
    DAYS_OR_NIGHT: "",
    WORK_DATES: "",
    WORK_HOURS: "",
    CONTINUOUS_HOURS: "",
    WORK_LOCATION: "",
    TRACK: "",
    UPLOAD_DATE_AND_TIME: "",
    UPLOAD_YARD: "",
    SPECIAL_INSTRUCTIONS: "",
    PIGGYBACK_WITH: "",
    APPROVED_BY: "",
    REQUESTED: "",
    SERVICE_PLAN: "",
    GENERAL_ORDER_NUMBER: "",
    SUBMITTED_BY: "",
    TEL: "",
    DATE: "",
  };
  const [LINE, setLINE] = React.useState(initialValues.LINE);
  const [CONTRACT, setCONTRACT] = React.useState(initialValues.CONTRACT);
  const [CONTRACTOR, setCONTRACTOR] = React.useState(initialValues.CONTRACTOR);
  const [CHARGE_JOB_NO, setCHARGE_JOB_NO] = React.useState(
    initialValues.CHARGE_JOB_NO
  );
  const [ChargeJobTRAIN_CONSIST, setChargeJobTRAIN_CONSIST] = React.useState(
    initialValues.ChargeJobTRAIN_CONSIST
  );
  const [ACCOUNT_REC_NO, setACCOUNT_REC_NO] = React.useState(
    initialValues.ACCOUNT_REC_NO
  );
  const [WORK_TRAIN_REQUEST_NO, setWORK_TRAIN_REQUEST_NO] = React.useState(
    initialValues.WORK_TRAIN_REQUEST_NO
  );
  const [WORK_TRAIN_CONSIST, setWORK_TRAIN_CONSIST] = React.useState(
    initialValues.WORK_TRAIN_CONSIST
  );
  const [ACCOUNT_TRAIN_CONSIST, setACCOUNT_TRAIN_CONSIST] = React.useState(
    initialValues.ACCOUNT_TRAIN_CONSIST
  );
  const [LOAD_DATE_AND_TIME, setLOAD_DATE_AND_TIME] = React.useState(
    initialValues.LOAD_DATE_AND_TIME
  );
  const [LOAD_YARD, setLOAD_YARD] = React.useState(initialValues.LOAD_YARD);
  const [WORK_DAYS, setWORK_DAYS] = React.useState(initialValues.WORK_DAYS);
  const [DAYS_OR_NIGHT, setDAYS_OR_NIGHT] = React.useState(
    initialValues.DAYS_OR_NIGHT
  );
  const [WORK_DATES, setWORK_DATES] = React.useState(initialValues.WORK_DATES);
  const [WORK_HOURS, setWORK_HOURS] = React.useState(initialValues.WORK_HOURS);
  const [CONTINUOUS_HOURS, setCONTINUOUS_HOURS] = React.useState(
    initialValues.CONTINUOUS_HOURS
  );
  const [WORK_LOCATION, setWORK_LOCATION] = React.useState(
    initialValues.WORK_LOCATION
  );
  const [TRACK, setTRACK] = React.useState(initialValues.TRACK);
  const [UPLOAD_DATE_AND_TIME, setUPLOAD_DATE_AND_TIME] = React.useState(
    initialValues.UPLOAD_DATE_AND_TIME
  );
  const [UPLOAD_YARD, setUPLOAD_YARD] = React.useState(
    initialValues.UPLOAD_YARD
  );
  const [SPECIAL_INSTRUCTIONS, setSPECIAL_INSTRUCTIONS] = React.useState(
    initialValues.SPECIAL_INSTRUCTIONS
  );
  const [PIGGYBACK_WITH, setPIGGYBACK_WITH] = React.useState(
    initialValues.PIGGYBACK_WITH
  );
  const [APPROVED_BY, setAPPROVED_BY] = React.useState(
    initialValues.APPROVED_BY
  );
  const [REQUESTED, setREQUESTED] = React.useState(initialValues.REQUESTED);
  const [SERVICE_PLAN, setSERVICE_PLAN] = React.useState(
    initialValues.SERVICE_PLAN
  );
  const [GENERAL_ORDER_NUMBER, setGENERAL_ORDER_NUMBER] = React.useState(
    initialValues.GENERAL_ORDER_NUMBER
  );
  const [SUBMITTED_BY, setSUBMITTED_BY] = React.useState(
    initialValues.SUBMITTED_BY
  );
  const [TEL, setTEL] = React.useState(initialValues.TEL);
  const [DATE, setDATE] = React.useState(initialValues.DATE);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = invoiceRecord
      ? { ...initialValues, ...invoiceRecord }
      : initialValues;
    setLINE(cleanValues.LINE);
    setCONTRACT(cleanValues.CONTRACT);
    setCONTRACTOR(cleanValues.CONTRACTOR);
    setCHARGE_JOB_NO(cleanValues.CHARGE_JOB_NO);
    setChargeJobTRAIN_CONSIST(cleanValues.ChargeJobTRAIN_CONSIST);
    setACCOUNT_REC_NO(cleanValues.ACCOUNT_REC_NO);
    setWORK_TRAIN_REQUEST_NO(cleanValues.WORK_TRAIN_REQUEST_NO);
    setWORK_TRAIN_CONSIST(cleanValues.WORK_TRAIN_CONSIST);
    setACCOUNT_TRAIN_CONSIST(cleanValues.ACCOUNT_TRAIN_CONSIST);
    setLOAD_DATE_AND_TIME(cleanValues.LOAD_DATE_AND_TIME);
    setLOAD_YARD(cleanValues.LOAD_YARD);
    setWORK_DAYS(cleanValues.WORK_DAYS);
    setDAYS_OR_NIGHT(cleanValues.DAYS_OR_NIGHT);
    setWORK_DATES(cleanValues.WORK_DATES);
    setWORK_HOURS(cleanValues.WORK_HOURS);
    setCONTINUOUS_HOURS(cleanValues.CONTINUOUS_HOURS);
    setWORK_LOCATION(cleanValues.WORK_LOCATION);
    setTRACK(cleanValues.TRACK);
    setUPLOAD_DATE_AND_TIME(cleanValues.UPLOAD_DATE_AND_TIME);
    setUPLOAD_YARD(cleanValues.UPLOAD_YARD);
    setSPECIAL_INSTRUCTIONS(cleanValues.SPECIAL_INSTRUCTIONS);
    setPIGGYBACK_WITH(cleanValues.PIGGYBACK_WITH);
    setAPPROVED_BY(cleanValues.APPROVED_BY);
    setREQUESTED(cleanValues.REQUESTED);
    setSERVICE_PLAN(cleanValues.SERVICE_PLAN);
    setGENERAL_ORDER_NUMBER(cleanValues.GENERAL_ORDER_NUMBER);
    setSUBMITTED_BY(cleanValues.SUBMITTED_BY);
    setTEL(cleanValues.TEL);
    setDATE(cleanValues.DATE);
    setErrors({});
  };
  const [invoiceRecord, setInvoiceRecord] = React.useState(invoiceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getInvoice.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getInvoice
        : invoiceModelProp;
      setInvoiceRecord(record);
    };
    queryData();
  }, [idProp, invoiceModelProp]);
  React.useEffect(resetStateValues, [invoiceRecord]);
  const validations = {
    LINE: [],
    CONTRACT: [],
    CONTRACTOR: [],
    CHARGE_JOB_NO: [],
    ChargeJobTRAIN_CONSIST: [],
    ACCOUNT_REC_NO: [],
    WORK_TRAIN_REQUEST_NO: [],
    WORK_TRAIN_CONSIST: [],
    ACCOUNT_TRAIN_CONSIST: [],
    LOAD_DATE_AND_TIME: [],
    LOAD_YARD: [],
    WORK_DAYS: [],
    DAYS_OR_NIGHT: [],
    WORK_DATES: [],
    WORK_HOURS: [],
    CONTINUOUS_HOURS: [],
    WORK_LOCATION: [],
    TRACK: [],
    UPLOAD_DATE_AND_TIME: [],
    UPLOAD_YARD: [],
    SPECIAL_INSTRUCTIONS: [],
    PIGGYBACK_WITH: [],
    APPROVED_BY: [],
    REQUESTED: [],
    SERVICE_PLAN: [],
    GENERAL_ORDER_NUMBER: [],
    SUBMITTED_BY: [],
    TEL: [{ type: "Phone" }],
    DATE: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          LINE: LINE ?? null,
          CONTRACT: CONTRACT ?? null,
          CONTRACTOR: CONTRACTOR ?? null,
          CHARGE_JOB_NO: CHARGE_JOB_NO ?? null,
          ChargeJobTRAIN_CONSIST: ChargeJobTRAIN_CONSIST ?? null,
          ACCOUNT_REC_NO: ACCOUNT_REC_NO ?? null,
          WORK_TRAIN_REQUEST_NO: WORK_TRAIN_REQUEST_NO ?? null,
          WORK_TRAIN_CONSIST: WORK_TRAIN_CONSIST ?? null,
          ACCOUNT_TRAIN_CONSIST: ACCOUNT_TRAIN_CONSIST ?? null,
          LOAD_DATE_AND_TIME: LOAD_DATE_AND_TIME ?? null,
          LOAD_YARD: LOAD_YARD ?? null,
          WORK_DAYS: WORK_DAYS ?? null,
          DAYS_OR_NIGHT: DAYS_OR_NIGHT ?? null,
          WORK_DATES: WORK_DATES ?? null,
          WORK_HOURS: WORK_HOURS ?? null,
          CONTINUOUS_HOURS: CONTINUOUS_HOURS ?? null,
          WORK_LOCATION: WORK_LOCATION ?? null,
          TRACK: TRACK ?? null,
          UPLOAD_DATE_AND_TIME: UPLOAD_DATE_AND_TIME ?? null,
          UPLOAD_YARD: UPLOAD_YARD ?? null,
          SPECIAL_INSTRUCTIONS: SPECIAL_INSTRUCTIONS ?? null,
          PIGGYBACK_WITH: PIGGYBACK_WITH ?? null,
          APPROVED_BY: APPROVED_BY ?? null,
          REQUESTED: REQUESTED ?? null,
          SERVICE_PLAN: SERVICE_PLAN ?? null,
          GENERAL_ORDER_NUMBER: GENERAL_ORDER_NUMBER ?? null,
          SUBMITTED_BY: SUBMITTED_BY ?? null,
          TEL: TEL ?? null,
          DATE: DATE ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateInvoice.replaceAll("__typename", ""),
            variables: {
              input: {
                id: invoiceRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InvoiceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Line"
        isRequired={false}
        isReadOnly={false}
        value={LINE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE: value,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.LINE ?? value;
          }
          if (errors.LINE?.hasError) {
            runValidationTasks("LINE", value);
          }
          setLINE(value);
        }}
        onBlur={() => runValidationTasks("LINE", LINE)}
        errorMessage={errors.LINE?.errorMessage}
        hasError={errors.LINE?.hasError}
        {...getOverrideProps(overrides, "LINE")}
      ></TextField>
      <TextField
        label="Contract"
        isRequired={false}
        isReadOnly={false}
        value={CONTRACT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT: value,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.CONTRACT ?? value;
          }
          if (errors.CONTRACT?.hasError) {
            runValidationTasks("CONTRACT", value);
          }
          setCONTRACT(value);
        }}
        onBlur={() => runValidationTasks("CONTRACT", CONTRACT)}
        errorMessage={errors.CONTRACT?.errorMessage}
        hasError={errors.CONTRACT?.hasError}
        {...getOverrideProps(overrides, "CONTRACT")}
      ></TextField>
      <TextField
        label="Contractor"
        isRequired={false}
        isReadOnly={false}
        value={CONTRACTOR}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR: value,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.CONTRACTOR ?? value;
          }
          if (errors.CONTRACTOR?.hasError) {
            runValidationTasks("CONTRACTOR", value);
          }
          setCONTRACTOR(value);
        }}
        onBlur={() => runValidationTasks("CONTRACTOR", CONTRACTOR)}
        errorMessage={errors.CONTRACTOR?.errorMessage}
        hasError={errors.CONTRACTOR?.hasError}
        {...getOverrideProps(overrides, "CONTRACTOR")}
      ></TextField>
      <TextField
        label="Charge job no"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CHARGE_JOB_NO}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO: value,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.CHARGE_JOB_NO ?? value;
          }
          if (errors.CHARGE_JOB_NO?.hasError) {
            runValidationTasks("CHARGE_JOB_NO", value);
          }
          setCHARGE_JOB_NO(value);
        }}
        onBlur={() => runValidationTasks("CHARGE_JOB_NO", CHARGE_JOB_NO)}
        errorMessage={errors.CHARGE_JOB_NO?.errorMessage}
        hasError={errors.CHARGE_JOB_NO?.hasError}
        {...getOverrideProps(overrides, "CHARGE_JOB_NO")}
      ></TextField>
      <TextField
        label="Charge job train consist"
        isRequired={false}
        isReadOnly={false}
        value={ChargeJobTRAIN_CONSIST}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST: value,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.ChargeJobTRAIN_CONSIST ?? value;
          }
          if (errors.ChargeJobTRAIN_CONSIST?.hasError) {
            runValidationTasks("ChargeJobTRAIN_CONSIST", value);
          }
          setChargeJobTRAIN_CONSIST(value);
        }}
        onBlur={() =>
          runValidationTasks("ChargeJobTRAIN_CONSIST", ChargeJobTRAIN_CONSIST)
        }
        errorMessage={errors.ChargeJobTRAIN_CONSIST?.errorMessage}
        hasError={errors.ChargeJobTRAIN_CONSIST?.hasError}
        {...getOverrideProps(overrides, "ChargeJobTRAIN_CONSIST")}
      ></TextField>
      <TextField
        label="Account rec no"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ACCOUNT_REC_NO}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO: value,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.ACCOUNT_REC_NO ?? value;
          }
          if (errors.ACCOUNT_REC_NO?.hasError) {
            runValidationTasks("ACCOUNT_REC_NO", value);
          }
          setACCOUNT_REC_NO(value);
        }}
        onBlur={() => runValidationTasks("ACCOUNT_REC_NO", ACCOUNT_REC_NO)}
        errorMessage={errors.ACCOUNT_REC_NO?.errorMessage}
        hasError={errors.ACCOUNT_REC_NO?.hasError}
        {...getOverrideProps(overrides, "ACCOUNT_REC_NO")}
      ></TextField>
      <TextField
        label="Work train request no"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={WORK_TRAIN_REQUEST_NO}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO: value,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.WORK_TRAIN_REQUEST_NO ?? value;
          }
          if (errors.WORK_TRAIN_REQUEST_NO?.hasError) {
            runValidationTasks("WORK_TRAIN_REQUEST_NO", value);
          }
          setWORK_TRAIN_REQUEST_NO(value);
        }}
        onBlur={() =>
          runValidationTasks("WORK_TRAIN_REQUEST_NO", WORK_TRAIN_REQUEST_NO)
        }
        errorMessage={errors.WORK_TRAIN_REQUEST_NO?.errorMessage}
        hasError={errors.WORK_TRAIN_REQUEST_NO?.hasError}
        {...getOverrideProps(overrides, "WORK_TRAIN_REQUEST_NO")}
      ></TextField>
      <TextField
        label="Work train consist"
        isRequired={false}
        isReadOnly={false}
        value={WORK_TRAIN_CONSIST}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST: value,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.WORK_TRAIN_CONSIST ?? value;
          }
          if (errors.WORK_TRAIN_CONSIST?.hasError) {
            runValidationTasks("WORK_TRAIN_CONSIST", value);
          }
          setWORK_TRAIN_CONSIST(value);
        }}
        onBlur={() =>
          runValidationTasks("WORK_TRAIN_CONSIST", WORK_TRAIN_CONSIST)
        }
        errorMessage={errors.WORK_TRAIN_CONSIST?.errorMessage}
        hasError={errors.WORK_TRAIN_CONSIST?.hasError}
        {...getOverrideProps(overrides, "WORK_TRAIN_CONSIST")}
      ></TextField>
      <TextField
        label="Account train consist"
        isRequired={false}
        isReadOnly={false}
        value={ACCOUNT_TRAIN_CONSIST}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST: value,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.ACCOUNT_TRAIN_CONSIST ?? value;
          }
          if (errors.ACCOUNT_TRAIN_CONSIST?.hasError) {
            runValidationTasks("ACCOUNT_TRAIN_CONSIST", value);
          }
          setACCOUNT_TRAIN_CONSIST(value);
        }}
        onBlur={() =>
          runValidationTasks("ACCOUNT_TRAIN_CONSIST", ACCOUNT_TRAIN_CONSIST)
        }
        errorMessage={errors.ACCOUNT_TRAIN_CONSIST?.errorMessage}
        hasError={errors.ACCOUNT_TRAIN_CONSIST?.hasError}
        {...getOverrideProps(overrides, "ACCOUNT_TRAIN_CONSIST")}
      ></TextField>
      <TextField
        label="Load date and time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          LOAD_DATE_AND_TIME && convertToLocal(new Date(LOAD_DATE_AND_TIME))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME: value,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.LOAD_DATE_AND_TIME ?? value;
          }
          if (errors.LOAD_DATE_AND_TIME?.hasError) {
            runValidationTasks("LOAD_DATE_AND_TIME", value);
          }
          setLOAD_DATE_AND_TIME(value);
        }}
        onBlur={() =>
          runValidationTasks("LOAD_DATE_AND_TIME", LOAD_DATE_AND_TIME)
        }
        errorMessage={errors.LOAD_DATE_AND_TIME?.errorMessage}
        hasError={errors.LOAD_DATE_AND_TIME?.hasError}
        {...getOverrideProps(overrides, "LOAD_DATE_AND_TIME")}
      ></TextField>
      <TextField
        label="Load yard"
        isRequired={false}
        isReadOnly={false}
        value={LOAD_YARD}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD: value,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.LOAD_YARD ?? value;
          }
          if (errors.LOAD_YARD?.hasError) {
            runValidationTasks("LOAD_YARD", value);
          }
          setLOAD_YARD(value);
        }}
        onBlur={() => runValidationTasks("LOAD_YARD", LOAD_YARD)}
        errorMessage={errors.LOAD_YARD?.errorMessage}
        hasError={errors.LOAD_YARD?.hasError}
        {...getOverrideProps(overrides, "LOAD_YARD")}
      ></TextField>
      <TextField
        label="Work days"
        isRequired={false}
        isReadOnly={false}
        value={WORK_DAYS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS: value,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.WORK_DAYS ?? value;
          }
          if (errors.WORK_DAYS?.hasError) {
            runValidationTasks("WORK_DAYS", value);
          }
          setWORK_DAYS(value);
        }}
        onBlur={() => runValidationTasks("WORK_DAYS", WORK_DAYS)}
        errorMessage={errors.WORK_DAYS?.errorMessage}
        hasError={errors.WORK_DAYS?.hasError}
        {...getOverrideProps(overrides, "WORK_DAYS")}
      ></TextField>
      <TextField
        label="Days or night"
        isRequired={false}
        isReadOnly={false}
        value={DAYS_OR_NIGHT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT: value,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.DAYS_OR_NIGHT ?? value;
          }
          if (errors.DAYS_OR_NIGHT?.hasError) {
            runValidationTasks("DAYS_OR_NIGHT", value);
          }
          setDAYS_OR_NIGHT(value);
        }}
        onBlur={() => runValidationTasks("DAYS_OR_NIGHT", DAYS_OR_NIGHT)}
        errorMessage={errors.DAYS_OR_NIGHT?.errorMessage}
        hasError={errors.DAYS_OR_NIGHT?.hasError}
        {...getOverrideProps(overrides, "DAYS_OR_NIGHT")}
      ></TextField>
      <TextField
        label="Work dates"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={WORK_DATES}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES: value,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.WORK_DATES ?? value;
          }
          if (errors.WORK_DATES?.hasError) {
            runValidationTasks("WORK_DATES", value);
          }
          setWORK_DATES(value);
        }}
        onBlur={() => runValidationTasks("WORK_DATES", WORK_DATES)}
        errorMessage={errors.WORK_DATES?.errorMessage}
        hasError={errors.WORK_DATES?.hasError}
        {...getOverrideProps(overrides, "WORK_DATES")}
      ></TextField>
      <TextField
        label="Work hours"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={WORK_HOURS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS: value,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.WORK_HOURS ?? value;
          }
          if (errors.WORK_HOURS?.hasError) {
            runValidationTasks("WORK_HOURS", value);
          }
          setWORK_HOURS(value);
        }}
        onBlur={() => runValidationTasks("WORK_HOURS", WORK_HOURS)}
        errorMessage={errors.WORK_HOURS?.errorMessage}
        hasError={errors.WORK_HOURS?.hasError}
        {...getOverrideProps(overrides, "WORK_HOURS")}
      ></TextField>
      <TextField
        label="Continuous hours"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CONTINUOUS_HOURS}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS: value,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.CONTINUOUS_HOURS ?? value;
          }
          if (errors.CONTINUOUS_HOURS?.hasError) {
            runValidationTasks("CONTINUOUS_HOURS", value);
          }
          setCONTINUOUS_HOURS(value);
        }}
        onBlur={() => runValidationTasks("CONTINUOUS_HOURS", CONTINUOUS_HOURS)}
        errorMessage={errors.CONTINUOUS_HOURS?.errorMessage}
        hasError={errors.CONTINUOUS_HOURS?.hasError}
        {...getOverrideProps(overrides, "CONTINUOUS_HOURS")}
      ></TextField>
      <TextField
        label="Work location"
        isRequired={false}
        isReadOnly={false}
        value={WORK_LOCATION}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION: value,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.WORK_LOCATION ?? value;
          }
          if (errors.WORK_LOCATION?.hasError) {
            runValidationTasks("WORK_LOCATION", value);
          }
          setWORK_LOCATION(value);
        }}
        onBlur={() => runValidationTasks("WORK_LOCATION", WORK_LOCATION)}
        errorMessage={errors.WORK_LOCATION?.errorMessage}
        hasError={errors.WORK_LOCATION?.hasError}
        {...getOverrideProps(overrides, "WORK_LOCATION")}
      ></TextField>
      <TextField
        label="Track"
        isRequired={false}
        isReadOnly={false}
        value={TRACK}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK: value,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.TRACK ?? value;
          }
          if (errors.TRACK?.hasError) {
            runValidationTasks("TRACK", value);
          }
          setTRACK(value);
        }}
        onBlur={() => runValidationTasks("TRACK", TRACK)}
        errorMessage={errors.TRACK?.errorMessage}
        hasError={errors.TRACK?.hasError}
        {...getOverrideProps(overrides, "TRACK")}
      ></TextField>
      <TextField
        label="Upload date and time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          UPLOAD_DATE_AND_TIME && convertToLocal(new Date(UPLOAD_DATE_AND_TIME))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME: value,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.UPLOAD_DATE_AND_TIME ?? value;
          }
          if (errors.UPLOAD_DATE_AND_TIME?.hasError) {
            runValidationTasks("UPLOAD_DATE_AND_TIME", value);
          }
          setUPLOAD_DATE_AND_TIME(value);
        }}
        onBlur={() =>
          runValidationTasks("UPLOAD_DATE_AND_TIME", UPLOAD_DATE_AND_TIME)
        }
        errorMessage={errors.UPLOAD_DATE_AND_TIME?.errorMessage}
        hasError={errors.UPLOAD_DATE_AND_TIME?.hasError}
        {...getOverrideProps(overrides, "UPLOAD_DATE_AND_TIME")}
      ></TextField>
      <TextField
        label="Upload yard"
        isRequired={false}
        isReadOnly={false}
        value={UPLOAD_YARD}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD: value,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.UPLOAD_YARD ?? value;
          }
          if (errors.UPLOAD_YARD?.hasError) {
            runValidationTasks("UPLOAD_YARD", value);
          }
          setUPLOAD_YARD(value);
        }}
        onBlur={() => runValidationTasks("UPLOAD_YARD", UPLOAD_YARD)}
        errorMessage={errors.UPLOAD_YARD?.errorMessage}
        hasError={errors.UPLOAD_YARD?.hasError}
        {...getOverrideProps(overrides, "UPLOAD_YARD")}
      ></TextField>
      <TextField
        label="Special instructions"
        isRequired={false}
        isReadOnly={false}
        value={SPECIAL_INSTRUCTIONS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS: value,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.SPECIAL_INSTRUCTIONS ?? value;
          }
          if (errors.SPECIAL_INSTRUCTIONS?.hasError) {
            runValidationTasks("SPECIAL_INSTRUCTIONS", value);
          }
          setSPECIAL_INSTRUCTIONS(value);
        }}
        onBlur={() =>
          runValidationTasks("SPECIAL_INSTRUCTIONS", SPECIAL_INSTRUCTIONS)
        }
        errorMessage={errors.SPECIAL_INSTRUCTIONS?.errorMessage}
        hasError={errors.SPECIAL_INSTRUCTIONS?.hasError}
        {...getOverrideProps(overrides, "SPECIAL_INSTRUCTIONS")}
      ></TextField>
      <TextField
        label="Piggyback with"
        isRequired={false}
        isReadOnly={false}
        value={PIGGYBACK_WITH}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH: value,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.PIGGYBACK_WITH ?? value;
          }
          if (errors.PIGGYBACK_WITH?.hasError) {
            runValidationTasks("PIGGYBACK_WITH", value);
          }
          setPIGGYBACK_WITH(value);
        }}
        onBlur={() => runValidationTasks("PIGGYBACK_WITH", PIGGYBACK_WITH)}
        errorMessage={errors.PIGGYBACK_WITH?.errorMessage}
        hasError={errors.PIGGYBACK_WITH?.hasError}
        {...getOverrideProps(overrides, "PIGGYBACK_WITH")}
      ></TextField>
      <TextField
        label="Approved by"
        isRequired={false}
        isReadOnly={false}
        value={APPROVED_BY}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY: value,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.APPROVED_BY ?? value;
          }
          if (errors.APPROVED_BY?.hasError) {
            runValidationTasks("APPROVED_BY", value);
          }
          setAPPROVED_BY(value);
        }}
        onBlur={() => runValidationTasks("APPROVED_BY", APPROVED_BY)}
        errorMessage={errors.APPROVED_BY?.errorMessage}
        hasError={errors.APPROVED_BY?.hasError}
        {...getOverrideProps(overrides, "APPROVED_BY")}
      ></TextField>
      <TextField
        label="Requested"
        isRequired={false}
        isReadOnly={false}
        value={REQUESTED}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED: value,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.REQUESTED ?? value;
          }
          if (errors.REQUESTED?.hasError) {
            runValidationTasks("REQUESTED", value);
          }
          setREQUESTED(value);
        }}
        onBlur={() => runValidationTasks("REQUESTED", REQUESTED)}
        errorMessage={errors.REQUESTED?.errorMessage}
        hasError={errors.REQUESTED?.hasError}
        {...getOverrideProps(overrides, "REQUESTED")}
      ></TextField>
      <TextField
        label="Service plan"
        isRequired={false}
        isReadOnly={false}
        value={SERVICE_PLAN}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN: value,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.SERVICE_PLAN ?? value;
          }
          if (errors.SERVICE_PLAN?.hasError) {
            runValidationTasks("SERVICE_PLAN", value);
          }
          setSERVICE_PLAN(value);
        }}
        onBlur={() => runValidationTasks("SERVICE_PLAN", SERVICE_PLAN)}
        errorMessage={errors.SERVICE_PLAN?.errorMessage}
        hasError={errors.SERVICE_PLAN?.hasError}
        {...getOverrideProps(overrides, "SERVICE_PLAN")}
      ></TextField>
      <TextField
        label="General order number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={GENERAL_ORDER_NUMBER}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER: value,
              SUBMITTED_BY,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.GENERAL_ORDER_NUMBER ?? value;
          }
          if (errors.GENERAL_ORDER_NUMBER?.hasError) {
            runValidationTasks("GENERAL_ORDER_NUMBER", value);
          }
          setGENERAL_ORDER_NUMBER(value);
        }}
        onBlur={() =>
          runValidationTasks("GENERAL_ORDER_NUMBER", GENERAL_ORDER_NUMBER)
        }
        errorMessage={errors.GENERAL_ORDER_NUMBER?.errorMessage}
        hasError={errors.GENERAL_ORDER_NUMBER?.hasError}
        {...getOverrideProps(overrides, "GENERAL_ORDER_NUMBER")}
      ></TextField>
      <TextField
        label="Submitted by"
        isRequired={false}
        isReadOnly={false}
        value={SUBMITTED_BY}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY: value,
              TEL,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.SUBMITTED_BY ?? value;
          }
          if (errors.SUBMITTED_BY?.hasError) {
            runValidationTasks("SUBMITTED_BY", value);
          }
          setSUBMITTED_BY(value);
        }}
        onBlur={() => runValidationTasks("SUBMITTED_BY", SUBMITTED_BY)}
        errorMessage={errors.SUBMITTED_BY?.errorMessage}
        hasError={errors.SUBMITTED_BY?.hasError}
        {...getOverrideProps(overrides, "SUBMITTED_BY")}
      ></TextField>
      <TextField
        label="Tel"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={TEL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL: value,
              DATE,
            };
            const result = onChange(modelFields);
            value = result?.TEL ?? value;
          }
          if (errors.TEL?.hasError) {
            runValidationTasks("TEL", value);
          }
          setTEL(value);
        }}
        onBlur={() => runValidationTasks("TEL", TEL)}
        errorMessage={errors.TEL?.errorMessage}
        hasError={errors.TEL?.hasError}
        {...getOverrideProps(overrides, "TEL")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DATE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LINE,
              CONTRACT,
              CONTRACTOR,
              CHARGE_JOB_NO,
              ChargeJobTRAIN_CONSIST,
              ACCOUNT_REC_NO,
              WORK_TRAIN_REQUEST_NO,
              WORK_TRAIN_CONSIST,
              ACCOUNT_TRAIN_CONSIST,
              LOAD_DATE_AND_TIME,
              LOAD_YARD,
              WORK_DAYS,
              DAYS_OR_NIGHT,
              WORK_DATES,
              WORK_HOURS,
              CONTINUOUS_HOURS,
              WORK_LOCATION,
              TRACK,
              UPLOAD_DATE_AND_TIME,
              UPLOAD_YARD,
              SPECIAL_INSTRUCTIONS,
              PIGGYBACK_WITH,
              APPROVED_BY,
              REQUESTED,
              SERVICE_PLAN,
              GENERAL_ORDER_NUMBER,
              SUBMITTED_BY,
              TEL,
              DATE: value,
            };
            const result = onChange(modelFields);
            value = result?.DATE ?? value;
          }
          if (errors.DATE?.hasError) {
            runValidationTasks("DATE", value);
          }
          setDATE(value);
        }}
        onBlur={() => runValidationTasks("DATE", DATE)}
        errorMessage={errors.DATE?.errorMessage}
        hasError={errors.DATE?.hasError}
        {...getOverrideProps(overrides, "DATE")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || invoiceModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || invoiceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
