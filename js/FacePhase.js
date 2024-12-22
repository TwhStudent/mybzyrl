// 人脸框标准内容
const faceBoxContent = `
<h3>人脸框标准</h3>
<p>人脸框应紧密贴合人脸的最外边缘，包括头发部分但不包含耳朵。框的上下边界需与额头顶部和下巴底部对齐，左右边界需包含完整的脸颊部分，且尽量保持矩形形状，误差不超过 5 像素。</p>
`;

// 人脸轮廓标准内容
const faceOutlineContent = `
<h3>人脸轮廓标准</h3>
<p>人脸轮廓标注需沿着脸部的实际曲线进行，从下巴开始，沿着下颚线、脸颊、太阳穴，直至额头顶部。曲线应平滑自然，能够准确反映脸部的形状特征，关键点之间的连线偏差不得超过 3 像素。</p>
`;

// 人脸眉毛标准内容
const faceEyebrowContent = `
<h3>人脸眉毛标准</h3>
<p>标注眉毛时，需确定眉毛的起始点、最高点和结束点。起始点位于内眼角正上方，最高点为眉毛弯曲度最大处，结束点位于外眼角上方。眉毛线条应清晰流畅，厚度均匀，误差在 2 像素以内。</p>
`;

// 人脸眼睛标准内容
const faceEyeContent = `
<h3>人脸眼睛标准</h3>
<p>眼睛标注包括眼睑、瞳孔等部分。眼睑需精确勾勒出上眼睑和下眼睑的轮廓，瞳孔应位于眼睛中心位置，且标注形状与实际眼睛形状相似度需达到较高水平，各部分标注误差控制在 1 - 2 像素范围内。</p>
`;

// 人脸鼻子标准内容
const faceNoseContent = `
<h3>人脸鼻子标准</h3>
<p>标注鼻子时，需准确标注鼻尖、鼻翼等关键部位。鼻尖应位于鼻子的最前端，鼻翼的宽度和形状需与实际相符，整体标注应能体现鼻子的立体感和形状特征，误差不超过 3 像素。</p>
`;

// 人脸嘴部标准内容
const faceMouthContent = `
<h3>人脸嘴部标准</h3>
<p>嘴部标注包括嘴唇的轮廓、嘴角等。嘴唇轮廓应清晰准确地描绘出上唇和下唇的形状，嘴角位置需精确确定，标注应能反映嘴部的表情和开合状态，误差在 2 像素左右。</p>
`;

// 获取选项卡和内容区域元素
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// 为选项卡添加点击事件处理函数
tabs.forEach(tab => {
tab.addEventListener('click', function () {
  // 移除所有选项卡的 active 类
  tabs.forEach(t => t.classList.remove('active'));
  // 为当前点击的选项卡添加 active 类
  this.classList.add('active');

  // 隐藏所有选项卡内容区域
  tabContents.forEach(content => content.classList.remove('active'));

  // 根据点击的选项卡 data-tab 属性获取对应的内容并添加到相应的内容区域
  const tabId = this.dataset.tab;
  const content = document.getElementById(`${tabId}-content`);
  if (tabId === 'face-box') {
    content.innerHTML = faceBoxContent;
  } else if (tabId === 'face-outline') {
    content.innerHTML = faceOutlineContent;
  } else if (tabId === 'face-eyebrow') {
    content.innerHTML = faceEyebrowContent;
  } else if (tabId === 'face-eye') {
    content.innerHTML = faceEyeContent;
  } else if (tabId === 'face-nose') {
    content.innerHTML = faceNoseContent;
  } else if (tabId === 'face-mouth') {
    content.innerHTML = faceMouthContent;
  }
  content.classList.add('active');
});
});










































