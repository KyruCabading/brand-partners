import React from 'react'
import { Card, Typography, IconButton } from '@material-ui/core/'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

import Section from '../Section'
import StackedChart from '../Chart/StackedChart'
import Chart from '../Chart'

import data from '../../local/area.json'

const style = {
    actions: {
        button: {
            width: 60,
            height: 60,
            color: 'white',
            top: '2vw',
            left: '2vw'
        }
    },

    card: {
        backgroundColor: "rgba(10,10,10)",
        width: "100vw"
    },

    close: {
        color: 'white'
    }
}

export default ({ location, history }) => {
    const { goBack } = history
    window.scrollTo(0, 0)
    return (
        <div>
            <Card style={style.card}>
                {goBack &&
                    <IconButton
                        style={style.actions.button}
                        aria-label="Back"
                        onClick={() => goBack()}
                    >
                        <ArrowBackIos />
                    </IconButton>}

                <Section
                    title="Barhop Activations"
                    content="Barhop activations happen every weekend for Winston partner outlets."
                />
                <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
                    <Section
                        title="Packs Sold per Run"
                        content="Average: 120"
                    />
                    <StackedChart data={data} x="run" lineA="Red" lineB="Blue" />
                </div>
                <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
                    <Section title="KPIs">
                        <Typography>
                            Smoker Contact purchase rate: 23.1% <br />
                        </Typography>
                    </Section>
                    <Chart
                        data={data}
                        y1Name="Customer Count"
                        y2Name="Unique Trialist"
                        y1="customerCount"
                        y2="uniqueTrialist"
                    />
                </div>

                <Typography variant="caption" className="gov-warning">
                    <div>.</div>
                    Government Warning:
                    <div>Cigarette Smoking is dangerous to your health.</div>
                    <div>.</div>
                </Typography>
            </Card>
        </div>
    )
}

