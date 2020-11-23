/* calculate final value for obj factor (OF) each item
-method: matrix cross product between OFW and OW table
*/
const calculate_SF = (data_item, sfw, sw) => {
  let result = [...data_item];
  //   debugger;
  for (let i = 0; i < data_item.length; i++) {
    let temp_arr = [];
    let subj_factor = 0;

    //cartesian cross product
    for (let j = 0; j < sfw.length; j++) {
      subj_factor += sw[j][i] * sfw[j].sfw_value;
    }

    //copy and replace arr with OF value
    temp_arr = { ...result[i], SF: subj_factor };
    result[i] = temp_arr;
  }
  return result;
};

export default calculate_SF;
