//----------------------- calendar script -----------------------

$(document).ready(function () {
  $("#calendar").fullCalendar({
    // Options and callbacks
    // themeSystem: 'lux'
  });
});

//---------------------- maxAtt-cls ------------------------------
var data = [150, 200, 250];

// append svg to the selected element with defined attributes
var svg = d3
  .select("#maxAtt-cls")
  .append("svg")
  .attr("width", 250)
  .attr("height", 250)
  .append("g")
  .attr("transform", "translate(" + 50 + "," + 0 + ")");

var xScale = d3.scalePoint().domain(["II", "III", "Iv"]).range([20, 125]);

// append rectangles to the svg element
svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  // positions the rectangle horizontally & vertically
  .attr("x", function (d, i) {
    return i * 50; //with a gap of 50px between each
  })
  .attr("y", function (d) {
    return 300 - d;
  })
  //sets the height & width of each rectangle
  .attr("width", 40)
  .attr("height", function (d) {
    return d - 80;
  })
  .attr("fill", "#d0b49f");

svg
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("x", function (d, i) {
    return i * 50 + 10;
  })
  .attr("y", function (d) {
    return 300 - d - 5;
  });

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + 230 + ")")
  .call(d3.axisBottom(xScale));

//-------------------------------- maxAtt-sub -------------------------
var data = [115, 180, 150];

// append svg to the selected element with defined attributes
var svg = d3
  .select("#maxAtt-sub")
  .append("svg")
  .attr("width", 250)
  .attr("height", 250)
  .append("g")
  .attr("transform", "translate(" + 50 + "," + 0 + ")");

var xScale = d3
  .scalePoint()
  .domain(["CS471", "CS352", "CS247"])
  .range([20, 125]);

// append rectangles to the svg element
svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  // positions the rectangle horizontally & vertically
  .attr("x", function (d, i) {
    return i * 50; //with a gap of 50px between each
  })
  .attr("y", function (d) {
    return 300 - d;
  })
  //sets the height & width of each rectangle
  .attr("width", 40)
  .attr("height", function (d) {
    return d - 80;
  })
  .attr("fill", "#d0b49f");

svg
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("x", function (d, i) {
    return i * 50 + 10;
  })
  .attr("y", function (d) {
    return 300 - d - 5;
  });

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + 230 + ")")
  .call(d3.axisBottom(xScale));

//-------------------------------- cctv-video -------------------------
function getCSRFToken() {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // The CSRF token cookie name may vary depending on the server-side framework
      if (cookie.substring(0, 10) === "csrftoken=") {
        cookieValue = decodeURIComponent(cookie.substring(10));
        break;
      }
    }
  }
  return cookieValue;
}
//-------------------------------- cctv-video -------------------------
// test code

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
// const saveBtn = document.getElementById("save-btn");

// --------------testing-----------------
var videoDevices;
navigator.mediaDevices
  .enumerateDevices()
  .then((devices) => {
    videoDevices = devices.filter((device) => device.kind === "videoinput");
    console.log(videoDevices);
    const c = document.querySelector(".adminrights-container18");

    // i=1 need to be 0 if you want to show default(laptop) camera
    for (let i = 1; i < videoDevices.length; i++) {
      if (videoDevices[i].label.includes("OBS")) {
        continue;
      }
      const deviceId = videoDevices[i].deviceId;
      navigator.mediaDevices
        .getUserMedia({ video: { deviceId: deviceId } })
        .then((stream) => {
          const live = document.createElement("div");
          live.classList = "live";

          const video = document.createElement("video");
          video.style.transform = "scaleX(-1)";
          video.id = "player" + i;
          video.style.width = "100%";
          const canvas = document.createElement("canvas");
          canvas.style.transform = "scaleX(-1)";
          canvas.id = "can" + i;
          canvas.style.width = "0";
          // canvas.style.display = 'none';

          const h = document.createElement("h3");
          h.style.width = "fit-content";
          h.style.margin = "0 auto";
          h.textContent = "Camera ID: " + String(100 + i);
          live.appendChild(video);
          live.appendChild(canvas);
          live.appendChild(h);

          var h2 = h.cloneNode(true);

          var data = {
            get_class: 1,
            cam_id: String(100 + i),
          };
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "../dashboard/", true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.setRequestHeader("X-CSRFToken", getCSRFToken());
          xhr.onload = function () {
            let resp = xhr.response;

            if (xhr.status === 200) {
              resp = JSON.parse(resp);
              h2.textContent = "Class: " + resp.class;
              live.appendChild(h2);
            } else {
            }
          };
          xhr.send(JSON.stringify(data));

          c.appendChild(live);

          document.querySelector("#player" + String(i)).srcObject = stream;
          document.querySelector("#player" + String(i)).play();
        })
        .catch((error) => {
          console.error("Error accessing user media: ", error);
        });
    }
  })
  .catch((error) => {
    console.error(error);
  });

