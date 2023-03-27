const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
let json_data = d3.json(url).then(function(data) {
    console.log(data);
});

let sample_val = Object.values(json_data.samples.sample_values)

console.log([sample_val])