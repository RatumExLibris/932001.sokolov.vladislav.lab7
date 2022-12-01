var Nsquare = 0;
var Ntriangle = 0;
var Ncircle = 0;

var last_id = 0;

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * max);
}

function select_shape() {
    if (last_id != 0) {
        var last_elem = document.getElementById(last_id);
        var class_name = last_elem.className;
        last_elem.style.zIndex = 1;
        if (class_name == "square") {
            last_elem.style.backgroundColor = "red";
        } else if (class_name == "triangle") {
            last_elem.style.borderColor = "transparent transparent blue transparent";
        } else {
            last_elem.style.backgroundColor = "green";
        }
    }

    last_id = this.id;
    var class_name = this.className;
    if (class_name == "square") {
        this.style.backgroundColor = "yellow";
    } else if (class_name == "triangle") {
        this.style.borderColor = "transparent transparent yellow transparent";
    } else {
        this.style.backgroundColor = "yellow";
    }
    this.style.zIndex = 2;
}

function delete_shape() {
    if (last_id == this.id) {
        last_id = 0;
    }
    this.remove();
}

function create_square() {
    var N = document.getElementById("input").value;
    if (N != "") {
        for (let i = 0; i < Math.round(N); i++) {
            var Width = window.innerWidth;
            var Height = window.innerHeight;
            console.log(Width);
            var square = document.createElement('div');
            square.id = "square" + Nsquare;
            square.ondblclick = delete_shape;
            Nsquare++;
            square.className = "square";
            X = getRandomInt(0, Width-200);
            Y = getRandomInt(70, Height-200);
            var size = getRandomInt(50, 200);
            square.onclick = select_shape;
            square.style.top = Y + "px";
            square.style.left = X + "px";
            square.style.width = size + "px";
            square.style.height = size + "px";
            document.body.append(square);
        }
    }
}

function create_triangle() {
    var N = document.getElementById("input").value;
    if (N != "") {
        for (let i = 0; i < Math.round(N); i++) {
            var Width = document.documentElement.clientWidth;
            var Height = document.documentElement.clientHeight;
            var triangle = document.createElement('div');
            triangle.id = "triangle" + Ntriangle;
            triangle.ondblclick = delete_shape;
            Ntriangle++;
            triangle.className = "triangle";
            X = getRandomInt(0, Width-200);
            Y = getRandomInt(70, Height-200);
            var size = getRandomInt(20, 200);
            triangle.onclick = select_shape;
            triangle.style.top = Y + "px";
            triangle.style.left = X + "px";
            triangle.style.borderWidth = size + "px";
            document.body.append(triangle);
        }
    }
}

function create_circle() {
    var N = document.getElementById("input").value;
    if (N != "") {
        for (let i = 0; i < Math.round(N); i++) {
            var Width = document.documentElement.clientWidth;
            var Height = document.documentElement.clientHeight;
            var circle = document.createElement('div');
            circle.id = "circle" + Ncircle;
            circle.ondblclick = delete_shape;
            Ncircle++;
            circle.className = "circle";
            X = getRandomInt(0, Width-200);
            Y = getRandomInt(70, Height-200);
            size = getRandomInt(50, 200);
            circle.onclick = select_shape;
            circle.style.top = Y + "px";
            circle.style.left = X + "px";
            circle.style.width = size + "px";
            circle.style.height = size + "px";
            document.body.append(circle);
        }
    }
}