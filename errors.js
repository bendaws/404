const ErrorText = document.getElementById("error");
const ErrorCode = urlParams.get("error");

if (ErrorCode == "0") {
  ErrorText.innerHTML = "Unknown (" + ErrorCode + ")";
if (ErrorCode == "1") {
  ErrorText.innerHTML = "Page not found (" + ErrorCode + ")";
} else {
  ErrorText.innerHTML = "Unknown (" + ErrorCode + ")";
}
