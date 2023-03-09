import swal from "sweetalert"

export const alertError = (error) =>
  swal({
    title: error,
    text: " ",
    icon: "error",
    timer: "2000",
    button: false,
});

export const alertSuccess = (title) =>
  swal({
    title: title,
    text: " ",
    icon: "success",
    timer: "2000",
    button: false,
});
