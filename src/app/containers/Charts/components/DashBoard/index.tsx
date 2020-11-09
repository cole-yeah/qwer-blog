import React from 'react';
import {
  Chart,
  Point,
  Area,
  Annotation,
  Axis,
  Coordinate,
  registerShape,
} from 'bizcharts';

// 自定义Shape 部分
registerShape('point', 'pointer', {
  draw(cfg, container) {
    const group = container.addGroup();
    // @ts-ignore
    const center = this.parsePoint({ x: 0, y: 0 }); // 获取极坐标系下画布中心点
    // @ts-ignore
    const start = this.parsePoint({ x: 0, y: 0.5 }); // 获取极坐标系下起始点
    group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 9.75,
        stroke: cfg.color,
        lineWidth: 8,
        fill: '#999',
      },
    });
    // 绘制指针
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: start.x,
        y2: start.y,
        stroke: '#999',
        lineWidth: 5,
        lineCap: 'round',
      },
    });

    const angle1 = Math.atan((start.y - center.y) / (start.x - center.x));
    // @ts-ignore
    const angle = (Math.PI - 2 * angle1) * cfg.points[0].x;
    if (group.cfg.animable) {
      group.animate(ratio => {
        group.resetMatrix();
        group.rotateAtPoint(center.x, center.y, angle * ratio);
      }, 300);
    } else {
      group.rotateAtPoint(center.x, center.y, angle);
    }

    return group;
  },
});

const data = [{ value: 0.56 }];

const Index = () => {
  return (
    <Chart
      height={300}
      data={data}
      padding={[0, 0, 30, 0]}
      scale={{
        value: {
          min: 0,
          max: 1,
          tickInterval: 0.1,
          formatter: v => v * 100,
        },
      }}
      autoFit
    >
      <Coordinate
        type="polar"
        radius={0.75}
        startAngle={(-12 / 10) * Math.PI}
        endAngle={(2 / 10) * Math.PI}
      />
      <Axis name="1" />
      <Axis
        name="value"
        line={null}
        label={{
          offset: -36,
          style: {
            fontSize: 18,
            textAlign: 'center',
            textBaseline: 'middle',
          },
        }}
        subTickLine={{
          count: 1,
          length: -4,
        }}
        tickLine={{
          length: -24,
        }}
        grid={null}
      />
      <Point
        position="value*1"
        color="#1890FF"
        shape="pointer"
        animate={false}
      />
      <Annotation.Arc
        top={false}
        start={[0, 1]}
        end={[0.2, 1]}
        style={{
          stroke: '#79FF79',
          lineWidth: 18,
          lineDash: null,
        }}
      />
      <Annotation.Arc
        top={false}
        start={[0.2, 1]}
        end={[0.4, 1]}
        style={{
          stroke: '#9AFF02',
          lineWidth: 18,
          lineDash: null,
        }}
      />
      <Annotation.Arc
        top={false}
        start={[0.4, 1]}
        end={[0.6, 1]}
        style={{
          stroke: '#E1E100',
          lineWidth: 18,
          lineDash: null,
        }}
      />
      <Annotation.Arc
        top={false}
        start={[0.6, 1]}
        end={[0.8, 1]}
        style={{
          stroke: '#EAC100',
          lineWidth: 18,
          lineDash: null,
        }}
      />
      <Annotation.Arc
        top={false}
        start={[0.8, 1]}
        end={[1, 1]}
        style={{
          stroke: '#FF9224',
          lineWidth: 18,
          lineDash: null,
        }}
      />
      <Annotation.Text
        position={['50%', '85%']}
        content={'合格率'}
        style={{
          fontSize: 20,
          fill: '#545454',
          textAlign: 'center',
        }}
      />
      <Annotation.Text
        position={['50%', '90%']}
        content={`${(data[0].value * 100).toFixed()} %`}
        style={{
          fontSize: 36,
          fill: '#545454',
          textAlign: 'center',
        }}
        offsetY={15}
      />
    </Chart>
  );
};

export default Index;
