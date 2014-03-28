$(function() {




// BREAKFAST

    //Filters
    viewModel.breakfastFilterCal = ko.observable('');
    viewModel.breakfastFilterProts = ko.observable('');
    viewModel.breakfastFilterFats = ko.observable('');
    viewModel.breakfastFilterCarbos = ko.observable('');

    //Array of breakfast products
    viewModel.breakfast = ko.observableArray([]);

    //Summary number of:

    viewModel.breakfastCalories = ko.computed(function() {
        var totalCal = 0;
        for (var i = 0; i < viewModel.breakfast().length; i++) {
          totalCal += +viewModel.breakfast()[i].calories;
        }
        return totalCal;
    });

    viewModel.breakfastFats = ko.computed(function() {
       var totalFats = 0;
        for (var i = 0; i < viewModel.breakfast().length; i++) {
            totalFats += +viewModel.breakfast()[i].fats;
        }
        return totalFats;
    });

    viewModel.breakfastProts = ko.computed(function() {
        var totalProts = 0;
        for (var i = 0; i < viewModel.breakfast().length; i++) {
            totalProts += +viewModel.breakfast()[i].proteins;
        }
        return totalProts;
    });

    viewModel.breakfastCarbos = ko.computed(function() {
        var totalCarbos = 0;
        for (var i = 0; i < viewModel.breakfast().length; i++) {
            totalCarbos += +viewModel.breakfast()[i].carbohydrate;
        }
        return totalCarbos;
    });


    //Add to breakfast
    viewModel.addToBreakfast = function(item) {


        if (
        FilterSort(viewModel.breakfastFilterCal(),viewModel.breakfastCalories() + +item.calories,viewModel.breakfastFilterCal().length > 0) &&
            FilterSort(viewModel.breakfastFilterFats(), viewModel.breakfastFats() + +item.fats, viewModel.breakfastFilterFats().length > 0) &&
            FilterSort(viewModel.breakfastFilterProts(), viewModel.breakfastProts() + +item.proteins, viewModel.breakfastFilterProts().length > 0) &&
            FilterSort(viewModel.breakfastFilterCarbos(), viewModel.breakfastCarbos() + +item.carbohydrate, viewModel.breakfastFilterCarbos().length > 0)
            ) {
            viewModel.breakfast.push(item);
        }

        else {
            $(".alert").show();
        }
    }

    viewModel.removeFromBreakfast = function(item) {
        var index = -1;
        for (var i = 0; i < viewModel.breakfast().length; i++) {
            if (viewModel.breakfast()[i].name == item.name) index = i;
        }
        viewModel.breakfast.splice(index,1);
    }

// *********
// LUNCH

    //Filters
    viewModel.lunchFilterCal = ko.observable('');
    viewModel.lunchFilterProts = ko.observable('');
    viewModel.lunchFilterFats = ko.observable('');
    viewModel.lunchFilterCarbos = ko.observable('');

    //Array of lunch products
    viewModel.lunch = ko.observableArray([]);

    //Summary number of:

    viewModel.lunchCalories = ko.computed(function() {
        var totalCal = 0;
        for (var i = 0; i < viewModel.lunch().length; i++) {
            totalCal += +viewModel.lunch()[i].calories;
        }
        return totalCal;
    });

    viewModel.lunchFats = ko.computed(function() {
        var totalFats = 0;
        for (var i = 0; i < viewModel.lunch().length; i++) {
            totalFats += +viewModel.lunch()[i].fats;
        }
        return totalFats;
    });

    viewModel.lunchProts = ko.computed(function() {
        var totalProts = 0;
        for (var i = 0; i < viewModel.lunch().length; i++) {
            totalProts += +viewModel.lunch()[i].proteins;
        }
        return totalProts;
    });

    viewModel.lunchCarbos = ko.computed(function() {
        var totalCarbos = 0;
        for (var i = 0; i < viewModel.lunch().length; i++) {
            totalCarbos += +viewModel.lunch()[i].carbohydrate;
        }
        return totalCarbos;
    });


    //Add to lunch
    viewModel.addToLunch = function(item) {


        if (
            FilterSort(viewModel.lunchFilterCal(),viewModel.lunchCalories() + +item.calories,viewModel.lunchFilterCal().length > 0) &&
                FilterSort(viewModel.lunchFilterFats(), viewModel.lunchFats() + +item.fats, viewModel.lunchFilterFats().length > 0) &&
                FilterSort(viewModel.lunchFilterProts(), viewModel.lunchProts() + +item.proteins, viewModel.lunchFilterProts().length > 0) &&
                FilterSort(viewModel.lunchFilterCarbos(), viewModel.lunchCarbos() + +item.carbohydrate, viewModel.lunchFilterCarbos().length > 0)
            ) {
            viewModel.lunch.push(item);
        }

        else {
            $(".alert").show();
        }
    }

    viewModel.removeFromLunch = function(item) {
        var index = -1;
        for (var i = 0; i < viewModel.lunch().length; i++) {
            if (viewModel.lunch()[i].name == item.name) index = i;
        }
        viewModel.lunch.splice(index,1);
    }


// ***************
// DINNER

    //Filters
    viewModel.dinnerFilterCal = ko.observable('');
    viewModel.dinnerFilterProts = ko.observable('');
    viewModel.dinnerFilterFats = ko.observable('');
    viewModel.dinnerFilterCarbos = ko.observable('');

    //Array of dinner products
    viewModel.dinner = ko.observableArray([]);

    //Summary number of:

    viewModel.dinnerCalories = ko.computed(function() {
        var totalCal = 0;
        for (var i = 0; i < viewModel.dinner().length; i++) {
            totalCal += +viewModel.dinner()[i].calories;
        }
        return totalCal;
    });

    viewModel.dinnerFats = ko.computed(function() {
        var totalFats = 0;
        for (var i = 0; i < viewModel.dinner().length; i++) {
            totalFats += +viewModel.dinner()[i].fats;
        }
        return totalFats;
    });

    viewModel.dinnerProts = ko.computed(function() {
        var totalProts = 0;
        for (var i = 0; i < viewModel.dinner().length; i++) {
            totalProts += +viewModel.dinner()[i].proteins;
        }
        return totalProts;
    });

    viewModel.dinnerCarbos = ko.computed(function() {
        var totalCarbos = 0;
        for (var i = 0; i < viewModel.dinner().length; i++) {
            totalCarbos += +viewModel.dinner()[i].carbohydrate;
        }
        return totalCarbos;
    });


    //Add to dinner
    viewModel.addToDinner = function(item) {


        if (
            FilterSort(viewModel.dinnerFilterCal(),viewModel.dinnerCalories() + +item.calories,viewModel.dinnerFilterCal().length > 0) &&
                FilterSort(viewModel.dinnerFilterFats(), viewModel.dinnerFats() + +item.fats, viewModel.dinnerFilterFats().length > 0) &&
                FilterSort(viewModel.dinnerFilterProts(), viewModel.dinnerProts() + +item.proteins, viewModel.dinnerFilterProts().length > 0) &&
                FilterSort(viewModel.dinnerFilterCarbos(), viewModel.dinnerCarbos() + +item.carbohydrate, viewModel.dinnerFilterCarbos().length > 0)
            ) {
            viewModel.dinner.push(item);
        }

        else {
            $(".alert").show();
        }
    }

    viewModel.removeFromDinner = function(item) {
        var index = -1;
        for (var i = 0; i < viewModel.dinner().length; i++) {
            if (viewModel.dinner()[i].name == item.name) index = i;
        }
        viewModel.dinner.splice(index,1);
    }



// *************
// MAIN FILTERS

    viewModel.filterName = ko.observable('');
    viewModel.filterCal = ko.observable('');
    viewModel.filterFats = ko.observable('');
    viewModel.filterProts = ko.observable('');
    viewModel.filterCarbos = ko.observable('');

    viewModel.filteredMeals = ko.computed(function() {

        var filterName = viewModel.filterName().trim(),
            filterCal = viewModel.filterCal().trim(),
            filterFats = viewModel.filterFats().trim(),
            filterProts = viewModel.filterProts().trim(),
            filterCarbos = viewModel.filterCarbos().trim();

        if (filterName.length < 1
            && filterCal.length < 1
            && filterFats.length < 1
            && filterProts.length < 1
            && filterCarbos.length < 1
            && !enabledProducts()
            ) {

            return viewModel.data();
        }

        var result = [];

        _.each(viewModel.data(), function(item){
            if (sortByName(filterName,item,filterName.length > 0) && sortByCalories(filterCal,item, filterCal.length > 0) &&
                sortByFats(filterFats,item,filterFats.length > 0) && sortByProts(filterProts,item, filterProts.length > 0) &&
                sortByCarbos(filterCarbos,item,filterCarbos.length > 0) && sortByProducts(item)
                ) {
                result.push(item);
            }

        });

        return result;


    });

    _.each(viewModel.data(), function(item){
       item.viewProducts = ko.computed(function() {
           var string = '';
           for (var i = 0; i < item.products.length; i++) {
               if (i == item.products.length - 1){
                   string += viewModel.products()[item.products[i]].name;
               }
               else
               {
                   string += viewModel.products()[item.products[i]].name + ', ';
               }

           }
           return string;
       })
    });


    viewModel.isFull = ko.computed(function() {
        if (viewModel.breakfast().length > 0 ||
            viewModel.lunch().length > 0 ||
            viewModel.dinner().length > 0) return 1
        else return 0;
    })


    ko.applyBindings(viewModel);

// HELP FUNCTIONS

    function sortByName(filter,element,enabled) {
        if (enabled) {
            return element.name.indexOf(filter) > -1;
        }
        return 1;
    }

    function sortByCalories(filter,element,enabled) {
        if (enabled) {
            return +element.calories <= +filter;
        }
        return 1;
    }

    function sortByFats(filter,element,enabled) {
        if (enabled) {
            return +element.fats <= +filter;
        }
        return 1;
    }

    function sortByCarbos(filter,element,enabled) {
        if (enabled) {
            return +element.carbohydrate <= +filter;
        }
        return 1;
    }

    function sortByProts(filter,element,enabled) {
        if (enabled) {
            return +element.proteins <= +filter;
        }
        return 1;
    }

    function sortByProducts(element) {

        for (var i = 0; i < element.products.length; i++) {
            if (!viewModel.products()[element.products[i]].enabled())
            return false;
        }

        return true;

    }

    function enabledProducts() {

        _.each(viewModel.products(),function(item) {
            if (!item.enabled()) return false;
        });
        return true;
    }

    function FilterSort(filter,item,enabled) {
        if (enabled) {
            return +item <= +filter;
        }
        return 1;
    }


    $('.dropdown-toggle').on('click',function() {
       $('.alert').hide();
    });


    $("#warning-button").on('click', function() {
        $('.alert').hide();
    });

    $().alert().addClass('.fade .in')

});