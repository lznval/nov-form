function liveRange() {
    var $rangeLive = $("#range__input_live");
    var $inputFrom = $("#input_from_live");
    var $inputTo = $("#input_to_live");
    var instance;
    var min = 50;
    var max = 432;
    var from = 50;
    var to = 432;

    $rangeLive.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        skin: "round",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $rangeLive.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}

function kitchenRange() {
    var $rangeLive = $("#range__input_kitchen");
    var $inputFrom = $("#input_from_kitchen");
    var $inputTo = $("#input_to_kitchen");
    var instance;
    var min = 50;
    var max = 432;
    var from = 50;
    var to = 432;

    $rangeLive.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        skin: "round",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $rangeLive.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}

function floorRange() {
    var $rangeLive = $("#range__input_floor");
    var $inputFrom = $("#input_from_floor");
    var $inputTo = $("#input_to_floor");
    var instance;
    var min = 1;
    var max = 24;
    var from = 1;
    var to = 24;

    $rangeLive.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        skin: "round",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $rangeLive.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}

function floorHouseRange() {
    var $rangeLive = $("#range__input_floor-house");
    var $inputFrom = $("#input_from_floor-house");
    var $inputTo = $("#input_to_floor-house");
    var instance;
    var min = 1;
    var max = 24;
    var from = 1;
    var to = 24;

    $rangeLive.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        skin: "round",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $rangeLive.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}

function regionRange() {
    var $rangeLive = $("#range__input_region");
    var $inputFrom = $("#input_from_region");
    var $inputTo = $("#input_to_region");
    var instance;
    var min = 10;
    var max = 20;
    var from = 10;
    var to = 20;

    $rangeLive.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        skin: "round",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $rangeLive.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}

function areaHouseRange() {
    var $rangeLive = $("#range__input_area_house");
    var $inputFrom = $("#input_from_area_house");
    var $inputTo = $("#input_to_area_house");
    var instance;
    var min = 50;
    var max = 432;
    var from = 50;
    var to = 432;

    $rangeLive.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        skin: "round",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $rangeLive.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}

function floorVillageRange() {
    var $rangeLive = $("#range__input_floor_cottage");
    var $inputFrom = $("#input_from_floor_cottage");
    var $inputTo = $("#input_to_floor_cottage");
    var instance;
    var min = 1;
    var max = 4;
    var from = 1;
    var to = 4;

    $rangeLive.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        skin: "round",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $rangeLive.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}


$(function () {
    liveRange();
    kitchenRange();
    floorRange();
    floorHouseRange();
    regionRange();
    areaHouseRange();
    floorVillageRange();
})