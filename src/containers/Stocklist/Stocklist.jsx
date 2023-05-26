import { chartData } from "../../components/Headergraph";
import classes from "./Stocklist.module.scss";
import ReactApexChart from "react-apexcharts";



const Stocklist = (props) => {
  const { tabData } = props;
  return (
    <div className={classes.wrapper}>
      {tabData &&
        tabData.map((ele) => {
          return (
            <div className={classes.stockItem}>
              <div className={classes.stockInfoLeft}>
                <div className={classes.stockGraph}>
                  <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="area"
                    height={100}
                    width={72}
                    style={{
                      top: "-24px",
                      left: "-12px",
                      position: "relative",
                    }}
                  />
                </div>
                <div className={classes.stockName}>{ele.symbol}</div>
              </div>
              <div className={classes.stockInfoRight}>
                <div className={classes.stockdata1}>+0.35% +0.10</div>
                <div className={classes.stockdata2}>{ele.price}</div>
              </div>
            </div>
          );
        })}
   
    </div>
  );
};

export default Stocklist;
