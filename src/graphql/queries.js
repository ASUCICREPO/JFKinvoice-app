/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      id
      LINE
      CONTRACT
      CONTRACTOR
      CHARGE_JOB_NO
      ChargeJobTRAIN_CONSIST
      ACCOUNT_REC_NO
      WORK_TRAIN_REQUEST_NO
      WORK_TRAIN_CONSIST
      ACCOUNT_TRAIN_CONSIST
      LOAD_DATE_AND_TIME
      LOAD_YARD
      WORK_DAYS
      DAYS_OR_NIGHT
      WORK_DATES
      WORK_HOURS
      CONTINUOUS_HOURS
      WORK_LOCATION
      TRACK
      UPLOAD_DATE_AND_TIME
      UPLOAD_YARD
      SPECIAL_INSTRUCTIONS
      PIGGYBACK_WITH
      APPROVED_BY
      REQUESTED
      SERVICE_PLAN
      GENERAL_ORDER_NUMBER
      SUBMITTED_BY
      TEL
      DATE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        LINE
        CONTRACT
        CONTRACTOR
        CHARGE_JOB_NO
        ChargeJobTRAIN_CONSIST
        ACCOUNT_REC_NO
        WORK_TRAIN_REQUEST_NO
        WORK_TRAIN_CONSIST
        ACCOUNT_TRAIN_CONSIST
        LOAD_DATE_AND_TIME
        LOAD_YARD
        WORK_DAYS
        DAYS_OR_NIGHT
        WORK_DATES
        WORK_HOURS
        CONTINUOUS_HOURS
        WORK_LOCATION
        TRACK
        UPLOAD_DATE_AND_TIME
        UPLOAD_YARD
        SPECIAL_INSTRUCTIONS
        PIGGYBACK_WITH
        APPROVED_BY
        REQUESTED
        SERVICE_PLAN
        GENERAL_ORDER_NUMBER
        SUBMITTED_BY
        TEL
        DATE
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
