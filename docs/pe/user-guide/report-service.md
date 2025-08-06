---
layout: docwithnav-pe
assignees:
- stitenko
title: Report service

create-new-report-template:
    0:
        image: /images/user-guide/reporting/create-new-report-template-1-pe.png
        title: 'Go to the "<b>Reporting</b>" page from the left-hand menu — you&#39;ll land on the "<b>Templates</b>" tab by default. Click the "<b>+ Add report template</b>" button in the top-right corner. Choose "<b>Create new report template</b>".'
    1:
        image: /images/user-guide/reporting/create-new-report-template-2-pe.png
        title: 'Fill out the following fields: Enter a descriptive name for your template; Choose the desired output format: PDF or CSV: For structured, table-based reports ideal for spreadsheets and data processing; Select type: Reportor or Subreport; Then, click "Add" to proceed.<br>Once added, the report constructor interface will open automatically.'

report-builder:
    0:
        image: /images/user-guide/reporting/report-builder-1-pe.png
        title: 'Here&#39;s how the report builder looks.'

report-example:
    0:
        image: /images/user-guide/reporting/report-1-pe.png
        title: 'Report template.'
    1:
        image: /images/user-guide/reporting/report-2-pe.png
        title: 'Generated report.'

variables-and-dynamic-content-1:
    0:
        image: /images/user-guide/reporting/variables-and-dynamic-content-1-pe.png
        title: ''
    1:
        image: /images/user-guide/reporting/variables-and-dynamic-content-2-pe.png
        title: ''
    2:
        image: /images/user-guide/reporting/variables-and-dynamic-content-3-pe.png
        title: ''
    3:
        image: /images/user-guide/reporting/variables-and-dynamic-content-4-pe.png
        title: ''

variables-and-dynamic-content-2:
    0:
        image: /images/user-guide/reporting/variables-and-dynamic-content-5-pe.png
        title: ''
    1:
        image: /images/user-guide/reporting/variables-and-dynamic-content-6-pe.png
        title: ''

report-builder-example:
    0:
        image: /images/user-guide/reporting/report-builder-1-pe.png
        title: 'Here&#39;s how the report builder looks.'
    1:
        image: /images/user-guide/reporting/report-builder-2-pe.png
        title: 'Simply drag the first component, &#39;Heading&#39;, into the Header area to get started.'
    2:
        image: /images/user-guide/reporting/report-builder-3-pe.png
        title: 'Add a title, customize the style to fit your report&#39;s look and feel, and don’t forget to save your changes.'
    3:
        image: /images/user-guide/reporting/report-builder-4-pe.png
        title: 'Now, drag and drop the second component, &#39;Text&#39;, to the section where you want it to appear in your report.'
    4:
        image: /images/user-guide/reporting/report-builder-5-pe.png
        title: 'Add your text, adjust the styling as needed, and don’t forget to save your changes.'
    5:
        image: /images/user-guide/reporting/report-builder-6-pe.png
        title: 'Drag the report component you need into the section of the report where you&#39;d like it to appear.'
    6:
        image: /images/user-guide/reporting/report-builder-7-pe.png
        title: 'Select the alarm source, apply the necessary filters, and be sure to save the changes.'
    7:
        image: /images/user-guide/reporting/report-builder-8-pe.png
        title: 'Drag the component into the report section where you want it to show up.'
    8:
        image: /images/user-guide/reporting/report-builder-9-pe.png
        title: 'Specify the dashboard to be displayed in the report. If needed, you can also set a particular state and select a specific data source. Make sure to save your changes.'
    9:
        image: /images/user-guide/reporting/report-builder-10-pe.png
        title: 'Drag the component you need into the section of the report where you&#39;d like it to appear.'
    10:
        image: /images/user-guide/reporting/report-builder-11-pe.png
        title: 'Replace the logo with your company&#39;s logo and provide an up-to-date address or any other relevant information. Apply all necessary filters and don&#39;t forget to save your changes.'
    11:
        image: /images/user-guide/reporting/report-builder-12-pe.png
        title: 'When you&#39;re done, don&#39;t forget to click Save to apply your changes.<br>Optionally, try generating a test report to make sure everything looks just right.'
      
create-schedule-report:
    0:
        image: /images/user-guide/reporting/schedule-report-1-pe.png
        title: 'Go to the "Scheduling" page and click the "+ Scheduled report" button in the top-right corner.'
    1:
        image: /images/user-guide/reporting/schedule-report-2-pe.png
        title: 'In the scheduling dialog: Name – Specify the schedule name; General configuration: Event type - always "Generate Report". Report template – Select a predefined template to use; User** – Select the user whose credentials will be used for report generation; Time zone** – Choose the time zone for schedule execution; Recipients.'
    2:
        image: /images/user-guide/reporting/schedule-report-3-pe.png
        title: ''
    3:
        image: /images/user-guide/reporting/schedule-report-4-pe.png
        title: ''

reports:
    0:
        image: /images/user-guide/reporting/reports-1-pe.png
        title: ''

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/report-service.md %}