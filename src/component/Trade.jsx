import { useEffect } from "react";
import Highcharts from "highcharts";
import Highcharts3D from "highcharts/highcharts-3d";
import HighchartsData from "highcharts/modules/data";
import HighchartsAccessibility from "highcharts/modules/accessibility";

// Initialize modules properly
if (typeof Highcharts3D === "function") {
    Highcharts3D(Highcharts);
}
if (typeof HighchartsData === "function") {
    HighchartsData(Highcharts);
}
if (typeof HighchartsAccessibility === "function") {
    HighchartsAccessibility(Highcharts);
}


function Trade() {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha: 20,
          beta: 20
        }
      },
      title: {
        text: "",
        align: "left"
      },
      plotOptions: {
        series: {
          depth: 15,
          borderRadius: 3,
          dataLabels: [
            {
              enabled: false,
              distance: 5,
              format: "{point.name}"
            },
            {
              enabled: true,
              distance: "20%",
              filter: {
                property: "percentage",
                operator: ">",
                value: 5
              },
              format: "{point.name}",
              style: {
                fontSize: "0.55em",
                textOutline: "none"
              }
            }
          ]
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:9px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.colors}">{point.name}</span>: ' +
          "<b>{point.y:.2f}%</b> of total<br/>"
      },
      series: [
        {
          name: "Browsers",
          colors: ["#F6A120", "#D9D9D9"],
          colorByPoint: true,
          data: [
            {
              name: "XRP",
              y: 20
            },
            {
              name: "XRP",
              y: 80
            }
          ]
        }
      ]
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 px-3 gap-3">
        <div className=" w-full p-0 py-3">
          <div className="bg-transparent shadow-xl rounded-lg overflow-hidden card">
            <div className="bg-gray-100 bg-center p-2 py-1 flex justify-center items-center card-header">
              <span className="text-sm text-[#FF6711]">Trading On</span>
            </div>
            <div className="bg-white p-0 ">
              <div className=" text-gray-700 flex justify-between p-2 ">
                <div className="col-7">
                  <p className="text-xs text-gray-900 leading-none my-1">SOL</p>
                  <div className="flex justify-between">
                    <p className="text-[10px] text-gray-400 leading-tight">
                      Entry Price
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      0.3200
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[10px] text-gray-400 leading-tight">
                      Current Price
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      0.3200
                    </p>
                  </div>
                </div>
                <div className="col-5 text-end">
                  <p className="text-xs">100</p>
                </div>
              </div>
              <div className="h-0.5  bg-slate-200"></div>
              <div className=" text-gray-700 flex justify-between p-2 ">
                <div className="col-7">
                  <p className="text-xs text-gray-900 leading-none my-1">
                    Unrealized Profit
                  </p>
                </div>
                <div className="col-5 text-end">
                  <p className="text-xs">$0 </p>
                </div>
              </div>
            </div>
            <div className="bg-[#FF6711] text-slate-50 bg-center p-2 py-1 flex justify-center items-center card-footer">
              <span className="text-sm">View Position</span>
            </div>
          </div>
        </div>
        <div className="max-w-md w-full p-0 py-3">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 py-1 flex justify-center items-center">
              <span className="text-sm text-[#FF6711]">Total Assets</span>
            </div>
            <div className="p-0">
              <div id="container" className="w-full h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trade;
