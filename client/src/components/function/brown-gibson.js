//objective factor method calculation
import calculate_OFW from "./objective/calculate_OFW";
import calculate_OW from "./objective/calculate_OW";
import calculate_result_OF from "./objective/calculate_OF";

function calculate_OF(data, obj_data) {
  let sorted_obj_data = obj_data.sort((a, b) => (a.value > b.value ? 1 : -1)); //arr must be sorted first
  let obj_factor_weight = null;
  let obj_weight = null;

  obj_factor_weight = calculate_OFW(sorted_obj_data);
  obj_weight = calculate_OW(data, sorted_obj_data);
  let result = calculate_result_OF(data, obj_factor_weight, obj_weight);
  console.log(result);

  return result;
}

function calculate_SF(data, subj_data) {
  console.log("calculate SF here");
  return 0;
}

const calculate_LPM = (
  secc_data,
  obj_data,
  subj_data,
  obj_weight,
  subj_weight
) => {
  //final method here
  // console.log(secc_data, obj_data, subj_data, obj_weight, subj_weight);

  calculate_OF(secc_data, obj_data);
  return 0;
};

export default calculate_LPM;
