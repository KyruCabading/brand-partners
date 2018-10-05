import React from 'react'
import { Card, Typography, IconButton } from '@material-ui/core/'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

import Section from '../Section'



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
                    title="Packs Sold per Month"
                />
                <Section
                    title="Sales"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />
                <Section
                    title="South GMA"
                />

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

