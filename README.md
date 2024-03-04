**Invoice Digitalization System**

### Description:

The InvoDigitize Suite is a comprehensive cloud-based solution designed to streamline the process of invoice management and digitization. Leveraging the power of AWS services, including Amplify, DynamoDB, Lambda, S3, Quicksight, Amazon Bedrock and AWS Texextractor, it offers a dual-component system that simplifies both the creation and analysis of digital invoices. From automated data entry to insightful business intelligence, the system transforms invoice handling for efficiency and scalability.

### Overview:

The Invoice Digitalization System consists of two main components:

1. **Invoice Form Web Application**: Developed with Amplify and React JS, this component allows users to enter invoice data through a user-friendly web interface. Upon submission, the data is stored in a DynamoDB table named 'invoice', which triggers a Lambda function for JSON transformation and storage in an S3 bucket. This data integration allows for real-time updates and analytics in Quicksight, providing users with valuable insights from their invoice data.

2. **S3 Invoice Uploader**: This tool addresses the challenge of digitizing physical invoice copies. Users can upload scanned invoices via a simple interface, and these documents are stored into the S3 bucket. A triggered Lambda function processes these uploads using AWS Text Extractor, Amazon Bedrock: Claude v2 model to accurately capture and categorize invoice information. The processed data is then entered into the same 'invoice' DynamoDB table, enabling unified analysis in Quicksight alongside data from the web application.

The Invoice Digitalization System is designed for businesses seeking to modernize their invoice management processes. By automating data entry and leveraging cloud-based analytics, it offers a scalable, efficient solution for managing invoices from creation to insight generation.

Based on the attached high-level architecture diagram, here is a description that outlines the flow and components of your invoice digitization system:

### High-Level Architecture Description:

**1. Invoice Upload and Extraction:**

- **Existing Invoice Documents**: Hard copy invoices are digitized and uploaded as PDFs.
- **Amazon S3**: The PDFs are stored in an S3 bucket, which serves as the initial repository for incoming invoice documents.
- **Amazon Textract**: Triggered by the addition of new files to the S3 bucket, Amazon Textract extracts text and data from the uploaded invoice PDFs.
- **Lambda Function**: This function is invoked post-uploading to perform any extraction, processing and transformation of the invoice pdfs.
- **Amazon Bedrock**: Further data processing and structuring are handled by Amazon Bedrock, ensuring the data matches the required format for the invoice database.

**2. Digital Invoice Entry:**

- **Data Entry Operators**: Users responsible for manual data entry interact with the system through a web interface.
- **Amazon Cognito**: Authenticates and authorizes data entry operators to ensure secure access to the system.
- **AWS Amplify**: Provides the framework for building the web application used for entering new invoices digitally.
- **Amazon DynamoDB**: Stores digital invoice data entered through the web application, acting as the central data repository for all invoice data.

**3. Data Processing to Analytics:**

- **Lambda Function**: Once data is in DynamoDB, a Lambda function formats this data into JSON, which is suitable for analytics.
- **Amazon S3**: The processed JSON data is then stored in a separate S3 bucket.
- **Amazon Quicksight**: Utilizes the JSON data from the S3 bucket to perform analytics, offering business intelligence and insights to stakeholders.

**4. Business Insights:**

- **Business Stakeholders**: End-users such as business analysts, finance teams, and decision-makers who access the insights and analytics generated by Amazon Quicksight to make informed decisions.

The architecture showcases a robust, cloud-based solution that efficiently processes and analyzes invoice data, providing a seamless flow from physical document to actionable business insights.
