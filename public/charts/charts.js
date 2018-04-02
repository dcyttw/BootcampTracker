
  // Load the AJAX API in our index file

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      google.charts.load('current', {'packages':['bar']});

      //make chart ajax request
      var bootcampName = "";
      var chartData = null;
      
      var chartDataRequest = function (){
      //create standard ajax post request to the server 
      $.post({
        url: "/api/chartData",
        data: {
          action: "formData",
          bootcampName: bootcampName
        },
        dataType: "json",
        success: function(responseData, textStatus, xhr){
          console.log("Success was called: " + JSON.stringify(responseData.data));
          chartData = responseData.data;

          // Set a callback to run when the Google Visualization API is loaded.
          google.charts.setOnLoadCallback(drawChart);
        },
        error:function(xhr, textStatus, errorThrown){
          console.log("Error was called: " + errorThrown);
        }
      });
    };

    chartDataRequest();

     //reloads chart data on submission 
   $('#thank-you-modal').on('shown.bs.modal', function(event){
    chartDataRequest();      
   });

   //sets bootcamp Name value on form submission
   $('[name="bootcampName"]').change(function(){
     bootcampName = $(this).val();
     console.log(bootcampName);
   });

      

   



      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

     //code to get latest data that's been added to the database

      function drawChart() {

        // ======= AGGREGATED OVERALL EXPERIENCE RATING CHART =========//

        // Create the data table.
        var aggregatedExperienceData = new google.visualization.DataTable();
        aggregatedExperienceData.addColumn('string', 'Graduates Overall Experience');
        aggregatedExperienceData.addColumn('number', 'Overall Rating ');
        aggregatedExperienceData.addRows([
          ['1 Lowest', 3],
          ['2', 1],
          ['3', 3],
          ['4', 3],
          ['5 Highest', 20],
  
        ]);

        // Set chart options
        var aggregatedExperienceOptions = {
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#F44336'},
            1: {color: '#FFEB3B'},
            2: {color: '#9C27B0'},
            3: {color: '#3F51B5'},
            4: {color: '#4CAF50'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var aggregatedExperienceChart= new google.visualization.PieChart(document.getElementById('aggregatedExperienceChart'));
        aggregatedExperienceChart.draw(aggregatedExperienceData, aggregatedExperienceOptions);


        // ==========AGGREGATED OVERALL JOB POSITION CHART ==========//

        // Create the data table.
        var aggregatedPositionData = new google.visualization.DataTable();
        aggregatedPositionData.addColumn('string');
        aggregatedPositionData.addColumn('number', 'Total');
        aggregatedPositionData.addRows([
          ['Application Engineer', 1],
          ['Back End Developer', 5],
          ['Front End Developer', 3],
          ['Graduate', 12],
          ['Project Manager', 2],
          ['Software Engineer', 3],
          ['Web Developer', 5],
        ]);

        // Set chart options
        var aggregatedPositionOptions = {
          chartArea: {
            width: '100%',
            height: '100%',
          },
          backgroundColor: 'transparent',
          legend: { position: "none" },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        }


        // Instantiate and draw our chart, passing in some options.
        var aggregatedPositionChart= new google.charts.Bar(document.getElementById('aggregatedPositionChart'));
        aggregatedPositionChart.draw(aggregatedPositionData, aggregatedPositionOptions);


        // ========== AGGREGATED JOB FOUND CHART ==================//


         // Create the data table.
         var aggregatedJobData = new google.visualization.DataTable();
         aggregatedJobData.addColumn('string', 'Job Found');
         aggregatedJobData.addColumn('number', 'Answer');
         aggregatedJobData.addRows([
           ['Yes', 18],
           ['No', 10],
           
         ]);

         // Set chart options
        var aggregatedJobOptions = {
          pieHole: 0.4,
          backgroundColor: 'transparent',
          chartArea: {
            width: '100%',
            height: '100%',
          },
          slices: {  
            0: {color: '#1de099'},
            1: {color: '#1dc8cd'}
            }
        };

         // Instantiate and draw our chart, passing in some options.
         var aggregatedJobChart= new google.visualization.PieChart(document.getElementById('aggregatedJobChart'));
         aggregatedJobChart.draw(aggregatedJobData, aggregatedJobOptions);

        // ========== AGGREGATED SALARY RANGE CHART ==================//

          // Create the data table.
          var aggregatedSalaryData = google.visualization.arrayToDataTable([
            ["Salary", "Total", { role: "style" } ],
            ["$40,000 to $50,000", 8, "#7E57C2"],
            ["$50,000 to $60,000", 11, "#5C6BC0"],
            ["$60,000 to $70,000", 4, "#42A5F5"],
            ["$70,000 to $80,000", 4, "#29B6F6"],
            ["$80000+", 1, "color: #26C6DA"]
          ]);
  

        // Set chart options
        var aggregatedSalaryOptions = {
          chartArea: {
            left: 0,
            width: '100%',
          },
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          axes: {
            x: {
              0: { side: 'top', label: 'White to move'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };


        // Instantiate and draw our chart, passing in some options.
        var aggregatedSalaryChart = new google.visualization.ColumnChart(document.getElementById('aggregatedSalaryChart'));
        aggregatedSalaryChart.draw(aggregatedSalaryData, aggregatedSalaryOptions);


         // ========== ACTUALIZE JOB FOUND CHART ==================//
         // Create the data table.
         var actualizeJobData = new google.visualization.DataTable();
         actualizeJobData.addColumn('string', 'Job Found');
         actualizeJobData.addColumn('number', 'Answer');
         actualizeJobData.addRows([
           ['Yes', 4],
           ['No', 1],
           
         ]);

         // Set chart options
        var actualizeJobOptions = {
          pieHole: 0.4,
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%',
          },
          slices: {  
            0: {color: '#F4AD28'},
            1: {color: '#407cd6'}
            }
        };

         // Instantiate and draw our chart, passing in some options.
         var actualizeJobChart = new google.visualization.PieChart(document.getElementById('actualizeJobChart'));
         actualizeJobChart.draw(actualizeJobData, actualizeJobOptions);



        // ========== ACTUALIZE JOB POSITION CHART ==================//

        // Create the data table.
        var actualizePositionData = new google.visualization.DataTable();
        actualizePositionData.addColumn('string', 'Job Position');
        actualizePositionData.addColumn('number', 'Total');
        actualizePositionData.addRows([
          ['Application Engineer', 0],
          ['Back End Developer', 0],
          ['Front End Developer', 0],
          ['Graduate', 1],
          ['Project Manager', 0],
          ['Software Engineer', 1],
          ['Web Developer', 3],
        ]);

        // Set chart options
        var actualizePositionOptions = {
          pieHole: 0.4,
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#d09944'},
            1: {color: '#f1b43e'},
            2: {color: '#1a60f2'},
            3: {color: '#367f83'},
            4: {color: '#f3c043'},
            5: {color: '#5ccdda'},
            6: {color: '#e78c57'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var actualizePositionChart = new google.visualization.PieChart(document.getElementById('actualizePositionChart'));
        actualizePositionChart.draw(actualizePositionData, actualizePositionOptions);


        // ========== ACTUALIZE SALARY CHART ==================//

        // Create the data table.
        var actualizeSalaryData = new google.visualization.DataTable();
        actualizeSalaryData.addColumn('string', 'Salary');
        actualizeSalaryData.addColumn('number', 'Total');
        actualizeSalaryData.addRows([
          ["$40,000 to $50,000", 1],
          ["$50,000 to $60,000", 0],
          ["$60,000 to $70,000", 3],
          ["$70,000 to $80,000", 0],
          ["$80000+", 1]
        ]);

        // Set chart options
        var actualizeSalaryOptions = {
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#d09944'},
            1: {color: '#f1b43e'},
            2: {color: '#1a60f2'},
            3: {color: '#367f83'},
            4: {color: '#f3c043'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var actualizeSalaryChart = new google.visualization.PieChart(document.getElementById('actualizeSalaryChart'));
        actualizeSalaryChart.draw(actualizeSalaryData, actualizeSalaryOptions);


     // ========== CODING DOJO CHARTS ==================//


         // ========== CODING DOJO JOB FOUND CHART ==================//
         // Create the data table.
         var codingdojoJobData = new google.visualization.DataTable();
         codingdojoJobData.addColumn('string', 'Job Found');
         codingdojoJobData.addColumn('number', 'Answer');
         codingdojoJobData.addRows([
           ['Yes', 2],
           ['No', 3],
           
         ]);

         // Set chart options
        var codingdojoJobOptions = {
          pieHole: 0.4,
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%',
          },
          slices: {  
            0: {color: '#42A5F5'},
            1: {color: '#00796B'}
            }
        };

         // Instantiate and draw our chart, passing in some options.
         var codingdojoJobChart = new google.visualization.PieChart(document.getElementById('codingdojoJobChart'));
         codingdojoJobChart.draw(codingdojoJobData, codingdojoJobOptions);


        // ========== CODING DOJO JOB POSITION CHART ==================//

        // Create the data table.
        var codingdojoPositionData = new google.visualization.DataTable();
        codingdojoPositionData.addColumn('string', 'Job Position');
        codingdojoPositionData.addColumn('number', 'Total');
        codingdojoPositionData.addRows([
          ['Application Engineer', 0],
          ['Back End Developer', 0],
          ['Front End Developer', 0],
          ['Graduate', 1],
          ['Project Manager', 0],
          ['Software Engineer', 1],
          ['Web Developer', 3],
        ]);

        // Set chart options
        var codingdojoPositionOptions = {
          pieHole: 0.4,
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#3949AB'},
            1: {color: '#1E88E5'},
            2: {color: '#039BE5'},
            3: {color: '#00ACC1'},
            4: {color: '#00897B'},
            5: {color: '#80DEEA'},
            6: {color: '#00897B'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var codingdojoPositionChart = new google.visualization.PieChart(document.getElementById('codingdojoPositionChart'));
        codingdojoPositionChart.draw(codingdojoPositionData, codingdojoPositionOptions);


        // ========== CODING DOJO SALARY CHART ==================//

        // Create the data table.
        var codingdojoSalaryData = new google.visualization.DataTable();
        codingdojoSalaryData.addColumn('string', 'Salary');
        codingdojoSalaryData.addColumn('number', 'Total');
        codingdojoSalaryData.addRows([
          ["$40,000 to $50,000", 1],
          ["$50,000 to $60,000", 0],
          ["$60,000 to $70,000", 3],
          ["$70,000 to $80,000", 0],
          ["$80000+", 1]
        ]);

        // Set chart options
        var codingdojoSalaryOptions = {
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#80DEEA'},
            1: {color: '#43A047'},
            2: {color: '#00897B'},
            3: {color: '#00ACC1'},
            4: {color: '#039BE5'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var codingdojoSalaryChart = new google.visualization.PieChart(document.getElementById('codingdojoSalaryChart'));
        codingdojoSalaryChart.draw(codingdojoSalaryData, codingdojoSalaryOptions);

     // ========== CODING TEMPLE CHARTS ==================//

         // ========== CODING TEMPLE JOB FOUND CHART ==================//
         // Create the data table.
         var codingtempleJobData = new google.visualization.DataTable();
         codingtempleJobData.addColumn('string', 'Job Found');
         codingtempleJobData.addColumn('number', 'Answer');
         codingtempleJobData.addRows([
           ['Yes', 4],
           ['No', 1],
           
         ]);

         // Set chart options
        var codingtempleJobOptions = {
          pieHole: 0.4,
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%',
          },
          slices: {  
            0: {color: '#42A5F5'},
            1: {color: 'black'}
            }
        };

         // Instantiate and draw our chart, passing in some options.
         var codingtempleJobChart = new google.visualization.PieChart(document.getElementById('codingtempleJobChart'));
         codingtempleJobChart.draw(codingtempleJobData, codingtempleJobOptions);


        // ========== CODING TEMPLE JOB POSITION CHART ================//

        // Create the data table.
        var codingtemplePositionData = new google.visualization.DataTable();
        codingtemplePositionData.addColumn('string', 'Job Position');
        codingtemplePositionData.addColumn('number', 'Total');
        codingtemplePositionData.addRows([
          ['Application Engineer', 1],
          ['Back End Developer', 1],
          ['Front End Developer', 0],
          ['Graduate', 1],
          ['Project Manager', 0],
          ['Software Engineer', 1],
          ['Web Developer', 1],
        ]);

        // Set chart options
        var codingtemplePositionOptions = {
          pieHole: 0.4,
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#29B6F6'},
            1: {color: '#81D4FA'},
            2: {color: '#4DD0E1'},
            3: {color: '#00ACC1'},
            4: {color: '#80CBC4'},
            5: {color: 'gray'},
            6: {color: 'black'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var codingtemplePositionChart = new google.visualization.PieChart(document.getElementById('codingtemplePositionChart'));
        codingtemplePositionChart.draw(codingtemplePositionData, codingtemplePositionOptions);


        // ========== CODING DOJO SALARY CHART ==================//

        // Create the data table.
        var codingtempleSalaryData = new google.visualization.DataTable();
        codingtempleSalaryData.addColumn('string', 'Salary');
        codingtempleSalaryData.addColumn('number', 'Total');
        codingtempleSalaryData.addRows([
          ["$40,000 to $50,000", 0],
          ["$50,000 to $60,000", 1],
          ["$60,000 to $70,000", 2],
          ["$70,000 to $80,000", 2],
          ["$80000+", 0]
        ]);

        // Set chart options
        var codingtempleSalaryOptions = {
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: 'gray'},
            1: {color: 'black'},
            2: {color: '#80CBC4'},
            3: {color: '#4DD0E1'},
            4: {color: '#29B6F6'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var codingtempleSalaryChart = new google.visualization.PieChart(document.getElementById('codingtempleSalaryChart'));
        codingtempleSalaryChart.draw(codingtempleSalaryData, codingtempleSalaryOptions);



      // ========== FULLSTACK ACADEMY CHARTS ==================//


         // ========== FULLSTACK ACADEMY JOB FOUND CHART ==============//
         // Create the data table.
         var fullstackJobData = new google.visualization.DataTable();
         fullstackJobData.addColumn('string', 'Job Found');
         fullstackJobData.addColumn('number', 'Answer');
         fullstackJobData.addRows([
           ['Yes', 5],
           ['No', 0],
           
         ]);

         // Set chart options
        var fullstackJobOptions = {
          pieHole: 0.4,
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%',
          },
          slices: {  
            0: {color: '#da4743'},
            1: {color: 'black'}
            }
        };

         // Instantiate and draw our chart, passing in some options.
         var fullstackJobChart = new google.visualization.PieChart(document.getElementById('fullstackJobChart'));
         fullstackJobChart.draw(fullstackJobData, fullstackJobOptions);


        // ========== FULLSTACK ACADEMY JOB POSITION CHART =============//

        // Create the data table.
        var fullstackPositionData = new google.visualization.DataTable();
        fullstackPositionData.addColumn('string', 'Job Position');
        fullstackPositionData.addColumn('number', 'Total');
        fullstackPositionData.addRows([
          ['Application Engineer', 0],
          ['Back End Developer', 0],
          ['Front End Developer', 2],
          ['Graduate', 0],
          ['Project Manager', 0],
          ['Software Engineer', 2],
          ['Web Developer', 1],
        ]);

        // Set chart options
        var fullstackPositionOptions = {
          pieHole: 0.4,
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#BDBDBD'},
            1: {color: '#F44336'},
            2: {color: '#757575'},
            3: {color: '#D32F2F'},
            4: {color: '#212121'},
            5: {color: '#B71C1C'},
            6: {color: 'black'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var fullstackPositionChart = new google.visualization.PieChart(document.getElementById('fullstackPositionChart'));
        fullstackPositionChart.draw(fullstackPositionData, fullstackPositionOptions);


        // ========== FULLSTACK ACADEMY SALARY CHART ==================//

        // Create the data table.
        var fullstackSalaryData = new google.visualization.DataTable();
        fullstackSalaryData.addColumn('string', 'Salary');
        fullstackSalaryData.addColumn('number', 'Total');
        fullstackSalaryData.addRows([
          ["$40,000 to $50,000", 0],
          ["$50,000 to $60,000", 0],
          ["$60,000 to $70,000", 1],
          ["$70,000 to $80,000", 2],
          ["$80000+", 2]
        ]);

        // Set chart options
        var fullstackSalaryOptions = {
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#212121'},
            1: {color: '#D32F2F'},
            2: {color: '#757575'},
            3: {color: '#F44336'},
            4: {color: '#BDBDBD'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var fullstackSalaryChart = new google.visualization.PieChart(document.getElementById('fullstackSalaryChart'));
        fullstackSalaryChart.draw(fullstackSalaryData, fullstackSalaryOptions);


      // ========== GENERAL ASSEMBLY CHARTS ==================//

         // ========== GENERAL ASSEMBLY JOB FOUND CHART ==============//
         // Create the data table.
         var gaJobData = new google.visualization.DataTable();
         gaJobData.addColumn('string', 'Job Found');
         gaJobData.addColumn('number', 'Answer');
         gaJobData.addRows([
           ['Yes', 3],
           ['No', 2],
           
         ]);

         // Set chart options
        var gaJobOptions = {
          pieHole: 0.4,
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%',
          },
          slices: {  
            0: {color: 'black'},
            1: {color: '#BDBDBD'}
            }
        };

         // Instantiate and draw our chart, passing in some options.
         var gaJobChart = new google.visualization.PieChart(document.getElementById('gaJobChart'));
         gaJobChart.draw(gaJobData, gaJobOptions);


        // ========== GENERAL ASSEMBLY JOB POSITION CHART =============//

        // Create the data table.
        var gaPositionData = new google.visualization.DataTable();
        gaPositionData.addColumn('string', 'Job Position');
        gaPositionData.addColumn('number', 'Total');
        gaPositionData.addRows([
          ['Application Engineer', 0],
          ['Back End Developer', 0],
          ['Front End Developer', 2],
          ['Graduate', 2],
          ['Project Manager', 0],
          ['Software Engineer', 1],
          ['Web Developer', 0],
        ]);

        // Set chart options
        var gaPositionOptions = {
          pieHole: 0.4,
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: 'black'},
            1: {color: '#B71C1C'},
            2: {color: '#212121'},
            3: {color: '#FFEA00'},
            4: {color: '#BDBDBD'},
            5: {color: '#F9A825'},
            6: {color: '#D32F2F'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var gaPositionChart = new google.visualization.PieChart(document.getElementById('gaPositionChart'));
        gaPositionChart.draw(gaPositionData, gaPositionOptions);


        // ========== GENERAL ASSEMBLY SALARY CHART ==================//

        // Create the data table.
        var gaSalaryData = new google.visualization.DataTable();
        gaSalaryData.addColumn('string', 'Salary');
        gaSalaryData.addColumn('number', 'Total');
        gaSalaryData.addRows([
          ["$40,000 to $50,000", 0],
          ["$50,000 to $60,000", 0],
          ["$60,000 to $70,000", 1],
          ["$70,000 to $80,000", 2],
          ["$80000+", 2]
        ]);

        // Set chart options
        var gaSalaryOptions = {
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#D32F2F'},
            1: {color: '#F9A825'},
            2: {color: '#B71C1C'},
            3: {color: 'gray'},
            4: {color: 'black'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var gaSalaryChart = new google.visualization.PieChart(document.getElementById('gaSalaryChart'));
        gaSalaryChart.draw(gaSalaryData, gaSalaryOptions);



      // ========== NORTHWESTERN CHART ==================//

         // ========== NORTHWESTERN JOB FOUND CHART ==============//

         console.log(chartData)
         // Create the data table.
         var northwesternJobData = new google.visualization.DataTable();
         northwesternJobData.addColumn('string', 'Job Found');
         northwesternJobData.addColumn('number', 'Answer');
         northwesternJobData.addRows(chartData.jobFound);

         // Set chart options
        var northwesternJobOptions = {
          pieHole: 0.4,
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%',
          },
          slices: {  
            0: {color: '#7E57C2'},
            1: {color: '#311B92'}
            }
        };

         // Instantiate and draw our chart, passing in some options.
         var northwesternJobChart = new google.visualization.PieChart(document.getElementById('northwesternJobChart'));
         northwesternJobChart.draw(northwesternJobData, northwesternJobOptions);


        // ========== NORTHWESTERN JOB POSITION CHART =============//

        // Create the data table.
        var northwesternPositionData = new google.visualization.DataTable();
        northwesternPositionData.addColumn('string', 'Job Position');
        northwesternPositionData.addColumn('number', 'Total');
        northwesternPositionData.addRows([
          ['Application Engineer', 0],
          ['Back End Developer', 0],
          ['Front End Developer', 0],
          ['Graduate', 5],
          ['Project Manager', 0],
          ['Software Engineer', 0],
          ['Web Developer', 0],
        ]);

        // Set chart options
        var northwesternPositionOptions = {
          pieHole: 0.4,
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#311B92'},
            1: {color: '#4527A0'},
            2: {color: '#512DA8'},
            3: {color: '#5E35B1'},
            4: {color: '#673AB7'},
            5: {color: '#7E57C2'},
            6: {color: '#9575CD'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var northwesternPositionChart = new google.visualization.PieChart(document.getElementById('northwesternPositionChart'));
        northwesternPositionChart.draw(northwesternPositionData, northwesternPositionOptions);


        // ========== NORTHWESTERN SALARY CHART ==================//

        // Create the data table.
        var northwesternSalaryData = new google.visualization.DataTable();
        northwesternSalaryData.addColumn('string', 'Salary');
        northwesternSalaryData.addColumn('number', 'Total');
        northwesternSalaryData.addRows([
          ["$40,000 to $50,000", 3],
          ["$50,000 to $60,000", 2],
          ["$60,000 to $70,000", 0],
          ["$70,000 to $80,000", 0],
          ["$80000+", 0]
        ]);

        // Set chart options
        var northwesternSalaryOptions = {
          legend: { position: 'none' },
          chartArea: {
            width: '100%',
            height: '100%'
          },
          backgroundColor: 'transparent',
          slices: {  
            0: {color: '#6200EA'},
            1: {color: '#E0E0E0'},
            2: {color: '#7C4DFF'},
            3: {color: '#EEEEEE'},
            4: {color: '#311B92'},
            },
        };


        // Instantiate and draw our chart, passing in some options.
        var northwesternSalaryChart = new google.visualization.PieChart(document.getElementById('northwesternSalaryChart'));
        northwesternSalaryChart.draw(northwesternSalaryData, northwesternSalaryOptions);


  
    

      }; // END OF ALL CHARTS


  