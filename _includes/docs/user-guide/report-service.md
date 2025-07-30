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

A report template defines the structure and contents of a report, and in short, represents the list of configured components. Most of the components have their data configuration and layout configuration.

Key aspects:
- **Data configuration**: Inspired by ThingsBoard dashboard widgets. Each component supports entity aliasing and filtering, allowing dynamic data binding.
- **Layout configuration**: Controls visual arrangement, formatting, and behavior within the final document.

**Supported Entity Aliases and Filters**

Report templates fully support the same entity aliasing model as dashboards. Additionally, new entity filters have been introduced:
- **Originator entity**
- **Owner of the originator**
- **Entity from master report context** (for subreporting scenarios)

**Supported Report Components**:
- **Entity Table**: Tabular display of entity fields and latest attributes or telemetry.
- **Time series**: Time-based table of telemetry values.
- **Alarm Table**: Displays alarm data for selected entities.
- **Subreport**: Embeds another report template with contextual entity scope.
- **Dashboard**: Renders a screenshot of the selected dashboard.

**Variables & Dynamic Content**

Report components expose all their fetched data as **variables**, which can be used directly in component elements such as:
- **Text blocks**
- **Headings**
- **Tables**
- **Images**

To insert a variable, start typing $ within the editor, and a dropdown with available options will appear, offering autocompletion for dynamic insertion. (screenshot)

## Scheduling

Report scheduling is based on the existing scheduling TB feature and gives the opportunity to easily schedule a report in the next menu item.

## Reports

Each generated report instance is saved as a Report entity in PostgreSQL with a configurable TTL. All generated reports are available in the Reports menu item. The number of generated reports can be limited per tenant via tenant profile configuration.