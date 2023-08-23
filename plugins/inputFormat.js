export default ({ app }, inject) => {
  inject("decimalFormat", (e, decimalPlaces) => {
    const char = String.fromCharCode(e.keyCode);
    const newValue = e.target.value + char;

    const isDigit = /^[0-9]$/;
    const hasDot = newValue.includes(".");

    if (decimalPlaces > 0) {
      if (
        (e.keyCode === 46 && !hasDot) ||
        new RegExp(`^\\d+(\\.\\d{0,${decimalPlaces}})?$`).test(newValue)
      ) {
        return true;
      }
    } else if (isDigit.test(char)) {
      return true;
    }

    e.preventDefault();
  });

  inject("checkEngFormat", (e) => {
    let char = String.fromCharCode(e.keyCode);
    if (/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/\\\-=_~` ]$/.test(char)) {
      return true;
    } else {
      e.preventDefault();
    }
  });
  
  inject("checkThaiFormat", (e) => {
    let char = String.fromCharCode(e.keyCode);
    if (/^[ก-๙0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/\\\-=_~` ]$/.test(char)) {
      return true;
    } else {
      e.preventDefault();
    }
  });

  inject("formatLength", (value, length) => {
    if (value.length > length) {
      return value.substring(0, length);
    } else return value;
  });

  inject("toBuddhistYear", (moment, format) => {
    let christianYear = moment.format("YYYY");
    let buddhishYear = (parseInt(christianYear) + 543).toString();
    return moment
      .format(
        format
          .replace("YYYY", buddhishYear)
          .replace("YY", buddhishYear.substring(2, 4))
      )
      .replace(christianYear, buddhishYear);
  });
};
