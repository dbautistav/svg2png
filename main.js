"use strict";

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var vlSpec = {
                "description": "Stock prices of 5 Tech Companies Over Time.",
                "data": {"url": "./stocks.csv", "format": {"type": "csv"}},
                "mark": "line",
                "encoding": {
                    "x": {"field": "date", "type": "temporal"},
                    "y": {"field": "price", "type": "quantitative"},
                    "color": {"field": "symbol", "type": "nominal"}
                }
                , "config": {"cell": {"width": 450, "height": 350}}
            },
            embedSpec = {
                mode: "vega-lite",
                spec: vlSpec
                , actions: false    ///
            };

        vg.embed("#viz", embedSpec, function (error, result) {
            // Callback receiving the View instance and parsed Vega spec
            // result.view is the View, which resides under the '#viz' element
        });


        document
            .querySelector("#save")
            .addEventListener("click", function () {
                var htmlEL = document.querySelector("#viz canvas");

                html2canvas(htmlEL, {background: "#fff"})
                    .then(function (canvas) {
                        canvas.toBlob(function (blob) {
                            saveAs(blob, "exported.png");
                        }, "image/png");
                    });
            }, false);
    });
})();
