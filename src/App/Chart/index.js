import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

class Chart extends Component {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={this.props.data}
          margin={{ top: 10, right: 0, left: 30, bottom: 20 }}
        >
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={styles.legend}
          />
          <defs>
            {this.props.y1Name && (
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#03daff" />
                <stop offset="95%" stopColor="#6b57ff" />
              </linearGradient>
            )}
            {this.props.y2Name && (
              <linearGradient id="caster" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffe082" />
                <stop offset="95%" stopColor="#ff895d" />
              </linearGradient>
            )}
            {this.props.y3Name && (
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff4e98" />
                <stop offset="95%" stopColor="#ff4245" />
              </linearGradient>
            )}
            {this.props.y4Name && (
              <linearGradient id="fm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#35e685" />
                <stop offset="95%" stopColor="#019fd0" />
              </linearGradient>
            )}
          </defs>
          <XAxis
            dataKey={this.props.dataName || "name"}
            axisLine={false}
            tickLine={false}
            style={styles.axis}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            orientation="right"
            style={styles.axis}
          />
          <CartesianGrid
            strokeDasharray="0.5 5"
            vertical={false}
            style={{ opacity: 0.3 }}
          />
          <Tooltip
            wrapperStyle={styles.tooltipWrapper}
            itemStyle={styles.axis}
            labelStyle={styles.axis}
            cursor={false}
          />
          {this.props.y1Name && (
            <Area
              type="linear"
              name={this.props.y1Name}
              dataKey={this.props.y1}
              stroke="#03daff"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          )}
          {this.props.y3Name && (
            <Area
              type="linear"
              name={this.props.y3Name}
              dataKey={this.props.y3}
              stroke="#ff4245"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          )}
          {this.props.y2Name && (
            <Area
              type="linear"
              name={this.props.y2Name}
              dataKey={this.props.y2}
              stroke="#ffe082"
              fillOpacity={1}
              fill="url(#caster)"
            />
          )}
          {this.props.y4Name && (
            <Area
              type="linear"
              name={this.props.y4Name}
              dataKey={this.props.y4}
              stroke="#35e685"
              fillOpacity={1}
              fill="url(#fm)"
            />
          )}
          {this.props.referenceLine && (
            <ReferenceLine
              y={this.props.referenceLine}
              stroke={this.props.referenceLineColor || "white"}
              strokeDasharray="5 5"
            />
          )}
          {this.props.referenceLine2 && (
            <ReferenceLine
              y={this.props.referenceLine2}
              stroke={this.props.referenceLineColor2 || "white"}
              strokeDasharray="5 5"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

const styles = {
  axis: {
    fontFamily: "Roboto",
    fontSize: "3vw"
  },
  legend: {
    fontFamily: "Roboto",
    fontSize: "3vw",
    color: "rgba(255,255,255,0.8)"
  },
  tooltipWrapper: {
    backgroundColor: "black"
  }
};

export default Chart;
