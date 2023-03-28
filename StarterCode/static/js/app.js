const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Fetch anf GET URL
d3.json(url).then((data) => {
    return console.log(data);
});

//Initial selector object to select the dataset
function init() {

let selector = d3.select("#selDataset");

d3.json(url).then((data) => {
    
    let sampleNames = data.names;
    for (let i = 0; i < sampleNames.length; i++){
        let name = sampleNames[i]
        selector.append("option").text(name).property("value", name)
    };

    let firstSample = sampleNames[0]
    buildCharts(firstSample);
});



function buildCharts(sample) {

    d3.json(url).then((data) => {
    

        let samples = data.samples;
        let results = samples.filter(sampleObj => sampleObj.id = sample);
        let result = results[0];
        let sample_values = result.sample_values;
        let otu_id = result.out_ids;
        let otu_labels = result.otu_labels;
        let trace1 = {
            x: otu_id,
            y: sample_values,
            text: otu_labels,
            oreintation: "h"
        }
    });

        let data = [trace1];

        let layout = {
            title: "Data Test"};


    
      
      Plotly.newPlot("bar", data, layout);

};



init()};