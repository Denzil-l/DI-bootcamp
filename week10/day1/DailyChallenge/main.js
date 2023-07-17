const largeNumber = 356;


module.exports = {
    largeNumber : largeNumber
}

module.exports.getCurrentDateTime = function() {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };