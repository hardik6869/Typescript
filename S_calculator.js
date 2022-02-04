var display = document.getElementById("display");
var s_display = document.getElementById("sub_display");
var buttons = Array.from(document.getElementsByClassName("btn"));
var btn_sci = Array.from(document.getElementsByClassName("trigino_&_Fun"));
var memory_btn = Array.from(document.getElementsByClassName("btn-top"));
var square = document.getElementById("square");
var sq_root = document.getElementById("sq_root");
var x_root_y = document.getElementById("x_root_y");
var ten_x = document.getElementById("ten_x");
var log = document.getElementById("log");
// Functions
var arr_list = [];
function memory(m_fun, data) {
    if (m_fun == "M+") {
        arr_list.push(data);
        display.value = String(data);
        s_display.value = "M+(".concat(display.value, ")");
    }
    else if (m_fun == "M-") {
        arr_list.push(eval("-" + data));
        display.value = String(data);
        s_display.value = "M-(".concat(display.value, ")");
    }
    else if (m_fun == "MS") {
        arr_list.push(data);
        display.value = String(arr_list);
        s_display.value = "MS(".concat(display.value, ")");
    }
    else if (m_fun == "MC") {
        arr_list = [];
        display.value = String(arr_list);
        s_display.value = "MC";
    }
    else {
        var add_data_1 = 0;
        arr_list.forEach(function (data) {
            add_data_1 += Number(data);
        });
        display.value = String(add_data_1);
        s_display.value = "MR(".concat(display.value, ")");
    }
}
var deg_rad = function () {
    var val = document.getElementById("deg");
    var convert = display.value;
    if (display.value !== "0" && display.value !== "") {
        if (val.innerText == "DEG") {
            s_display.value = "Deg (".concat(display.value, ")");
            val.innerText = "RAD";
            display.value = String(Number(convert) * (180 / Math.PI));
        }
        else {
            val.innerText = "DEG";
            s_display.value = "Rad (".concat(display.value, ")");
            display.value = String(Number(convert) * (Math.PI / 180));
        }
    }
};
var valid = true;
var More_features = function () {
    if (valid) {
        square.innerHTML = "x<sup>3</sup>";
        sq_root.innerHTML = "<sup>3</sup>√x";
        x_root_y.innerHTML = "2<sup>x</sup>";
        ten_x.innerHTML = "e<sup>x</sup>";
        log.innerHTML = "3<sup>x</sup>";
        valid = false;
    }
    else {
        valid = true;
        square.innerHTML = "x<sup>2</sup>";
        sq_root.innerHTML = "<sup>2</sup>√x";
        x_root_y.innerHTML = "x<sup>y</sup>";
        ten_x.innerHTML = "10<sup>x</sup>";
        log.innerHTML = "log";
    }
};
var Review = function () {
    display.value = s_display.value;
};
var factorial = function (num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
};
var del = function () {
    s_display.value = "";
    var dele = display.value;
    display.value = dele.substring(0, dele.length - 1);
};
var check = function (val, eve) {
    var isvalid;
    var cur_Value = display.value;
    var last_char = cur_Value[cur_Value.length - 1];
    if (display.value !== "0" && display.value !== "") {
        if (last_char === "+" ||
            last_char === "-" ||
            last_char === "/" ||
            last_char === "*" ||
            last_char === "%" ||
            last_char === "!" ||
            last_char === "^" ||
            last_char === "e" ||
            last_char === "e") {
            var assign = cur_Value.substring(0, cur_Value.length - 1) + eve;
            display.value = assign;
            isvalid = false;
        }
        else {
            isvalid = true;
        }
        return isvalid;
    }
};
// Mapping a buttons and perform particuler button task
memory_btn.map(function (value) {
    value.addEventListener("click", function (e) {
        if (display.value !== "0" && display.value !== "") {
            switch (e.target.innerText) {
                case "MC":
                    memory("MC", Number(display.value));
                    break;
                case "MR":
                    memory("MR", Number(display.value));
                    break;
                case "M+":
                    memory("M+", Number(display.value));
                    break;
                case "M-":
                    memory("M-", Number(display.value));
                    break;
                case "MS":
                    memory("MS", Number(display.value));
                    break;
            }
        }
    });
});
btn_sci.map(function (value) {
    value.addEventListener("click", function (e) {
        if (display.value !== "0" && display.value !== "") {
            switch (e.target.innerText) {
                case "sin":
                    s_display.value = "sin(".concat(display.value, ")");
                    display.value = String(Math.sin(Number(display.value)));
                    break;
                case "cos":
                    s_display.value = "cos(".concat(display.value, ")");
                    display.value = String(Math.cos(Number(display.value)));
                    break;
                case "tan":
                    s_display.value = "tan(".concat(display.value, ")");
                    display.value = String(Math.tan(Number(display.value)));
                    break;
                case "asin":
                    s_display.value = "asin(".concat(display.value, ")");
                    display.value = String(Math.asin(Number(display.value)));
                    break;
                case "atan":
                    s_display.value = "atan(".concat(display.value, ")");
                    display.value = String(Math.atan(Number(display.value)));
                    break;
                case "ceil":
                    s_display.value = "ceil(".concat(display.value, ")");
                    display.value = String(Math.ceil(Number(display.value)));
                    break;
                case "floor":
                    s_display.value = "floor(".concat(display.value, ")");
                    display.value = String(Math.floor(Number(display.value)));
                    break;
                case "round":
                    s_display.value = "round(".concat(display.value, ")");
                    display.value = String(Math.round(Number(display.value)));
                    break;
            }
        }
    });
});
buttons.map(function (value) {
    value.addEventListener("click", function (e) {
        switch (e.target.innerText) {
            case "=":
                s_display.value = "".concat(display.value);
                if (display.value.charAt(display.value.length - 1) == "!") {
                    display.value = display.value.substring(0, display.value.length - 1);
                    display.value = String(factorial(Number(display.value)));
                }
                if (display.value.includes("^")) {
                    var sign = display.value.indexOf("^");
                    var x = display.value.substring(0, sign);
                    var y = display.value.substring(sign + 1, display.value.length);
                    display.value = String(Math.pow(Number(x), Number(y)));
                }
                display.value = eval(display.value);
                break;
            case "F-E":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "F-E (".concat(display.value, ")");
                    var num = parseFloat(display.value);
                    display.value = num.toExponential();
                }
                break;
            case "C":
                s_display.value = "";
                display.value = "";
                break;
            case "n!":
                if (check(display.value, "!")) {
                    display.value += "!";
                }
                break;
            case "^":
                if (check(display.value, "^")) {
                    display.value = display.value.slice(0, -1);
                }
                break;
            case "+":
                if (check(display.value, "+")) {
                    display.value = display.value + "+";
                }
                break;
            case "-":
                if (check(display.value, "-")) {
                    display.value = display.value + "-";
                }
                break;
            case "×":
                if (check(display.value, "*")) {
                    display.value = display.value + "*";
                }
                break;
            case "÷":
                if (check(display.value, "/")) {
                    display.value = display.value + "/";
                }
                break;
            case "+/-":
                if (Number(display.value) > 0) {
                    display.value = "-".concat(display.value);
                }
                else {
                    display.value = String(Math.abs(Number(display.value)));
                }
                break;
            case "π":
                if (check(display.value, "π")) {
                    s_display.value = "".concat(display.value, "\u00D7\u03C0");
                    display.value = String(Number(display.value) * Math.PI);
                }
                break;
            case "e":
                if (check(display.value, "e")) {
                    s_display.value = "".concat(display.value, "\u00D7e");
                    display.value = String(Number(display.value) * Math.E);
                }
                break;
            case "|x|":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "| ".concat(display.value, " | ");
                    display.value = String(Math.abs(Number(display.value)));
                    ("");
                }
                break;
            case "2√x":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "2\u221A".concat(display.value);
                    display.value = String(Math.sqrt(Number(display.value)));
                }
                break;
            case "3√x":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "3\u221A".concat(display.value);
                    display.value = String(Math.pow(Number(display.value), 1 / 3));
                }
                break;
            case "x2":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "".concat(display.value, "^2");
                    display.value = String(Math.pow(Number(display.value), 2));
                }
                break;
            case "x3":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "".concat(display.value, "^3");
                    display.value = String(Math.pow(Number(display.value), 3));
                }
                break;
            case "xy":
                if (check(display.value, "^")) {
                    display.value += "^";
                }
                break;
            case "2x":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "2^".concat(display.value);
                    display.value = String(Math.pow(2, Number(display.value)));
                }
                break;
            case "10x":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "10^".concat(display.value);
                    display.value = String(Math.pow(10, Number(display.value)));
                }
                break;
            case "ex":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "".concat(Math.E, "^").concat(display.value);
                    display.value = String(Math.pow(Math.E, Number(display.value)));
                }
                break;
            case "1/x":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "1/".concat(display.value);
                    display.value = String(1 / Number(display.value));
                }
                break;
            case "2n":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "2^".concat(display.value);
                    display.value = String(Math.pow(2, Number(display.value)));
                }
                break;
            case "log":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "log(".concat(display.value, ")");
                    display.value = String(Math.LOG10E);
                }
                break;
            case "3x":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "3^".concat(display.value);
                    display.value = String(Math.pow(3, Number(display.value)));
                }
                break;
            case "ln":
                if (display.value !== "0" && display.value !== "") {
                    s_display.value = "ln(".concat(display.value, ")");
                    display.value = String(Math.log(Number(display.value)));
                }
                break;
            case "exp":
                if (display.value !== "0" && display.value !== "") {
                    display.value = String(Math.exp(Number(display.value)));
                }
                break;
            case "mod":
                if (check(display.value, "%")) {
                    display.value += "%";
                }
                break;
            case ".":
                if (display.value == null || display.value == "0") {
                    display.value = ".";
                }
                else {
                    display.value += ".";
                }
                break;
            default:
                display.value += e.target.innerText;
                break;
        }
    });
});
