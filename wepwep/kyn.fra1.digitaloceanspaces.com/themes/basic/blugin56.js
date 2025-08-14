$(document).ready(function () {
  $(".products .list-unstyled .active").click();
  $(".products .list-unstyled li").on({
    click: function () {
      $(this).addClass("active").siblings().removeClass("active");
    },
  });

  $(".pay").on({
    click: function () {
      $(this)
        .addClass("active")
        .parent()
        .parent()
        .siblings()
        .find(".pay")
        .removeClass("active");
      if ($(".masrf0").hasClass("active")) {
        $(".masrf").css("display", "block");
      } else {
        $(".masrf").css("display", "none");
      }
    },
  });
  $(".disco").on({
    click: function () {
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        $(".discount").fadeIn(500);
      } else {
        $(".discount").fadeOut(500);
      }
    },
  });
  $(".products .card .card-img").on({
    click: function () {
      $(this).siblings().find(".about").click();
    },
  });
  $(".products .card .card-body .card-title").on({
    click: function () {
      $(this).parent().find(".about").click();
    },
  });
  $(".laws .taps  ul li").on({
    click: function () {
      $($(this).data("tap"))
        .addClass("active")
        .siblings()
        .removeClass("active"),
        $(this).addClass("active").siblings().removeClass("active");
    },
  });
  $(" .laws .next").on({
    click: function () {
      $($(this).data("tap"))
        .addClass("active")
        .siblings()
        .removeClass("active");
    },
  });
  $(".select-shape").on({
    change: function () {
      if ($(this).val() == "wave") {
        $(".shape-up-wave").css("display", "block");
        $(".shape-up-line").css("display", "none");
        $(".shape-up-curve").css("display", "none");

        $(".animation .Wave").show();
        $(".animation .line").hide();
        $(".animation .curve").hide();
      } else if ($(this).val() == "line") {
        $(".shape-up-wave").css("display", "none");
        $(".shape-up-line").css("display", "block");
        $(".shape-up-curve").css("display", "none");

        $(".animation .linee").show();
        $(".animation .Wave").hide();
        $(".animation .curve").hide();
      } else {
        $(".shape-up-wave").css("display", "none");
        $(".shape-up-curve").css("display", "block");
        $(".shape-up-line").css("display", "none");

        $(".animation .curve").show();
        $(".animation .Wave").hide();
        $(".animation .linee").hide();
      }
    },
  });
  $(".first-color , .second-color , .btn-color").on({
    change: function () {
      $first = $(".first-color").val();
      $second = $(".second-color").val();
      $btn = $(".btn-color").val();
      $(
        ".dash .header , .dash .shape-up-curve .block , .dash .shape-up-line .background"
      ).css(
        "background-image",
        "linear-gradient(to top, " + $first + "  20%, " + $second + " 80%)"
      );
      $(".in").css(
        "background-image",
        "linear-gradient(to top, " + $first + "  20%, " + $second + " 80%)"
      );
      $(".curvee").css(
        "background-image",
        "linear-gradient(to top, " + $first + "  20%, " + $second + " 80%)"
      );
      $(".linee").css(
        "background-image",
        "linear-gradient(to top, " + $first + "  20%, " + $second + " 80%)"
      );
      $(".navbar ").css(
        "background-image",
        "linear-gradient(to top, " + $second + " 100%, " + $second + " 100%)"
      );

      $(".btn").css("background", $btn);
    },
  });
});
$(document).ready(function () {
  $("#upload-file").change(function () {
    var filename = $(this).val();
    $("#file-upload-name").html(filename);
    if (filename != "") {
      setTimeout(function () {
        $(".upload-wrapper").addClass("uploaded");
      }, 600);
      setTimeout(function () {
        $(".upload-wrapper").removeClass("uploaded");
        $(".upload-wrapper").addClass("success");
      }, 1600);
    }
  });
});
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("nav .logo").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
var imgUpload = document.getElementById("upload_imgs"),
  imgPreview = document.getElementById("img_preview"),
  imgUploadForm = document.getElementById("img-upload-form"),
  totalFiles,
  previewTitle,
  previewTitleText,
  img;

imgUpload.addEventListener("change", previewImgs, false);
imgUploadForm.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    alert(
      "Images Uploaded! (not really, but it would if this was on your website)"
    );
  },
  false
);

function previewImgs(event) {
  totalFiles = imgUpload.files.length;

  if (!!totalFiles) {
    imgPreview.classList.remove("quote-imgs-thumbs--hidden");
    previewTitle = document.createElement("p");
    previewTitle.style.fontWeight = "bold";
    previewTitleText = document.createTextNode(
      totalFiles + " Total Images Selected"
    );
    previewTitle.appendChild(previewTitleText);
    imgPreview.appendChild(previewTitle);
  }

  for (var i = 0; i < totalFiles; i++) {
    img = document.createElement("img");
    img.src = URL.createObjectURL(event.target.files[i]);
    img.classList.add("img-preview-thumb");
    imgPreview.appendChild(img);
  }
}
