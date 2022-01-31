var res = {};
res.display = document.getElementById("display");
res.s_display = document.getElementById("sub_display");
var buttons = Array.from(document.getElementsByClassName("btn"));
var btn_sci = Array.from(document.getElementsByClassName("trigino_&_Fun"));
var memory_btn = Array.from(document.getElementsByClassName("btn-top"));
// Functions
var arr_list = [];
function memory(m_fun, data) {
    if (m_fun == "M+") {
        arr_list.push(data);
        res.display.value = data;
        res.s_display.value = "M+(".concat(res.display.value, ")");
    }
    else if (m_fun == "M-") {
        arr_list.push(eval("-" + data));
        res.display.value = data;
        res.s_display.value = "M-(".concat(res.display.value, ")");
    }
    else if (m_fun == "MS") {
        arr_list.push(data);
        res.display.value = arr_list;
        res.s_display.value = "MS(".concat(res.display.value, ")");
    }
    else if (m_fun == "MC") {
        arr_list = [];
        res.display.value = arr_list;
        res.s_display.value = "MC";
    }
    else {
        var add_data_1 = 0;
        arr_list.forEach(function (data) {
            add_data_1 += data;
        });
        res.display.value = add_data_1;
        res.s_display.value = "MR(".concat(res.display.value, ")");
    }
}
var deg_rad = function () {
    var val = document.getElementById("deg");
    var convert = res.display.value;
    if (res.display.value !== "0" && res.display.value !== "") {
        if (val.innerText == "DEG") {
            res.s_display.value = "Deg (".concat(res.display.value, ")");
            val.innerText = "RAD";
            res.display.value = convert * (180 / Math.PI);
        }
        else {
            val.innerText = "DEG";
            res.s_display.value = "Rad (".concat(res.display.value, ")");
            res.display.value = convert * (Math.PI / 180);
        }
    }
};
// let valid: boolean = true;
// const More_features = () => {
//   if (valid) {
//       (buttons.innerHTML= "x<sup>3</sup>"),
//       (randomvar.innerHTML = "<sup>3</sup>√x"),
//       (randompow.innerHTML = "2<sup>x</sup>"),
//       (randomlog.innerHTML = "e<sup>x</sup>");
//     valid = false;
//   } else {
//     valid = true;
//       (random.innerHTML = "x<sup>2</sup>"),
//       (randomvar.innerHTML = "<sup>2</sup>√x"),
//       (randompow.innerHTML = "10<sup>x</sup>"),
//       (randomlog.innerHTML = "ln");
//   }
// }
var Review = function () {
    res.display.value = res.s_display.value;
};
var factorial = function (num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
};
var del = function () {
    res.s_display.value = "";
    var dele = res.display.value;
    res.display.value = dele.substring(0, dele.length - 1);
};
var check = function (val) {
    var isvalid;
    var char_list = ["+", "-", "/", "*", "%", "!", "^", "|x|", "π", "e"];
    var last_char = val.charAt(val.length - 1);
    if (res.display.value !== "0" && res.display.value !== "") {
        if (char_list.includes(last_char)) {
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
        switch (e.target.innerText) {
            case "MC":
                console.log("MC");
                memory("MC", eval(res.display.value));
                break;
            case "MR":
                memory("MR", eval(res.display.value));
                break;
            case "M+":
                memory("M+", eval(res.display.value));
                break;
            case "M-":
                memory("M-", eval(res.display.value));
                break;
            case "MS":
                memory("MS", eval(res.display.value));
                break;
        }
    });
});
btn_sci.map(function (value) {
    value.addEventListener("click", function (e) {
        if (res.display.value !== "0" && res.display.value !== "") {
            switch (e.target.innerText) {
                case "sin":
                    res.s_display.value = "sin(".concat(res.display.value, ")");
                    res.display.value = Math.sin(res.display.value);
                    break;
                case "cos":
                    res.s_display.value = "cos(".concat(res.display.value, ")");
                    res.display.value = Math.cos(res.display.value);
                    break;
                case "tan":
                    res.s_display.value = "tan(".concat(res.display.value, ")");
                    res.display.value = Math.tan(res.display.value);
                    break;
                case "asin":
                    res.s_display.value = "asin(".concat(res.display.value, ")");
                    res.display.value = Math.asin(res.display.value);
                    break;
                case "atan":
                    res.s_display.value = "atan(".concat(res.display.value, ")");
                    res.display.value = Math.atan(res.display.value);
                    break;
                case "ceil":
                    res.s_display.value = "ceil(".concat(res.display.value, ")");
                    res.display.value = Math.ceil(res.display.value);
                    break;
                case "floor":
                    res.s_display.value = "floor(".concat(res.display.value, ")");
                    res.display.value = Math.floor(res.display.value);
                    break;
                case "round":
                    res.s_display.value = "round(".concat(res.display.value, ")");
                    res.display.value = Math.round(res.display.value);
                    break;
            }
        }
    });
});
buttons.map(function (value) {
    value.addEventListener("click", function (e) {
        switch (e.target.innerText) {
            case "=":
                res.s_display.value = "".concat(res.display.value);
                if (res.display.value.charAt(res.display.value.length - 1) == "!") {
                    res.display.value = res.display.value.substring(0, res.display.value.length - 1);
                    res.display.value.value = factorial(res.display.value);
                }
                if (res.display.value.includes("^")) {
                    var sign = res.display.value.indexOf("^");
                    var x = res.display.value.substring(0, sign);
                    var y = res.display.value.substring(sign + 1, res.display.value.length);
                    res.display.value = Math.pow(x, y);
                }
                res.display.value = eval(res.display.value);
                break;
            case "F-E":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "F-E (".concat(res.display.value, ")");
                    var num = parseFloat(res.display.value);
                    res.display.value = num.toExponential();
                }
                break;
            case "C":
                res.s_display.value = "";
                res.display.value = "";
                break;
            case "n!":
                if (check(res.display.value.innerHTML)) {
                    res.display.value += "!";
                }
                break;
            case "xy":
                if (check(res.display.value)) {
                    res.display.value += "^";
                }
                break;
            case "^":
                if (check(res.display.value)) {
                    res.display.value = res.display.value.slice(0, -1);
                }
                break;
            case "+":
                if (check(res.display.value)) {
                    res.display.value = res.display.value + "+";
                }
                break;
            case "-":
                if (check(res.display.value)) {
                    res.display.value = res.display.value + "-";
                }
                break;
            case "×":
                if (check(res.display.value)) {
                    res.display.value = res.display.value + "*";
                }
                break;
            case "÷":
                if (check(res.display.value)) {
                    res.display.value = res.display.value + "/";
                }
                break;
            case "+/-":
                if (res.display.value > 0) {
                    res.display.value = "-".concat(res.display.value);
                }
                else {
                    res.display.value = Math.abs(res.display.value);
                }
                break;
            case "π":
                if (check(res.display.value)) {
                    res.s_display.value = "".concat(res.display.value, "\u00D7\u03C0");
                    res.display.value = res.display.value * Math.PI;
                }
                break;
            case "e":
                if (check(res.display.value)) {
                    res.s_display.value = "".concat(res.display.value, "\u00D7e");
                    res.display.value = res.display.value * Math.E;
                }
                break;
            case "|x|":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "| ".concat(res.display.value, " | ");
                    res.display.value = Math.abs(res.display.value);
                    ("");
                }
                break;
            case "2√x":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "2\u221Ax".concat(res.display.value);
                    res.display.value = Math.sqrt(res.display.value);
                }
                break;
            case "x2":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "".concat(res.display.value, "^2");
                    res.display.value = Math.pow(res.display.value, 2);
                }
                break;
            case "10x":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "10^".concat(res.display.value);
                    res.display.value = Math.pow(10, res.display.value);
                }
                break;
            case "1/x":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "1/".concat(res.display.value);
                    res.display.value = 1 / res.display.value;
                }
                break;
            case "2n":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "2^".concat(res.display.value);
                    res.display.value = Math.pow(2, res.display.value);
                }
                break;
            case "log":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "log(".concat(res.display.value, ")");
                    // (res.display).value = Math.log10((res.display).value);
                }
                break;
            case "ln":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.s_display.value = "ln(".concat(res.display.value, ")");
                    res.display.value = Math.log(res.display.value);
                }
                break;
            case "exp":
                if (res.display.value !== "0" && res.display.value !== "") {
                    res.display.value = Math.exp(res.display.value);
                }
                break;
            case "mod":
                if (res.display.value.value !== "0" && res.display.value.value !== "") {
                    res.display.value.value += "%";
                }
                break;
            case ".":
                if (res.display.value == null || res.display.value == "0") {
                    res.display.value = ".";
                }
                else {
                    res.display.value += ".";
                }
                break;
            default:
                res.display.value += e.target.innerText;
                break;
        }
    });
});
