sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("filteringpractice.controller.View1", {
        onInit: function() {

            //  Create employee data by defining JSONModel
            const oEmployeeModel = new JSONModel({
                Employees: [
 {
                        employeeId: 101,
                        employeeName: "Jaspal Barik",
                        designation: "SAPUI5 Developer",
                        department: "IT",
                        status: "Active"
                    },
                    {
                        employeeId: 102,
                        employeeName: "Sarah Sharma",
                        designation: "Software Tester",
                        department: "Quality",
                        status: "Active"
                    },
                    {
                        employeeId: 103,
                        employeeName: "Satya Das",
                        designation: "Business Analyst",
                        department: "IT",
                        status: "Inactive"
                    },
                    {
                        employeeId: 104,
                        employeeName: "Priyanka Roy",
                        designation: "HR Executive",
                        department: "HR",
                        status: "Active"
                    },
                    {
                        employeeId: 105,
                        employeeName: "Subham Patel",
                        designation: "Project Manager",
                        department: "Management",
                        status: "Active"
                    },
                    {
                        employeeId: 106,
                        employeeName: "Rahul Mishra",
                        designation: "SAP Developer",
                        department: "IT",
                        status: "Active"
                    }
                ]
            });

            // Set the employee model with the name "employee"
            this.getView().setModel(oEmployeeModel, "employee");
        },

        // Function for Search and filter employees
        onSearchEmployee: function(oEvent) {

        // Create an empty filter array
        const aFilter = [];

        // Get the search text
         const sQuery = oEvent.getParameter("query").trim();

         // Create a filter only if search text is not empty
         if(sQuery){

            const oFilter = new Filter(
                "employeeName",
                FilterOperator.Contains,
                sQuery
            );

            // Add filter to array
            aFilter.push(oFilter);

         }

        // Get the employee List
        const oList = this.byId("employeeList");

        // Get the items aggregation binding
         const oBinding = oList.getBinding("items");

         // Apply filter
         oBinding.filter(aFilter);
        

        }

    });
});