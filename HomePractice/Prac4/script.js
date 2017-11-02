/**
 * Created by vino on 6/24/17.
 */
angular.module("myModule",[])
       .controller("myController", function($scope){
        var employee =[
            { firstName:"Vinodhini", lastName:"Asok Kumar",gender:"Female", age:23},
            {firstName:"Harish", lastName:"Sundararaj", gender:"Male",age:30},
            {firstName:"Yahavi", lastName:"Harish", gender:"Female", age:2},
            {firstName:"Jagadeesh",lastName:"Asokkumar",gender:"Male",age:20}
        ]

           var countries = [
               {
                   name:"UK",
                   cities:[
                       {name:"London"},
                       {name:"Manchester"},
                       {name:"Birmingham"}

                   ]
               },
               {
                   name:"USA",
                   cities:[
                       {name:"San Francisco"},
                       {name:"Santa Cruz"},
                       {name:"Seattle"}
                   ]
               },
               {
                   name:"India",
                   cities:[
                       {name:"Chennai"},
                       {name:"Bangalore"},
                       {name:"Delhi"}
                   ]
               }
           ];
           $scope.employee = employee;
           $scope.countries = countries;
       });
