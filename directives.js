//   <grid-screen resource="/api/data.json">
//     <grid-columns>
//       <grid-column title="Product"     field="product"></grid-column>
//       <grid-column title="Description" field="description"></grid-column>
//       <grid-column title="Cost"        field="cost"></grid-column>
//     </grid-columns>
//     <grid with-inline-editor></grid>
//   </grid-screen>

// 3 domain objects: editor, edit, columns, rows

angular.module("app").directive("gridScreen",function($http){
    return {
        restrict : "E",
        link: function(scope, element, attributes){
            $http.get(attributes.resource).success(function(response){
                scope.rows = response.data;
                console.log('success');
            })
            console.log('grid screen');
        }
    };
});

angular.module("app").directive("gridColumns", function(){
    return {
        restrict : "E",
        link: function(){
            console.log('linked gridColumns');
        }
    }
});

angular.module("app").directive("gridColumn", function(){
    return {
        restrict : "E",
        link: function(scope, element, attributes){
            console.log('linked gridColumn: ' +  attributes.title);
        }
    }
});

angular.module("app").directive("grid", function(){
    return {
        restrict : "E",
        link: function(){
            console.log('linked  grid');
        }
    }
});

angular.module("app").directive("withInlineEditor",function (){
    return {
        restrict : "A",
        link: function(){
            console.log('linked withInlineEditor');
        }
    }
});

