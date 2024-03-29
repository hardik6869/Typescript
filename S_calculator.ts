
const display: HTMLInputElement = document.getElementById(
  "display"
) as HTMLInputElement;
const s_display: HTMLInputElement = document.getElementById(
  "sub_display"
) as HTMLInputElement;
let buttons: HTMLButtonElement[] = Array.from(
  document.getElementsByClassName("btn")
) as HTMLButtonElement[];
let btn_sci: HTMLButtonElement[] = Array.from(
  document.getElementsByClassName("trigino_&_Fun")
) as HTMLButtonElement[];
let memory_btn: HTMLButtonElement[] = Array.from(
  document.getElementsByClassName("btn-top")
) as HTMLButtonElement[];
let square: HTMLButtonElement = document.getElementById(
  "square"
)! as HTMLButtonElement;
let sq_root: HTMLButtonElement = document.getElementById(
  "sq_root"
)! as HTMLButtonElement;
let x_root_y: HTMLButtonElement = document.getElementById(
  "x_root_y"
)! as HTMLButtonElement;
let ten_x: HTMLButtonElement = document.getElementById(
  "ten_x"
)! as HTMLButtonElement;
let log: HTMLButtonElement = document.getElementById(
  "log"
)! as HTMLButtonElement;

// Functions

type Action = "M+"|"M-"|"MS"|"MC"|"MR" ;

let arr_list: Number[] = [];
function memory(m_fun: Action, data: Number): void {
  if (m_fun == "M+") {
    arr_list.push(data);
    display.value = String(data);
    s_display.value = `M+(${display.value})`;
  } else if (m_fun == "M-") {
    arr_list.push(eval("-" + data));
    display.value = String(data);
    s_display.value = `M-(${display.value})`;
  } else if (m_fun == "MS") {
    arr_list.push(data);
    display.value = String(arr_list);
    s_display.value = `MS(${display.value})`;
  } else if (m_fun == "MC") {
    arr_list = [];
    display.value = String(arr_list);
    s_display.value = `MC`;
  } else {
    let add_data: number = 0;
    arr_list.forEach((data) => {
      add_data += Number(data);
    });
    display.value = String(add_data);
    s_display.value = `MR(${display.value})`;
  }
}

const deg_rad = (): void => {
  let val: HTMLElement = <HTMLElement>document.getElementById("deg");
  let convert: string = display.value;
  if (display.value !== "0" && display.value !== "") {
    if (val.innerText == "DEG") {
      s_display.value = `Deg (${display.value})`;
      val.innerText = "RAD";
      display.value = String(Number(convert) * (180 / Math.PI));
    } else {
      val.innerText = "DEG";
      s_display.value = `Rad (${display.value})`;
      display.value = String(Number(convert) * (Math.PI / 180));
    }
  }
};

let valid: boolean = true;
const More_features = (): void => {
  if (valid) {
    square.innerHTML = "x<sup>3</sup>";
    sq_root.innerHTML = "<sup>3</sup>√x";
    x_root_y.innerHTML = "2<sup>x</sup>";
    ten_x.innerHTML = "e<sup>x</sup>";
    log.innerHTML = "3<sup>x</sup>";
    valid = false;
  } else {
    valid = true;
    square.innerHTML = "x<sup>2</sup>";
    sq_root.innerHTML = "<sup>2</sup>√x";
    x_root_y.innerHTML = "x<sup>y</sup>";
    ten_x.innerHTML = "10<sup>x</sup>";
    log.innerHTML = "log";
  }
};

const Review = (): void => {
  display.value = s_display.value;
};

