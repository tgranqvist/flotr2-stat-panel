Flotr.addType('stat', {
  options: {
    show: false,
    unit: null,
    textStyle: 'fill',
    title: 'Chart',
    titleSize: 18,
    titleAlign: 'center'
  },

  draw: function (options) {
    const {
      context, fontColor, data,
      titleAlign, titleSize, title,
      unit, fontSize, width, height, textStyle
    } = options;

    context.save();

    context.textBaseline = 'middle';
    context.textAlign = 'center';

    this.drawTitle(context, titleAlign, titleSize, width, title);
    this.drawValue(context, fontColor, fontSize, textStyle, data, unit, width, height);

    context.restore();
  },

  drawTitle(context, titleAlign, titleSize, width, title) {
    context.font = `${titleSize}px bold sans-serif`;

    const metrics = context.measureText(title);
    const titleY = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent; 
    let titleX;
    switch (titleAlign) {
      case 'right':
        titleX = (metrics.width / 2) + 5;
        break;
      case 'center':
        titleX = width / 2;
        break;
      case 'left':
        titleX = width - metrics.width / 2 - 5;
        break;
    }
    context.fillText(title, titleX, titleY);
  },

  drawValue(context, fontColor, fontSize, textStyle, data, unit, width, height) {
    context.fillStyle = fontColor;
    context.font = `${fontSize}px bold sans-serif`;
    if (textStyle === 'fill') {
      context.fillText(`${data}${unit ? ' ' + unit : ''}`, width / 2, height / 2);
    } else {
      context.strokeText(`${data}${unit ? ' ' + unit : ''}`, width / 2, height / 2);
    }
  }
});
