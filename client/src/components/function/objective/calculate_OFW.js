/* calculate obj factor weight
-nested double loop : pairwise comparison for each factor
*/
const calculate_OFW = (obj_data) => {
  let OBJ_FACTOR_WEIGHT = [];
  let total_row_arr = [];

  //matrix cross product for each obj factor
  for (let i = 0; i < obj_data.length; i++) {
    let sum_row = 0;
    for (let j = 0; j < obj_data.length; j++) {
      if (obj_data[i].data == obj_data[j].data) {
        console.log("block skipped");
      } else {
        obj_data[i].value < obj_data[j].value ||
        obj_data[i].value == obj_data[j].value
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
    const ofw = total_row_arr[i] / total_row;
    OBJ_FACTOR_WEIGHT.push({ ofw_value: ofw });
  }

  return OBJ_FACTOR_WEIGHT;
};

export default calculate_OFW;
