/*
* 表单模块
* 承接用户的交互，生成/记录表单
*/
// 表单配置
const formConfig = {
  region: {
    name: '地区',
    options: [
      {
        value: '华东',
        key: '1',
      },
      {
        value: '华南',
        key: '2',
      },
      {
        value: '华北',
        key: '3',
      },
    ]
  },
  
}

// 当前表单值
const form = {};

// 获取当前表单值
const getConfig = () => {
  return formConfig;
};
// 获取当前表单值
const getForm = () => {
  return form;
};
// 修改form的属性值
const setValue = (key, value) => {
  if (!key) return false;
  form[key] = value;
};

export {
  getForm,
  setValue,
};