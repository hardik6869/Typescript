interface Resource {
  display: any;
  s_display: any;
  item: any;
  buttons: any;
}

var res = <Resource>{};

interface ArrayConstructor {
  from(arrayLike: any, mapFn?: undefined, thisArg?: undefined): Array<any>;
}

res.display = document.getElementById("display") as HTMLInputElement;
res.s_display = document.getElementById("sub_display") as HTMLInputElement;

let buttons = Array.from(document.getElementsByClassName("btn"));
let btn_sci = Array.from(document.getElementsByClassName("trigino_&_Fun"));
let memory_btn = Array.from(document.getElementsByClassName("btn-top"));

// Functions

let arr_list: any[] = [];
function memory(m_fun: string, data: any): any {
  if (m_fun == "M+") {
    arr_list.push(data);
    res.display.value = data;
    res.s_display.value = `M+(${res.display.value})`;
  } else if (m_fun == "M-") {
    arr_list.push(eval("-" + data));
    res.display.value = data;
    res.s_display.value = `M-(${res.display.value})`;
  } else if (m_fun == "MS") {
    arr_list.push(data);
    res.display.value = arr_list;
    res.s_display.value = `MS(${res.display.value})`;
  } else if (m_fun == "MC") {
    arr_list = [];
    res.display.value = arr_list;
    res.s_display.value = `MC`;
  } else {
    let add_data = 0;
    arr_list.forEach((data: any) => {
      add_data += data;
    });
    res.display.value = add_data;
    res.s_display.value = `MR(${res.display.value})`;
  }
}

const deg_rad = () => {
  let val: any = document.getElementById("deg");
  let convert = res.display.value;
  if (res.display.value !== "0" && res.display.value !== "") {
    if (val.innerText == "DEG") {
      res.s_display.value = `Deg (${res.display.value})`;
      val.innerText = "RAD";
      res.display.value = convert * (180 / Math.PI);
    } else {
      val.innerText = "DEG";
      res.s_display.value = `Rad (${res.display.value})`;
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

const Review = () => {
  res.display.value = res.s_display.value;
};

const factorial = (num: any) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

const del = () => {
  res.s_display.value = "";
  let dele = res.display.value;
  res.display.value = dele.substring(0, dele.length - 1);
};

const check = (val: any) => {
  let isvalid;
  let char_list: any = ["+", "-", "/", "*", "%", "!", "^", "|x|","π","e"];
  let last_char: any = val.charAt(val.length - 1);
  if (res.display.value !== "0" && res.display.value !== "") {
    if (char_list.includes(last_char)) {
      isvalid = false;
    } else {
      isvalid = true;
    }
    return isvalid;
  }
};

// Mapping a buttons and perform particuler button task

memory_btn.map((value) => {
  value.addEventListener("click", (e: any) => {
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

btn_sci.map((value) => {
  value.addEventListener("click", (e: any) => {
    if (res.display.value !== "0" && res.display.value !== "") {
      switch (e.target.innerText) {
        case "sin":
          res.s_display.value = `sin(${res.display.value})`;
          res.display.value = Math.sin(res.display.value);
          break;
        case "cos":
          res.s_display.value = `cos(${res.display.value})`;
          res.display.value = Math.cos(res.display.value);
          break;
        case "tan":
          res.s_display.value = `tan(${res.display.value})`;
          res.display.value = Math.tan(res.display.value);
          break;
        case "asin":
          res.s_display.value = `asin(${res.display.value})`;
          res.display.value = Math.asin(res.display.value);
          break;
        case "atan":
          res.s_display.value = `atan(${res.display.value})`;
          res.display.value = Math.atan(res.display.value);
          break;
        case "ceil":
          res.s_display.value = `ceil(${res.display.value})`;
          res.display.value = Math.ceil(res.display.value);
          break;
        case "floor":
          res.s_display.value = `floor(${res.display.value})`;
          res.display.value = Math.floor(res.display.value);
          break;
        case "round":
          res.s_display.value = `round(${res.display.value})`;
          res.display.value = Math.round(res.display.value);
          break;
      }
    }
  });
});

buttons.map((value) => {
  value.addEventListener("click", (e: any) => {
    switch (e.target.innerText) {
      case "=":
        res.s_display.value = `${res.display.value}`;
        if (res.display.value.charAt(res.display.value.length - 1) == "!") {
          res.display.value = res.display.value.substring(
            0,
            res.display.value.length - 1
          );
          res.display.value.value = factorial(res.display.value);
        }
        if (res.display.value.includes("^")) {
          let sign = res.display.value.indexOf("^");
          let x = res.display.value.substring(0, sign);
          let y = res.display.value.substring(
            sign + 1,
            res.display.value.length
          );
          res.display.value = Math.pow(x, y);
        }
        res.display.value = eval(res.display.value);
        break;

      case "F-E":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `F-E (${res.display.value})`;
          let num = parseFloat(res.display.value);
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
          res.display.value = `-${res.display.value}`;
        } else {
          res.display.value = Math.abs(res.display.value);
        }
        break;

      case "π":
        if (check(res.display.value)) {
        res.s_display.value = `${res.display.value}×π`;
        res.display.value = res.display.value * Math.PI;
        }
        break;

      case "e":
        if (check(res.display.value)) {
        res.s_display.value = `${res.display.value}×e`;
        res.display.value = res.display.value * Math.E;
        }
        break;

      case "|x|":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `| ${res.display.value} | `;
          res.display.value = Math.abs(res.display.value);
          ("");
        }
        break;

      case "2√x":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `2√x${res.display.value}`;
          res.display.value = Math.sqrt(res.display.value);
        }
        break;

      case "x2":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `${res.display.value}^2`;
          res.display.value = res.display.value ** 2;
        }
        break;

      case "10x":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `10^${res.display.value}`;
          res.display.value = 10 ** res.display.value;
        }
        break;

      case "1/x":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `1/${res.display.value}`;
          res.display.value = 1 / res.display.value;
        }
        break;

      case "2n":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `2^${res.display.value}`;
          res.display.value = 2 ** res.display.value;
        }
        break;

      case "log":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `log(${res.display.value})`;
          // (res.display).value = Math.log10((res.display).value);
        }
        break;

      case "ln":
        if (res.display.value !== "0" && res.display.value !== "") {
          res.s_display.value = `ln(${res.display.value})`;
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
        } else {
          res.display.value += ".";
        }
        break;

      default:
        res.display.value += e.target.innerText;
        break;
    }
  });
});
