import React, { Component } from 'react'
import {
  Bar,
  BarChart, XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Label
} from 'recharts'

class StackedChart extends Component {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={this.props.data}
          margin={{ top: 10, right: 0, left: 30, bottom: 20 }}>
          <Legend verticalAlign="top" height={36} wrapperStyle={styles.legend} />
          <defs>
            <linearGradient id="caster" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffe082" />
              <stop offset="95%" stopColor="#ff895d" />
            </linearGradient>
            <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#03daff" />
              <stop offset="95%" stopColor="#6b57ff" />
            </linearGradient>
            <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4e98" />
              <stop offset="95%" stopColor="#ff4245" />
            </linearGradient>
            <linearGradient id="pm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8a6bde" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8a6bde" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#35e685" />
              <stop offset="95%" stopColor="#019fd0" />
            </linearGradient>
          </defs>
          <XAxis dataKey="run" axisLine={false} tickLine={false} style={styles.axis} />
          <YAxis axisLine={false} tickLine={false} orientation="right" style={styles.axis} />
          <CartesianGrid strokeDasharray="0.5 5" vertical={false} style={{ opacity: 0.3 }} />
          <Tooltip
            wrapperStyle={styles.tooltipWrapper}
            itemStyle={styles.axis}
            labelStyle={styles.axis}
            cursor={false} />
          <Bar type="linear" name="Red" stackId="stack" dataKey="red" fillOpacity={1} fill="url(#red)" />
          <Bar type="linear" name="Blue" stackId="stack" dataKey="blue" fillOpacity={1} fill="url(#blue)" />
          <Bar type="linear" name="Caster" stackId="stack" dataKey="caster" fillOpacity={1} fill="url(#caster)" />
          <Bar type="linear" name="Menthol" stackId="stack" dataKey="menthol" fillOpacity={1} fill="url(#fm)" />
          {this.props.referenceLine &&
            <ReferenceLine y={this.props.referenceLine} stroke="white" strokeDasharray="5 5" />
          }
        </BarChart>
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

export default StackedChart
