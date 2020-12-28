/* calculate each objective factor weight
- first loop: based on each obj factor
- second into third loop: pairwise comparison for each item
*/
const calculate_OW = (data_item, obj_data) => {
  // console.log(data_item, obj_data);
  let OBJ_WEIGHT = [];
  let total_row = [];

  //matrix cross product for each item
  for (let i = 0; i < obj_data.length; i++) {
    let sum_row = [];
    for (let j = 0; j < data_item.length; j++) {
      let row = 0;
      for (let k = 0; k < data_item.length; k++) {
        if (data_item[j].idmobil !== data_item[k].idmobil) {
          if (obj_data[i].data === "TAHUN KELUARAN") {
            data_item[j].tahun > data_item[k].tahun ||
            data_item[j].tahun === data_item[k].tahun
              ? (row += 1)
              : (row += 0);
          } else if (obj_data[i].data === "HARGA") {
            data_item[j].harga < data_item[k].harga ||
            data_item[j].harga === data_item[k].harga
              ? (row += 1)
              : (row += 0);
          } else {
            data_item[j].kilometer < data_item[k].kilometer ||
            data_item[j].kilometer === data_item[k].kilometer
              ? (row += 1)
              : (row += 0);
          }
        }
      }
      sum_row.push(row);
    }
    total_row.push(sum_row);
  }

  //calculate obj weight for each item
  for (let i = 0; i < total_row.length; i++) {
    const res_totalrow = total_row[i].reduce(
      (total, current) => (total = total + current)
    );
    let temp_arr = [];
    for (let j = 0; j < total_row[i].length; j++) {
      temp_arr.push(total_row[i][j] / res_totalrow);
    }
    OBJ_WEIGHT.push(temp_arr);
  }

  return OBJ_WEIGHT;
};

export default calculate_OW;