// var imagesPayload = new FormData();

// function captureImage(event, camnum) {
//   event.preventDefault();
//   var video = null;
//   var canvas = null;

//   if (camnum === 1) {
//     video = video1;
//     canvas = canvas1;
//   } else if (camnum === 2) {
//     video = video2;
//     canvas = canvas2;
//   } else if (camnum === 3) {
//     video = video3;
//     canvas = canvas3;
//   }

//   // #this should be deleted
//   video.style.display = "none";

//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;

//   const context = canvas.getContext("2d");
//   context.drawImage(video, 0, 0, canvas.width, canvas.height);

//   // this should be deleted to not stop the camera after capture image
//   const tracks = stream.getTracks();
//   tracks.forEach((track) => {
//     track.stop();
//   });

//   // Convert the canvas to a base64 encoded string
//   const class_image = canvas.toDataURL("image/jpeg");
//   imagesPayload.append(
//     "image" + String(camnum),
//     dataURItoBlob(class_image),
//     "image" + String(camnum) + ".jpg"
//   );
// }

// Helper function to convert dataURI to Blob object
function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/jpeg" });
}

// let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

// function RecogniseImage(event) {
//   const files = event.target.files;
//   const file = files[0];

//   var formData = new FormData();
//   formData.append("image", file);

//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "../dashboard/face_recognize/", true);
//   xhr.setRequestHeader("X-CSRFToken", getCSRFToken());

//   xhr.onreadystatechange = function () {
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//       alert("Class Image saved successfully");
//     } else {
//       console.error("Failed to upload image");
//     }
//   };
//   xhr.send(formData);
// }

function sendImages(data) {
  const csrftoken = getCSRFToken();
  console.log(data);
  // if (data.entries.length === 0) {
  //   alert("Cameras Not working");
  //   return;
  // }
  // Send the image data to the Django server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../dashboard/face_recognize/", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-CSRFToken", csrftoken);

  // xhr.onload = function () {
  //   if (xhr.status === 200) {
  //     alert("Class Image Captured successfully");
  //   }
  // };
  xhr.send(JSON.stringify(data));
}

//  for capture image using button
// saveBtn1.addEventListener("click", function (event) {
//   captureImage(event, 1);
// });
// saveBtn2.addEventListener("click", function (event) {
//   captureImage(event, 2);
// });
// saveBtn3.addEventListener("click", function (event) {
//   captureImage(event, 3);
// });

//when click on send images all cameras images will be captured and send to server
let imagesPayload = new FormData();

var datad = {};

var sendBtn = document.querySelector("#sendbtn");
function problem(event) {
  for (let i = 1; i < videoDevices.length; i++) {
    if (videoDevices[i].label.includes("OBS")) {
      continue;
    }

    var video = document.querySelector("#player" + String(i));
    var canvas = document.querySelector("#can" + String(i));

    // #this should be deleted
    video.style.display = "none";
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    var context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.width = "100%";

    // this should be deleted to not stop the camera after capture image
    // const tracks = stream.getTracks();
    // tracks.forEach((track) => {
    //   track.stop();
    // });

    // Convert the canvas to a base64 encoded string
    // const class_image = canvas.toDataURL("image/jpeg");
    canvas.toBlob(function (blob) {
      // console.log(blob);
      datad["image" + String(i)] = blob;
    }, "image/jpg");
    //need to add class id with image to know which image is for which class
  }
  // console.log(datad);
  
  

  // console.log(imagesPayload);
  sendImages(datad);
};
// Call captureImage function every 5 seconds
// setInterval(captureImage, 5000);


