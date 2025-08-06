* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

**Reporting** is a powerful and flexible tool for automated report generation in PDF or CSV formats.   
With it, you can:
- Create report templates.
- Schedule automatic report generation and distribution.
- View the generated documents.

This functionality greatly simplifies analytics and reporting processes within the ThingsBoard ecosystem.

**Reporting architecture**

Reporting service supports two deployment modes:

- **Monolith mode**: Runs within the core ThingsBoard monolith instance.
- **Microservices mode**: Can be launched as a separate microservice, allowing for better scalability and isolation.

## Report templates

On the "**Templates**" tab of the "**Reporting**" page, you can [create](#creating-report-template) or [import](#importing-report-template) report templates that define the **layout**, **structure**, and **content** of your reports.

Templates act as **reusable configurations** for generating **dynamic reports**  in two formats:
- **PDF** — visually styled reports that include charts, tables, images, and company branding.
- **CSV** — data-focused tabular reports ideal for further analysis in Excel or BI tools.


- Use **PDF templates** for **visually styled reports** featuring charts, tables, images, and your company branding.
- Use **CSV templates** for **structured**, **table-based reports** suitable for spreadsheets and data processing.

### Creating report template
- Open the "**Reporting**" page from the left-hand sidebar. You&#39;ll automatically be taken to the "**Templates**" tab.
- Click the "**+ Add report template**" button in the top-right corner. 
- Choose "**Create new report template**".

<font size="3">In the popup, fill out the following:</font>

- **Name** – a descriptive name for the template.
- **Format**:
  - **PDF** - for visual reports.
  - **CSV** - for spreadsheet-style data.
- **Type**:
  - **Report** - a complete standalone report template. 
  - **Subreport** - a modular component that can be embedded inside another report.
- **Description** (*optional*) – provide additional context, if needed.
- Click "**Add**" to open the **report builder** interface.

{% include images-gallery.html imageCollection="create-new-report-template" %}

### Report builder

The **report builder** is a drag-and-drop editor that allows you to build the report template using visual and data components. You have full control over the appearance and structure of the report.

{% include images-gallery.html imageCollection="report-builder" %}

<br>**Report template** vs. **Generated report**:

{% include images-gallery.html imageCollection="report-example" %}

#### Components & interaction

Templates are composed of **customizable components**, each representing a **visual** or **functional block**.   
These components define what will be included in your final report and how it will be presented.

Below are the main types of components you can use in a template:

- **Text blocks**. Use to add **headings**, **paragraphs**, or **section descriptions** within your report. 
  - Supports **plain** or **rich text**. 
  - Can include **dynamic placeholders** for timestamps, entity names, user info, etc.
- **Tables**. Tables are powerful components used to visualize structured data from your ThingsBoard entities.
  - **Entity tables**. Show static attributes or latest telemetry values for multiple entities. Useful for summarizing device metadata, configurations, or statuses. 
  - **Time Series tables**. Display telemetry data over time. Supports time intervals, aggregation, and filtering. 
  - **Alarm tables**. Visualize the history of alarms triggered by entities. Includes severity, timestamp, and alarm status. Helps track system behavior, faults, or security events.   
  Each table can be styled using the layout configuration panel—customize column widths, font sizes, borders, and pagination.
- **Dashboards**. Embed existing ThingsBoard dashboards directly into your reports. Great for including real-time charts, map widgets, or custom visualizations you've already configured in your dashboard environment. Automatically renders the current view of the dashboard during report generation.
- **Logos and Images**. Add visual elements to enhance branding or provide contextual illustrations. Upload static logos, product photos, or diagrams. Control size, positioning, and alignment.

Each component has two key configuration sections:
- **Data configuration** This section determines what data the component will display and how it will be fetched or filtered. Each component supports entity aliasing and filtering, allowing dynamic data binding.
- **Layout configuration** This controls the visual layout and formatting of the component in the final document.

#### Supported entity aliases and filters

Report templates fully support the same entity aliasing model as dashboards. Additionally, new entity filters have been introduced:
- **Originator entity**
- **Owner of the originator**
- **Entity from master report context** (for subreporting scenarios)

#### Variables & dynamic content

In ThingsBoard, report components provide data as variables that you can reference directly inside component elements. You can insert them wherever text is allowed — for example, in a text block, a table heading, a chart label, and other dynamic fields. 
This allows you to build highly personalized, context-aware reports.

**How it works**

Each report or sub-report component can contain a set of variables based on the specified data source, including:
- the name of the current entity (e.g., device, asset, etc.);
- attributes and telemetry values;
- timestamps, user data, report metadata, and more.

**Using variables in the editor**

- First, add a data source to the selected component (e.g., a header or a text block).
- Next, type the `$` symbol in the text field of that component to open the list of available variables.
- A dropdown list will appear with all available variables in the current context.
- Select a variable (e.g., ${entityName}, ${currentUser}, ${reportDate}), and its value will be inserted into the report during generation.

{% include images-gallery.html imageCollection="variables-and-dynamic-content-1" %}

{% include images-gallery.html imageCollection="variables-and-dynamic-content-2" %}

**Example**

As an example, let's create an “Environmental Monitor Report” template.

{% include images-gallery.html imageCollection="report-builder-example" %}

### Subreport

A **Subreport** in ThingsBoard is a special type of report template that is **designed to be embedded inside another (main) report**. It behaves like a **reusable**, **modular block** that receives context from the parent report and generates its content accordingly.

Just like regular reports, subreports can contain components such as tables, text blocks, images, dashboards, etc., and they fully support dynamic entity aliases and data filtering. However, subreports **are not scheduled or generated independently** — they are **included as part of a main report**.

**Subreports are especially useful when:**
- You want to **reuse a layout or data block** across multiple reports (e.g., a telemetry summary for devices).
- You need to **generate repeated sections** dynamically for multiple entities (e.g., per-device pages in a report).
- You want to **separate responsibilities** across different templates or teams working on report parts.

### Importing report template

If you already have a template, you can easily import it from a `.json` file using the "Import report template" option.

## Scheduling

Report scheduling is based on the existing scheduling TB feature and gives the opportunity to easily schedule a report in the next menu item.

<br><b><font size="4">Creating a new scheduled report</font></b>

- Go to the "Scheduling" page.
- Click the "+ Scheduled report" button in the top-right corner.
- In the scheduling dialog:
  - **Name** – Specify the schedule name.
  - **General configuration**:
    - **Event type** – always "Generate Report".
    - **Report** template – Select a predefined template to use.
    - **User** – Select the user whose credentials will be used for report generation.
    - **Time zone** – Choose the time zone for schedule execution.
    - **Recipients**:
      - Recipients – Add one or more email addresses.
      - Email template – Optionally define a message template for the email body.
  - **Schedule settings**:
    - Start time – Set the initial trigger time.
    - Time zone – Select the time zone in which the schedule will operate.
    - Repeat – Toggle to enable recurrence: choose intervals like daily, weekly, or monthly.

{% include images-gallery.html imageCollection="create-schedule-report" %}

## Reports

All generated reports are available in the Reports menu item. 

> The number of generated reports can be limited per tenant via [tenant profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/){:target="_blank"} configuration.

{% include images-gallery.html imageCollection="reports" %}
