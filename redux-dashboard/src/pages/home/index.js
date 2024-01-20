import * as echarts from "echarts";
import { useEffect, useRef } from "react";

export const Home = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    //获取渲染的所有dom节点
    const chartDom = chartRef.current;
    //图表初始化生成实例对象
    const myChart = echarts.init(chartDom);
    //准备图表参数
    const option = {
      xAxis: {
        type: "category",
        data: ["Vue", "React", "Angular"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [10, 40, 70],
          type: "bar",
        },
      ],
    };
    //使用参数进行图标渲染
    option && myChart.setOption(option);
  }, []);
  return (
    <div>
      <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};
