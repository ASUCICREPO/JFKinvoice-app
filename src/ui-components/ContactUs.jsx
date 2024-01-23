/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { createInvoice } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Flex, TextAreaField, TextField } from "@aws-amplify/ui-react";
const client = generateClient();
export default function ContactUs(props) {
  const { invoice, overrides, ...rest } = props;
  const buttonOnClick = async () => {
    await client.graphql({
      query: createInvoice.replaceAll("__typename", ""),
      variables: { input: {} },
    });
  };
  return (
    <Flex
      gap="24px"
      direction="column"
      width="899px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "ContactUs")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 428")}
      >
        <TextField
          width="unset"
          height="unset"
          label="LINE"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.LINE}
          {...getOverrideProps(overrides, "TextField29766936")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="CONTRACT"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.CONTRACT}
          {...getOverrideProps(overrides, "TextField29766938")}
        ></TextField>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="CONTRACTOR"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        src={invoice?.CONTRACTOR}
        {...getOverrideProps(overrides, "TextField4046771")}
      ></TextField>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 429")}
      >
        <TextField
          width="unset"
          height="unset"
          label="CHARGE (JOB) N0."
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src=""
          {...getOverrideProps(overrides, "TextField4046556")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="TRAIN CONSIST"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.ChargeJobTRAIN_CONSIST}
          {...getOverrideProps(overrides, "TextField4046557")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 430")}
      >
        <TextField
          width="unset"
          height="unset"
          label="ACCOUNT REC. NO."
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src=""
          {...getOverrideProps(overrides, "TextField4046685")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="TRAIN CONSIST"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.ACCOUNT_TRAIN_CONSIST}
          {...getOverrideProps(overrides, "TextField4046686")}
        ></TextField>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="WORK TRAIN REQUEST NUMBER"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        src={invoice?.id}
        {...getOverrideProps(overrides, "TextField29766939")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="WORK TRAIN CONSIST"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        src={invoice?.WORK_TRAIN_CONSIST}
        {...getOverrideProps(overrides, "TextField40461098")}
      ></TextField>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 431")}
      >
        <TextField
          width="unset"
          height="unset"
          label="LOAD DATES & TIME"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.LOAD_DATE_AND_TIME}
          {...getOverrideProps(overrides, "TextField40461193")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="YARD"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.LOAD_YARD}
          {...getOverrideProps(overrides, "TextField40461194")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 432")}
      >
        <TextField
          width="unset"
          height="unset"
          label="WORK DAYS "
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.WORK_DAYS}
          {...getOverrideProps(overrides, "TextField40461412")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label=" DAYS / NIGHT"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.DAYS_OR_NIGHT}
          {...getOverrideProps(overrides, "TextField40461413")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <TextField
          width="unset"
          height="unset"
          label="WORK DATES"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.WORK_DATES}
          {...getOverrideProps(overrides, "TextField40461544")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="OR"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          readOnly=""
          {...getOverrideProps(overrides, "TextField40461545")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 434")}
      >
        <TextField
          width="unset"
          height="unset"
          label="WORK HOURS "
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.WORK_HOURS}
          {...getOverrideProps(overrides, "TextField40461691")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="# CONTINUOUS HOURS"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src=""
          {...getOverrideProps(overrides, "TextField40461692")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 435")}
      >
        <TextField
          width="unset"
          height="unset"
          label="WORK LOCATION "
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.WORK_LOCATION}
          {...getOverrideProps(overrides, "TextField40461853")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="TRACK"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.TRACK}
          {...getOverrideProps(overrides, "TextField40461854")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 436")}
      >
        <TextField
          width="unset"
          height="unset"
          label="UNLOAD DATES & TIME"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.UPLOAD_DATE_AND_TIME}
          {...getOverrideProps(overrides, "TextField40462030")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="YARD"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.UPLOAD_YARD}
          {...getOverrideProps(overrides, "TextField40462031")}
        ></TextField>
      </Flex>
      <TextAreaField
        width="unset"
        height="unset"
        label="SPECIAL INSTRUCTIONS"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        src={invoice?.SPECIAL_INSTRUCTIONS}
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <TextField
          width="unset"
          height="unset"
          label="PIGGYBACK WITH"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.PIGGYBACK_WITH}
          {...getOverrideProps(overrides, "TextField4056743")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="APPROVED BY"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.APPROVED_BY}
          {...getOverrideProps(overrides, "TextField40562422")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="REQUESTED"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.REQUESTED}
          {...getOverrideProps(overrides, "TextField4056744")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <TextField
          width="unset"
          height="unset"
          label="SERVICE PLAN#"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.SERVICE_PLAN}
          {...getOverrideProps(overrides, "TextField4056938")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="GENERAL ORDER#"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src=""
          {...getOverrideProps(overrides, "TextField4056939")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 439")}
      >
        <TextField
          width="unset"
          height="unset"
          label="SUBMITTED BY"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.SUBMITTED_BY}
          {...getOverrideProps(overrides, "TextField40561148")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="TEL"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.TEL}
          {...getOverrideProps(overrides, "TextField40562450")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="DATE"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          src={invoice?.DATE}
          {...getOverrideProps(overrides, "TextField40561149")}
        ></TextField>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="CREATE INVOICE"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
