/* calculate subj factor weight
-nested double loop : pairwise comparison for each factor
*/
const calculate_SFW = (subj_data) => {
  let SUBJ_FACTOR_WEIGHT = [];
  let total_row_arr = [];

  //matrix cross product for each obj factor
  for (let i = 0; i < subj_data.length; i++) {
    let sum_row = 0;
    for (let j = 0; j < subj_data.length; j++) {
      if (subj_data[i].data == subj_data[j].data) {
        console.log("block skipped");
      } else {
        subj_data[i].value < subj_data[j].value ||
        subj_data[i].value == subj_data[j].value
          ? (sum_row += 1)
          : (sum_row += 0);
      }
    }
    total_row_arr.push(sum_row);
  }

  //sum total row
  let total_row = total_row_arr.reduce(
    (total, current) => (total = total + current)
  );

  /*calculate OFW from total row array
    -method: total value per row [index] / total_row
    -total OFW must be = 1 
    */
  for (let i = 0; i < total_row_arr.length; i++) {
    const sfw = total_row_arr[i] / total_row;
    SUBJ_FACTOR_WEIGHT.push({ sfw_value: sfw });
  }

  return SUBJ_FACTOR_WEIGHT;
};

export default calculate_SFW;
