$(document).ready(function(){
  $("#v-pills-configs-tab").click(function(){
    $("#v-pills-organizationconfiguration-tab").toggle();
  });
  
  $("#v-pills-configs-tab").click(function(){
    $("#v-pills-organizationdetails-tab").hide();
    $("#v-pills-stations-tab").hide();
    $("#v-pills-departments-tab").hide();
  });


  $("#v-pills-organizationconfiguration-tab").click(function(){
    $("#v-pills-organizationdetails-tab").toggle();
    $("#v-pills-stations-tab").toggle();
    $("#v-pills-departments-tab").toggle();

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

  
 
  
 
  
 