$(document).ready(function(){
  $("#v-pills-configs-tab").click(function(){
    $("#v-pills-organizationconfiguration-tab").toggle();
    $("#v-pills-generalconfiguration-tab").toggle();

  });
  
  $("#v-pills-configs-tab").click(function(){
    $("#v-pills-organizationdetails-tab").hide();
    $("#v-pills-stations-tab").hide();
    $("#v-pills-departments-tab").hide();
    $("#v-pills-happyhour-tab").hide();
    $("#v-pills-setattributes-tab").hide();
    $("#v-pills-itemcategories-tab").hide();
    $("#v-pills-setbrands-tab").hide();
    $("#v-pills-setcolors-tab").hide();
    $("#v-pills-setunits-tab").hide();
    $("#v-pills-taxtypes-tab").hide();
    $("#v-pills-fiscalyears-tab").hide();
    $("#v-pills-tablecounters-tab").hide();
    $("#v-pills-setstores-tab").hide();

  });


  $("#v-pills-organizationconfiguration-tab").click(function(){
    $("#v-pills-organizationdetails-tab").toggle();
    $("#v-pills-stations-tab").toggle();
    $("#v-pills-departments-tab").toggle();

  });

  $("#v-pills-generalconfiguration-tab").click(function(){
    $("#v-pills-happyhour-tab").toggle();
    $("#v-pills-setattributes-tab").toggle();
    $("#v-pills-itemcategories-tab").toggle();
    $("#v-pills-setbrands-tab").toggle();
    $("#v-pills-setcolors-tab").toggle();
    $("#v-pills-setunits-tab").toggle();
    $("#v-pills-taxtypes-tab").toggle();
    $("#v-pills-fiscalyears-tab").toggle();
    $("#v-pills-tablecounters-tab").toggle();
    $("#v-pills-setstores-tab").toggle(); 




  });



    $("#v-pills-products-tab").click(function(){
      $("#v-pills-register-tab").toggle();
      $("#v-pills-import-tab").toggle();
      $("#v-pills-serial-tab").toggle();

      $("#v-pills-item-tab").toggle();

      $("#v-pills-map-tab").toggle();

      $("#v-pills-stock-tab").toggle();

      $("#v-pills-reconcile-tab").toggle();

      $("#v-pills-move-tab").toggle();

      $("#v-pills-requisition-tab").toggle();

      $("#v-pills-approve-tab").toggle();

      $("#v-pills-recipe-tab").toggle();

      $("#v-pills-wastes-tab").toggle();


    });
  });

  
  
 
  
 
