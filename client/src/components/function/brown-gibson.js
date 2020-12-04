//objective factor method calculation
import calculate_OFW from "./objective/calculate_OFW";
import calculate_OW from "./objective/calculate_OW";
import calculate_result_OF from "./objective/calculate_OF";

//subjective factor method calculation
import calculate_SFW from "./subjective/calculate_SFW";
import calculate_SW from "./subjective/calculate_SW";
import calculate_result_SF from "./subjective/calculate_SF";

function calculate_OF(data, obj_data) {
  let obj_factor_weight = null;
  let obj_weight = null;

  obj_factor_weight = calculate_OFW(obj_data);
  obj_weight = calculate_OW(data, obj_data);
  let result = calculate_result_OF(data, obj_factor_weight, obj_weight);
  return result;
}

function calculate_SF(data, subj_data) {
  let subj_factor_weight = null;
  let subj_weight = null;

  subj_factor_weight = calculate_SFW(subj_data);
  subj_weight = calculate_SW(data, subj_data);
  let result = calculate_result_SF(data, subj_factor_weight, subj_weight);
  return result;
}

const calculate_LPM = (
  secc_data,
  obj_data,
  subj_data,
  obj_weight,
  subj_weight
) => {
  /*process dataset
  -calculate OF and SF
  */
  let processed_OF_data = calculate_OF(secc_data, obj_data);
  let result_dataset = calculate_SF(processed_OF_data, subj_data);

  //cross between obj-subj weight and result_dataset (OF-SF)
  let final_result_dataset = [...result_dataset];
  for (let i = 0; i < result_dataset.length; i++) {
    var final_value =
      result_dataset[i].OF * obj_weight + result_dataset[i].SF * subj_weight;

    //push new LPM value to current item
    let temp_arr = [];
    temp_arr = { ...result_dataset[i], LPM: final_value };
    final_result_dataset[i] = temp_arr;
  }

  return final_result_dataset;
};

export default calculate_LPM;
