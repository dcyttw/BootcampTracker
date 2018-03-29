
  // Load the AJAX API in our index file

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // ========== OVERALL EXPERIENCE RATING CHART ==================//

        // Create the data table.
        var data1 = new google.visualization.DataTable();
        data1.addColumn('string', 'Graduates Overall Experience');
        data1.addColumn('number', 'Overall Rating ');
        data1.addRows([
          ['1', 3],
          ['2', 1],
          ['3', 1],
          ['4', 1],
          ['5', 2],
  
        ]);

        // Set chart options
        var options1 = {
        'width':400,
        'height':300};


        // Instantiate and draw our chart, passing in some options.
        var chart1= new google.visualization.PieChart(document.getElementById('experienceChart'));
        chart1.draw(data1, options1);


        // ==========OVERALL JOB POSITION CHART ==================//

        // Create the data table.
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Job Type');
        data2.addColumn('number', 'Total Number');
        data2.addRows([
          ['Software Engineer', 3],
          ['Web Developer', 1],
          ['Application Engineer', 1],
          ['Front End Developer', 1],
          ['Back End Developer', 2],
          ['Project Manager', 2],
          ['Graduate', 2]
          
          
        ]);

        // Set chart options
        var options2 = {'title':'Chicago Bootcamp Graduates Employment Positions',
        'width':400,
        'height':300};


        // Instantiate and draw our chart, passing in some options.
        var chart2= new google.visualization.PieChart(document.getElementById('jobPositionChart'));
        chart2.draw(data2, options2);


        // ==========OVERALL JOB FOUND CHART ==================//


         // Create the data table.
         var data3 = new google.visualization.DataTable();
         data3.addColumn('string', 'Job Found');
         data3.addColumn('string', 'Answer');
         data3.addRows([
           ['Yes', 3],
           ['No', 1],
           
         ]);

         // Set chart options
        var options3 = {'title':'Job Found',
        'width':400,
        'height':300};

         // Instantiate and draw our chart, passing in some options.
         var chart3= new google.visualization.PieChart(document.getElementById('jobFoundChart'));
         chart3.draw(data3, options3);

        // ========== OVERALL SALARY RANGE CHART ==================//

          // Create the data table.
          var data4 = new google.visualization.DataTable();
          data4.addColumn('string', 'Salary Range');
          data4.addColumn('number', 'Current Salary');
          data4.addRows([
            ['40000-50000', 3],
            ['50000-60000', 1],
            ['60000-70000', 1],
            ['70000-80000', 1],
            ['80000+', 2],
            
          ]);
  
          // Set chart options
          var options4 = {'title':'Salary Range',
          'width':400,
          'height':300};
  
  
          // Instantiate and draw our chart, passing in some options.
          var chart4= new google.visualization.PieChart(document.getElementById('salaryChart'));
          chart4.draw(data4, options4);


        // ========== ACTUALIZE OVERALL EXPERIENCE CHART ================== // 
        // Create the data table.
        var Actualizeexperience = new google.visualization.DataTable();
        Actualizeexperience.addColumn('string', 'Graduates Overall Experience at Actualize');
        Actualizeexperience.addColumn('number', 'Overall Rating ');
        Actualizeexperience.addRows([
          ['1', 3],
          ['2', 1],
          ['3', 1],
          ['4', 1],
          ['5', 2],
  
        ]);

        // Set chart options
        var Actualizeoptions = {'title':'Actualize Graduates Overall Experience',
        'width':400,
        'height':300};


        // Instantiate and draw our chart, passing in some options.
        var ActualizeexperienceChart= new google.visualization.PieChart(document.getElementById('experienceChart'));
        ActualizeexperienceChart.draw(Actualizeexperience, Actualizeoptions);




         // ========== ACTUALIZE JOB FOUND CHART ==================//


         // Create the data table.
         var ActualizejobFound = new google.visualization.DataTable();
         ActualizejobFound.addColumn('string', 'Job Found');
         ActualizejobFound.addColumn('string', 'Answer');
         ActualizejobFound.addRows([
           ['Yes', 3],
           ['No', 1],
           
         ]);

         // Set chart options
        var ActualizejobFoundOptions = {'title':'Employment ratings post graduation',
        'width':400,
        'height':300};

         // Instantiate and draw our chart, passing in some options.
         var ActualizejobFoundChart= new google.visualization.PieChart(document.getElementById(actualizejobFound));
         ActualizejobFoundChart.draw(ActualizejobFound, ActualizejobFoundOptions);



        // ========== ACTUALIZE JOB POSITION CHART ==================//




         // Create the data table.
         var ActualizePositionData = new google.visualization.DataTable();
         ActualizePositionData.addColumn('string', 'Job Type');
         ActualizePositionData.addColumn('number', 'Total Number');
         ActualizePositionData.addRows([
           ['Software Engineer', 3],
           ['Web Developer', 1],
           ['Application Engineer', 1],
           ['Front End Developer', 1],
           ['Back End Developer', 2],
           ['Project Manager', 2],
           ['Graduate', 2]
           
           
         ]);
 
         // Set chart options
         var ActualizePositionOptions = {'title':'Chicago Bootcamp Graduates Employment Positions',
         'width':400,
         'height':300};
 
 
         // Instantiate and draw our chart, passing in some options.
         var ActualizeJobPositionChart= new google.visualization.PieChart(document.getElementById('actualize.position'));
         ActualizeJobPositionChart.draw(ActualizePositionData, ActualizePositionOptions);



        // ========== ACTUALIZE SALARY CHART ==================//


          // Create the data table.
          var ActualizeSalaryData = new google.visualization.DataTable();
          ActualizeSalaryData.addColumn('string', 'Salary Range');
          ActualizeSalaryData.addColumn('number', 'Current Salary');
          ActualizeSalaryData.addRows([
            ['40000-50000', 3],
            ['50000-60000', 1],
            ['60000-70000', 1],
            ['70000-80000', 1],
            ['80000+', 2],
            
          ]);
  
          // Set chart options
          var ActualizeSalaryChartOptions = {'title':'Salary Range',
          'width':400,
          'height':300};
  
  
          // Instantiate and draw our chart, passing in some options.
          var ActualizeSalaryChart= new google.visualization.PieChart(document.getElementById('salaryChart'));
          ActualizeSalaryChart.draw(ActualizeSalaryData, ActualizeSalaryChartOptions);


        // ========== CODING DOJO CHART ==================//


     // ========== CODING TEMPLE CHART ==================//

      // ========== FULLSTACK ACADEMY CHART ==================//

      // ========== GENERAL ASSEMBLY CHART ==================//

       // ========== NORTHWESTERN CHART ==================//



        

      }
    

  
    // Div that will hold the pie chart
    // <div id="jobPositionChart"></div>
  