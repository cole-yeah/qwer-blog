import React from 'react';
import {
  Chart,
  registerShape,
  Geom,
  Axis,
  Tooltip,
  Interval,
  Interaction,
  Coordinate,
  Legend
} from 'bizcharts';

const data = [
  {
    type: '分类一',
    value: 20,
  },
  {
    type: '分类二',
    value: 18,
  },
  {
    type: '分类三',
    value: 2,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: 'Other',
    value: 15,
  },
]; // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值

const sliceNumber = 0.01; // 自定义 other 的图形，增加两条线

registerShape('interval', 'sliceShape', {
  draw(cfg, container) {
    const points = cfg.points;
    let path = [];
    // @ts-ignore
    path.push(['M', points[0].x, points[0].y]);
    // @ts-ignore
    path.push(['L', points[1].x, points[1].y - sliceNumber]);
    // @ts-ignore
    path.push(['L', points[2].x, points[2].y - sliceNumber]);
    // @ts-ignore
    path.push(['L', points[3].x, points[3].y]);
    // @ts-ignore
    path.push('Z');
    // @ts-ignore
    path = this.parsePath(path);
    return container.addShape('path', {
      attrs: {
        fill: cfg.color,
        path: path,
      },
    });
  },
});

const Index = () => {
  return (
    <Chart data={data} height={300} autoFit>
      <Coordinate type="theta" radius={0.8} innerRadius={0.75} />
      <Axis visible={false} />
      <Tooltip showTitle={false} />
      <Interval
        adjust="stack"
        position="value"
        color="type"
        shape="sliceShape"
      />
      <Interaction type="element-single-selected" />
      <Legend position="right-top" />
    </Chart>
  );
};

export default Index;
