module.exports = {
 
  format_time: (date) => {
    // Format as mm/dd/yyyy
    return date.toLocalTimeString();
  },
  format_amount: (amount) => {
    // Format numbers with commas
    return parseInt(amount).toLocaleString();
  },
};