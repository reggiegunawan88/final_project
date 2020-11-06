const calculate_OF = (data_item, ofw, ow) => {
  let result = [...data_item];
  for (let i = 0; i < ow.length; i++) {
    let temp_arr = [];
    let obj_factor = 0;

    for (let j = 0; j < ow[i].length; j++) {
      obj_factor += ow[i][j] * ofw[j].ofw_value;
    }
    //copy and replace arr with OF value
    temp_arr = { ...result[i], OF: obj_factor };
    result[i] = temp_arr;
  }
  return result;
};

export default calculate_OF;
