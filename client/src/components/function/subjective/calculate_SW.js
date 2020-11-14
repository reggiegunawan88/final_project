/* calculate each objective factor weight
- first loop: based on each obj factor
- second into third loop: pairwise comparison for each item
*/
const calculate_SW = (data_item, subj_data) => {
  let SUBJ_WEIGHT = [];
  let total_row = [];

  //matrix cross product for each item
  for (let i = 0; i < subj_data.length; i++) {
    // debugger;
    let sum_row = [];
    for (let j = 0; j < data_item.length; j++) {
      let row = 0;
      for (let k = 0; k < data_item.length; k++) {
        if (data_item[j].idmobil !== data_item[k].idmobil) {
          if (subj_data[i].data === "JENIS REM") {
            if (
              data_item[j].jenis_rem === "ABS" &&
              data_item[k].jenis_rem === "ABS"
            ) {
              row += 1;
            } else if (
              data_item[j].jenis_rem === "NON ABS" &&
              data_item[k].jenis_rem === "NON ABS"
            ) {
              row += 1;
            } else if (
              data_item[j].jenis_rem === "ABS" &&
              data_item[k].jenis_rem === "NON ABS"
            ) {
              row += 1;
            } else {
              row += 0;
            }
          } else if (subj_data[i].data === "JENIS BAHAN BAKAR") {
            if (
              data_item[j].bahan_bakar === "DIESEL" &&
              data_item[k].bahan_bakar === "BENSIN"
            ) {
              row += 1;
            } else if (
              data_item[j].bahan_bakar === "DIESEL" &&
              data_item[k].bahan_bakar === "DIESEL"
            ) {
              row += 1;
            } else if (
              data_item[j].bahan_bakar === "BENSIN" &&
              data_item[k].bahan_bakar === "BENSIN"
            ) {
              row += 1;
            } else {
              row += 0;
            }
          } else if (subj_data[i].data === "AIRBAG") {
            if (data_item[j].airbag === "YA" && data_item[k].airbag === "YA") {
              row += 1;
            } else if (
              data_item[j].airbag === "TIDAK" &&
              data_item[k].airbag === "TIDAK"
            ) {
              row += 1;
            } else if (
              data_item[j].airbag === "YA" &&
              data_item[k].airbag === "TIDAK"
            ) {
              row += 1;
            } else {
              row += 0;
            }
          } else if (subj_data[i].data === "GPS") {
            if (data_item[j].gps === "YA" && data_item[k].gps === "YA") {
              row += 1;
            } else if (
              data_item[j].gps === "TIDAK" &&
              data_item[k].gps === "TIDAK"
            ) {
              row += 1;
            } else if (
              data_item[j].gps === "YA" &&
              data_item[k].gps === "TIDAK"
            ) {
              row += 1;
            } else {
              row += 0;
            }
          } else if (subj_data[i].data === "SMART KEY") {
            if (
              data_item[j].smart_key === "YA" &&
              data_item[k].smart_key === "YA"
            ) {
              row += 1;
            } else if (
              data_item[j].smart_key === "TIDAK" &&
              data_item[k].smart_key === "TIDAK"
            ) {
              row += 1;
            } else if (
              data_item[j].smart_key === "YA" &&
              data_item[k].smart_key === "TIDAK"
            ) {
              row += 1;
            } else {
              row += 0;
            }
          } else {
            if (
              data_item[j].powersteering === "YA" &&
              data_item[k].powersteering === "YA"
            ) {
              row += 1;
            } else if (
              data_item[j].powersteering === "TIDAK" &&
              data_item[k].powersteering === "TIDAK"
            ) {
              row += 1;
            } else if (
              data_item[j].powersteering === "YA" &&
              data_item[k].powersteering === "TIDAK"
            ) {
              row += 1;
            } else {
              row += 0;
            }
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
