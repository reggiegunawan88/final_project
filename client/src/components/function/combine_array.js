//function for render items with images
const put_imgArray = (items, items_img) => {
  let clone_items = [...items]; //clone from state
  console.log(clone_items);
  let clone_itemsImg = [...items_img]; //clone from state
  console.log(clone_itemsImg);
  let img_arr = []; //initial empty temp arr for img
  for (let i = 0; i < clone_items.length; i++) {
    for (let j = 0; j <= clone_itemsImg.length; j++) {
      if (clone_itemsImg[0] === undefined) {  //item has no img in array
        break;
      }
      if (clone_items[i].idmobil === clone_itemsImg[0].idmobil) {
        //put img into arr temp
        img_arr.push({ url: clone_itemsImg[0].img_url });
        clone_itemsImg.shift();
        j = 0;

        if (clone_itemsImg.length === 0) {
          //1. assign img value to copied arr
          let item_arr = { ...clone_items[i], img: img_arr };
          //2. put back into copied arr
          clone_items[i] = item_arr;
          img_arr = [];
        }
      } else {
        if (img_arr.length) {
          //assign img value to copied arr
          let item_arr = { ...clone_items[i], img: img_arr };
          //put back into copied arr
          clone_items[i] = item_arr;
          img_arr = [];
        }
        //break if items_id bigger than img_id (images not matching)
        if (clone_items[i].idmobil < clone_itemsImg[0].idmobil) {
          break;
        }
        j = 0;
        clone_itemsImg.shift();
      }
    }
  }
  //return the complete array with img
  return clone_items;
};

export default put_imgArray;