const factorial = (num: Number): Number => {
  let fact: number = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

const del = (): void => {
  s_display.value = "";
  let dele: string = display.value;
  display.value = dele.substring(0, dele.length - 1);
};

const check = (val: String, eve: string): boolean | undefined => {
  let isvalid: boolean;
  let cur_Value: string = display.value;
  let last_char: string = cur_Value[cur_Value.length - 1];
  if (display.value !== "0" && display.value !== "") {
    if (
      last_char === "+" ||
      last_char === "-" ||
      last_char === "/" ||
      last_char === "*" ||
      last_char === "%" ||
      last_char === "!" ||
      last_char === "^" ||
      last_char === "e" ||
      last_char === "|x|"
    ) {
      let assign: string = cur_Value.substring(0, cur_Value.length - 1) + eve;
      display.value = assign;
      isvalid = false;
    } else {
      isvalid = true;
    }
    return isvalid;
  }
};

// Mapping a buttons and perform particuler button task

memory_btn.map((value: HTMLButtonElement): void => {
  value.addEventListener("click", (e: MouseEvent): void => {
    if (display.value !== "0" && display.value !== "") {
      switch ((<HTMLElement>e.target).innerText) {
        case "MC":
          memory("MC", eval(display.value));
          break;
        case "MR":
          memory("MR", eval(display.value));
          break;
        case "M+":
          memory("M+", eval(display.value));
          break;
        case "M-":
          memory("M-", eval(display.value));
          break;
        case "MS":
          memory("MS", eval(display.value));
          break;
      }
    }
  });
});

btn_sci.map((value: HTMLButtonElement): void => {
  value.addEventListener("click", (e: MouseEvent): void => {
    if (display.value !== "0" && display.value !== "") {
      switch ((<HTMLElement>e.target).innerText) {
        case "sin":
          s_display.value = `sin(${display.value})`;
          display.value = String(Math.sin(Number(display.value)));
          break;
        case "cos":
          s_display.value = `cos(${display.value})`;
          display.value = String(Math.cos(Number(display.value)));
          break;
        case "tan":
          s_display.value = `tan(${display.value})`;
          display.value = String(Math.tan(Number(display.value)));
          break;
        case "asin":
          s_display.value = `asin(${display.value})`;
          display.value = String(Math.asin(Number(display.value)));
          break;
        case "atan":
          s_display.value = `atan(${display.value})`;
          display.value = String(Math.atan(Number(display.value)));
          break;
        case "ceil":
          s_display.value = `ceil(${display.value})`;
          display.value = String(Math.ceil(Number(display.value)));
          break;
        case "floor":
          s_display.value = `floor(${display.value})`;
          display.value = String(Math.floor(Number(display.value)));
          break;
        case "round":
          s_display.value = `round(${display.value})`;
          display.value = String(Math.round(Number(display.value)));
          break;
      }
    }
  });
});

buttons.map((value: HTMLButtonElement): void => {
  value.addEventListener("click", (e: MouseEvent): void => {
    switch ((<HTMLElement>e.target).innerText) {
      case "=":
        s_display.value = `${display.value}`;
        if (display.value.charAt(display.value.length - 1) == "!") {
          display.value = display.value.substring(0, display.value.length - 1);
          display.value = String(factorial(Number(display.value)));
        }
        if (display.value.includes("^")) {
          let sign: number = display.value.indexOf("^");
          let x: String = display.value.substring(0, sign);
          let y: string = display.value.substring(
            sign + 1,
            display.value.length
          );
          display.value = String(Math.pow(Number(x), Number(y)));
        }
        display.value = eval(display.value);
        break;

      case "F-E":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `F-E (${display.value})`;
          let num: number = parseFloat(display.value);
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
          display.value = `-${display.value}`;
        } else {
          display.value = String(Math.abs(Number(display.value)));
        }
        break;

      case "π":
        if (check(display.value, "π")) {
          s_display.value = `${display.value}×π`;
          display.value = String(Number(display.value) * Math.PI);
        }
        break;

      case "e":
        if (check(display.value, "e")) {
          s_display.value = `${display.value}×e`;
          display.value = String(Number(display.value) * Math.E);
        }
        break;

      case "|x|":
        if (check(display.value, "|x|")) {
          s_display.value = `| ${display.value} | `;
          display.value = String(Math.abs(Number(display.value)));
          ("");
        }
        break;

      case "2√x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `2√${display.value}`;
          display.value = String(Math.sqrt(Number(display.value)));
        }
        break;

      case "3√x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `3√${display.value}`;
          display.value = String(Math.pow(Number(display.value), 1 / 3));
        }
        break;

      case "x2":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `${display.value}^2`;
          display.value = String(Number(display.value) ** 2);
        }
        break;

      case "x3":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `${display.value}^3`;
          display.value = String(Number(display.value) ** 3);
        }
        break;

      case "xy":
        if (check(display.value, "^")) {
          display.value += "^";
        }
        break;

      case "2x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `2^${display.value}`;
          display.value = String(2 ** Number(display.value));
        }
        break;

      case "10x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `10^${display.value}`;
          display.value = String(10 ** Number(display.value));
        }
        break;

      case "ex":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `${Math.E}^${display.value}`;
          display.value = String(Math.E ** Number(display.value));
        }
        break;

      case "1/x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `1/${display.value}`;
          display.value = String(1 / Number(display.value));
        }
        break;

      case "2n":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `2^${display.value}`;
          display.value = String(2 ** Number(display.value));
        }
        break;

      case "log":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `log(${display.value})`;
          display.value = String(Math.LOG10E);
        }
        break;

      case "3x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `3^${display.value}`;
          display.value = String(3 ** Number(display.value));
        }
        break;

      case "ln":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `ln(${display.value})`;
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
        } else {
          display.value += ".";
        }
        break;

      default:
        display.value += (<HTMLElement>e.target).innerText;
        break;
    }
  });
});
