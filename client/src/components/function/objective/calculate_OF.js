/* calculate final value for obj factor (OF) each item
-method: matrix cross product between OFW and OW table
*/
const calculate_OF = (data_item, ofw, ow) => {
  let result = [...data_item];

  //do matrix cartesian product per row
  // debugger;
  for (let i = 0; i < data_item.length; i++) {
    let temp_arr = [];
    let obj_factor = 0;

    //cartesian cross product
    for (let j = 0; j < ofw.length; j++) {
      obj_factor += ow[j][i] * ofw[j].ofw_value;
    }

    //copy and replace arr with OF value
    temp_arr = { ...result[i], OF: obj_factor };
    result[i] = temp_arr;
  }
  return result;
};

export default calculate_OF;
