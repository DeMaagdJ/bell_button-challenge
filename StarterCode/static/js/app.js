const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Fetch JSON data and print to console
d3.json(url).then((data) => {
    return console.log(data);
});

//Initialize selector object to select the dataset and populate dropdown object
function init() {

let selector = d3.select("#selDataset");

d3.json(url).then((data) => {
    
    let sampleNames = data.names;
    for (let i = 0; i < 10; i++){
        let name = sampleNames[i]
        selector.append("option").text(name).property("value", name)
    };

    // Set the first sample from the list
    let firstSample = sampleNames[0]
    console.log(firstSample);

    // Build the plots
    buildMetadata(firstSample);
    build_bar_charts(firstSample)
    buildBubbleChart(firstSample);
    buildGaugeChart(firstSample);
    ;

})
};

//Function to build demographic info 
function build_Demographic_info(sample) {
d3.json(url).then(((data) => {

    let metadata = data.metadata;
    let results_md = metadata.filter(sampleObj => sampleObj.id = sample);
    console.log(results_md)
    let result_md = results_md[0];

    d3.select("#sample-metadata").html("")
    Object.entries(result_md).forEach(([key, value]) => {

        d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);

    });

});

};


//Function to build the bar chart
function build_bar_charts(sample) {

    d3.json(url).then((data) => {
    

        let samples = data.samples;
        let results = samples.filter(sampleObj => sampleObj.id = sample);
        let result = results[0];
        let sample_values = result.sample_values;
        let otu_id = result.otu_ids;
        let otu_labels = result.otu_labels;
        
        console.log(otu_id, otu_labels, sample_values);
        
        let yticks = otu_id.slice(0, 10).map(name => `OTU ${name}`).reverse();
        let xticks = sample_values.slice(0, 10).reverse();
        let labels = otu_labels.slice(0, 10).reverse();
        
        var trace1 = {
            x: xticks,
            y: yticks,
            text: labels,
            type: 'bar',
            orientation: 'h'
        }

        let data1 = [trace1];

        let layout = {
            title: "The Top 10 OTU's Present",
            margin: {l: 100, r: 100, t: 100, b: 100}};

     Plotly.newPlot("bar", data1, layout);

    });
};


function optionChanged(newSample) {
    build_bar_charts(newSample) 
};

init()