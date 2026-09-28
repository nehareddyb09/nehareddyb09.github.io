/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Writing,
  Speaking,
  Project,
  Education,
  SocialLink,
} from "@/types/portfolio";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Neha B",
  title: "Data Engineer",
  // TODO: Replace with your real phone number
  phone: "+1 (000) 000-0000",
  location: { city: "Dallas, TX", country: "USA" },
  website: "nehab.dev",
  email: "nehareddy2401@gmail.com",
  avatar: "",
  bio: "I'm a Data Engineer with 4+ years of experience designing scalable cloud data solutions across financial and healthcare domains, with a strong emphasis on Microsoft Azure and distributed processing.\n\nI build reliable ETL and ELT pipelines using Azure Data Factory, Azure Databricks, and Azure Data Lake, and I'm proficient in Python, PySpark, Spark, and SQL for large-scale transformations, data quality frameworks, and performance optimization. I also have hands-on AWS experience with Glue, S3, and CloudWatch for healthcare data platforms.\n\nI care deeply about data quality, incremental processing, and production reliability — from watermark-based ingestion and source-to-target reconciliation to monitoring, root-cause analysis, and controlled reruns. I work in Agile teams with Git, peer reviews, and thorough technical documentation.",
  skills: "Microsoft Azure, AWS, Azure Data Factory, Azure Databricks, Azure Data Lake, AWS Glue, Amazon S3, CloudWatch, Apache Spark, PySpark, Spark SQL, Python, SQL, ETL/ELT, Incremental Loading, Data Quality, Reconciliation, Performance Optimization, Git, Agile",
  // TODO: Replace with the real file name when you update the resume
  resumeUrl: "/NEHA_B_Resume.pdf",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Capital One",
    role: "Data Engineer",
    location: "USA",
    startDate: "2024-01",
    endDate: null,
    description: "Built scalable financial ingestion pipelines using Azure Data Factory, loading high-volume data into Azure Data Lake for downstream analytics and reporting. Developed distributed PySpark transformations on Azure Databricks, implemented watermark-based incremental ingestion, and optimized large-scale processing with partitioning, filtering, and efficient joins. Created SQL reconciliation and record-level validation across source and target datasets, and monitored ADF pipelines and Databricks jobs to improve the reliability of scheduled data deliveries.",
    current: true,
  },
  {
    id: "exp-2",
    company: "Labcorp",
    role: "Data Engineer",
    location: "USA",
    startDate: "2022-05",
    endDate: "2023-08",
    description: "Built automated healthcare data ingestion pipelines using AWS Glue, S3, and Python, reducing manual processing effort for analysts. Implemented automated data quality checks that cut recurring reconciliation issues by 25%, optimized Glue processing to shorten pipeline runtime by 20%, and created incremental loading workflows that improved daily refresh efficiency by 18%. Prepared curated, analytics-ready datasets with PySpark and SQL, and documented pipeline dependencies and recovery steps, reducing production troubleshooting time by 15%.",
    current: false,
  },
];

export const writing: Writing[] = [];

export const speaking: Speaking[] = [];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Financial Data Ingestion Platform",
    description:
      "Scalable Azure-based ingestion platform for high-volume financial data. Parameterized ADF pipelines with watermark-based incremental loading feed Azure Data Lake, with PySpark transformations on Databricks and SQL reconciliation for reporting confidence.",
    techStack: ["Azure Data Factory", "Databricks", "PySpark", "ADLS", "SQL"],
    status: "active",
  },
  {
    id: "proj-2",
    name: "Healthcare Data Quality Framework",
    description:
      "Automated data quality and validation framework for healthcare datasets on AWS. Includes schema validation, null and duplicate detection, business-rule checks, and source-to-target reconciliation — reducing reconciliation issues by 25%.",
    techStack: ["AWS Glue", "Amazon S3", "Python", "PySpark", "SQL"],
    status: "active",
  },
  {
    id: "proj-3",
    name: "Incremental ELT Pipeline Optimizer",
    description:
      "Reusable ELT patterns for change-based incremental processing across cloud data platforms. Partitioning, predicate filtering, and efficient joins cut scheduled pipeline runtime by 20% and improved daily refresh efficiency by 18%.",
    techStack: ["Apache Spark", "PySpark", "AWS Glue", "CloudWatch", "Git"],
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of North Texas",
    degree: "Master of Science",
    field: "Advanced Data Analytics",
    startYear: "2020",
    endYear: "2022",
    location: "Denton, TX",
  },
  {
    id: "edu-2",
    institution: "CVR College of Engineering",
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Science & Information Technology",
    startYear: "2016",
    endYear: "2020",
    location: "Hyderabad, India",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "neha-b",
    url: "https://linkedin.com/in/neha-b",
  },
  {
    platform: "GitHub",
    username: "nehab",
    url: "https://github.com/nehab",
  },
  {
    platform: "Email",
    username: "nehareddy2401@gmail.com",
    url: "mailto:nehareddy2401@gmail.com",
  },
];
