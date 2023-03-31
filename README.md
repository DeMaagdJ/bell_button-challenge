# bell_button-challenge
Module 14 HW Assignment


In this assignment, an interactive dashboard was built to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

**Methods:**

Coding in Javascript (JS), and utilizing the D3 library package, several interactive graphs and visualations werecreated to describe the microbrial biome found within ten test subjects.

- A horizontal bar chart, listing the top ten OTUs are identified and at their respective  sample_values, presumably the number of colony forming units.

- A bubble cart, presenting the same data is created, showcasing how present different OTUs were identified in the test subjects.  The larger the buble, the more a specific OTU's clony forming unit was identified in the belly button.

- A demogrpahic biography is populated to show a description of the test subject, by listing  their ethnicity, gender, location, belly button type, and washing frequency.

- The dashboard was created by calling for `function init()`.  Then using `d3.select()` to select and assign data to the `<select id>` element within the `index.html`

- Each visual was designed by calling `D3.json()` to retrieve the data, creating a function to build the graphs, setting the needed variables, and calling Plotly to create the chart(s).

- The resulting page provides an interactive dashboard that users can easily view and interact with the charts

![Screenshot 2023-03-30 at 10 05 35 PM](https://user-images.githubusercontent.com/119906575/229027891-3f438f52-c200-4596-94c1-f4d47f28fc9b.png)

Sources:

- https://courses.bootcampspot.com/courses/2864/assignments/46386?module_item_id=855903

- http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
