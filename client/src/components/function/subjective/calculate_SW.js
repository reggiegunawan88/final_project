import { keys } from "@material-ui/core/styles/createBreakpoints";

/* calculate each objective factor weight
- first loop: based on each obj factor
- second into third loop: pairwise comparison for each item
*/
const calculate_SW = (data_item, subj_data) => {
  let SUBJ_WEIGHT = [];
  let total_row = [];

  //matrix cross product for each item
  for (let i = 0; i < subj_data.length; i++) {
    let sum_row = [];
    for (let j = 0; j < data_item.length; j++) {
      let row = 0;
      for (let k = 0; k < data_item.length; k++) {
        if (data_item[j].idmobil != data_item[k].idmobil) {
          if (subj_data[i].data === "JENIS REM") {
            data_item[j].jenis_rem === data_item[k].jenis_rem
              ? (row += 1)
              : (row += 0);
          } else if (subj_data[i].data === "JENIS BAHAN BAKAR") {
            data_item[j].bahan_bakar === data_item[k].bahan_bakar
              ? (row += 1)
              : (row += 0);
          } else if (subj_data[i].data === "AIRBAG") {
            data_item[j].airbag === data_item[k].airbag
              ? (row += 1)
              : (row += 0);
          } else if (subj_data[i].data === "GPS") {
            data_item[j].gps === data_item[k].gps ? (row += 1) : (row += 0);
          } else if (subj_data[i].data === "SMART KEY") {
            data_item[j].smart_key === data_item[k].smart_key
              ? (row += 1)
              : (row += 0);
          } else {
            data_item[j].powersteering === data_item[k].powersteering
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
  // debugger;
  for (let i = 0; i < total_row.length; i++) {
    const res_totalrow = total_row[i].reduce(
      (total, current) => (total = total + current)
    );
    let temp_arr = [];
    for (let j = 0; j < total_row[i].length; j++) {
      temp_arr.push(total_row[i][j] / res_totalrow);
    }
    SUBJ_WEIGHT.push(temp_arr);
  }

  return SUBJ_WEIGHT;
};

export default calculate_SW;
