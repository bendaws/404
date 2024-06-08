const ErrorText = document.getElementById("error");
const ErrorCode = urlParams.get("error");
const ErrorId = urlParams.get("id");

if (ErrorCode != null && ErrorId != null) {
  ErrorText.innerHTML = ErrorCode + "(" + ErrorCode + ")";
} else {
  ErrorText.innerHTML = "Invalid parameters. http://err.bendaws.net/?id=404&error=page_not_found"
}
