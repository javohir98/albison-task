function getDaysInYear(year, month) {
    return new Date(year, month, 0).getDate()
}

console.log(getDaysInYear(2020, 2));