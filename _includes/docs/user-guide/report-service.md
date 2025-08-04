* TOC
{:toc}

{% assign feature = "White labeling" %}{% include templates/pe-feature-banner.md %}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

**Report service 2.0** is a powerful and flexible tool for generating reports in PDF or CSV format. It introduces a streamlined user experience, advanced report customization,  quick scheduling and notification features, making it easier to deliver insights across your ThingsBoard platform.

**Architecute**

The new report service supports two deployment modes:
- **Monolith mode**: Runs within the core ThingsBoard monolith instance.
- **Microservices mode**: Can be launched as a separate microservice, allowing for better scalability and isolation.

## Report template

The "**Report templates**" section allows you to create or import **blueprints** that define the layout, structure, and content of your reports.

<br><b><font size="4">Create a new report template</font></b>
- Navigate to the "**Templates**" page.
- Click the "**+ Add report template**" button in the top-right corner. 
- Choose "**Create new report template**".

In the **Add report template** dialog, fill out the following fields:
- **Name** – Enter a descriptive name for your template.
- **Format** – Choose the desired output format:
  - **PDF**: For styled, visual reports with charts, tables, images, and layout control. 
  - **CSV**: For structured, table-based reports ideal for spreadsheets and data processing.
- **Type**:
  - **Report**: A complete standalone report template. 
  - **Subreport**: A modular component that can be embedded inside another report.
- **Description** (*optional*) – Add context or notes to help identify the template&#39;s purpose.
- Click "**Add**" to proceed.

{% include images-gallery.html imageCollection="create-new-report-template" %}

Once added, the **report builder** interface will open automatically.

### Report builder

The **report builder** is a drag-and-drop editor that lets you build your template using visual and data-driven components. It provides full control over the layout and content of the final report.

{% include images-gallery.html imageCollection="report-example" %}

<br><b><font size="4">Components & interaction</font></b>

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


<br><b><font size="4">Supported Entity Aliases and Filters</font></b>

Report templates fully support the same entity aliasing model as dashboards. Additionally, new entity filters have been introduced:
- **Originator entity**
- **Owner of the originator**
- **Entity from master report context** (for subreporting scenarios)

**Variables & Dynamic Content**

Report components expose all their fetched data as **variables**, which can be used directly in component elements such as:
- **Text blocks**
- **Headings**
- **Tables**
- **Images**

To insert a variable, start typing $ within the editor, and a dropdown with available options will appear, offering autocompletion for dynamic insertion. (screenshot)

{% include images-gallery.html imageCollection="report-builder" %}

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

## Import report template

If you already have a template, you can easily import it from a `.json` file using the "Import report template" option.

