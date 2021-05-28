export const checkExistData = function (value, dataName) {
  if (value == "") {
    alert(dataName + " 입력해주세요!");
    return false;
  }
  return true;
};
