import React, { Component } from 'react'
import {
  AreaChart,
  Area, XAxis,
  YAxis,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

class Chart extends Component {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} height={250} data={this.props.data}
          margin={{ top: 10, right: 0, left: 30, bottom: 20 }}>
          <Legend verticalAlign="top" height={36} wrapperStyle={styles.legend} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#03daff" />
              <stop offset="95%" stopColor="#6b57ff" />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4e98" />
              <stop offset="95%" stopColor="#ff4245" />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} style={styles.axis} />
          <YAxis axisLine={false} tickLine={false} orientation="right" style={styles.axis} />
          <CartesianGrid strokeDasharray="0.5 5" vertical={false} style={{ opacity: 0.3 }} />
          <Tooltip
            wrapperStyle={styles.tooltipWrapper}
            itemStyle={styles.axis}
            labelStyle={styles.axis}
            cursor={false} />

          <Area type="linear" name={this.props.y1Name} dataKey={this.props.y1} stroke="#03daff" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="linear" name={this.props.y2Name} dataKey={this.props.y2} stroke="#ff4245" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

const styles = {
  axis: {
    fontFamily: "Roboto",
    fontSize: "3vw",
  },
  legend: {
    fontFamily: "Roboto",
    fontSize: "3vw",
    color: 'rgba(255,255,255,0.8)'
  },
  tooltipWrapper: {
    backgroundColor: 'black'
  }
}

export default Chart